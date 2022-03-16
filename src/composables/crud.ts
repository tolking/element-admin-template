import { useGet, usePost, usePut, useDelete } from './index'
import {
  appMessage,
  appConfirm,
  replaceId,
  RequestPageKey,
  RequestLimitkey,
  RequestLimit,
} from '../utils/index'
import type { Ref } from 'vue'
import type {
  ICrudSubmit,
  ICrudBeforeOpen,
  IFormSubmit,
  StringObject,
  UnknownObject,
  MaybeRef,
} from 'element-pro-components'
import type { PagesData } from '../types/index'

interface CommonConfig {
  url: MaybeRef<string>
  immediate?: boolean
}

export type ReqFormType = 'post' | 'put'

export interface UseFormConfig<T> {
  url: MaybeRef<string>
  showTip?: boolean
  type?: ReqFormType
  transform?: (form: T) => T
}

export interface UseFormReturn<T, K> {
  isFetching: Ref<boolean>
  form: Ref<T>
  submit: IFormSubmit
  submitForm: (type?: ReqFormType) => Promise<Ref<K | null>>
}

/**
 * 封装表单提交
 * @param config.url 请求地址
 * @param config.showTip 显示提示，默认: `true`
 * @param config.type 提交请求方式 post | put，默认: `post`
 * @param config.transform 转换表单
 */
export function useForm<Form = StringObject, Data = unknown>({
  url,
  transform,
  showTip = true,
  type = 'post',
}: UseFormConfig<Form>): UseFormReturn<Form, Data> {
  const isFetching = ref(false)
  const form = ref({}) as Ref<Form>
  const payload = computed(() => {
    return transform ? transform(unref(form)) : form.value
  })
  const _url = computed(() => {
    return replaceId(unref(url), (payload.value as { id?: string }).id)
  })
  const postForm = usePost<Data>(url, payload)
  const putForm = usePut<Data>(_url, payload)
  const submit: IFormSubmit = async (done, isValid) => {
    if (isValid) {
      const res = await submitForm()

      if (res.value) {
        showTip && appMessage('success', '提交成功!')
      } else if (res.value !== null) {
        showTip && appMessage('warning', '提交失败!')
      }
    }
    done()
  }

  async function submitForm(reqType = type) {
    isFetching.value = true
    if (reqType === 'post') {
      await postForm.execute()
      isFetching.value = false
      return postForm.data
    } else {
      await putForm.execute()
      isFetching.value = false
      return putForm.data
    }
  }

  return {
    isFetching,
    form,
    submit,
    submitForm,
  }
}

export interface UseDetailConfig extends CommonConfig {
  id?: MaybeRef<string | number | undefined>
}

export interface UseDetailReturn<T> {
  isFetching: Ref<boolean>
  detail: Ref<T | null>
  loadDetail: () => Promise<void>
}

/**
 * 封装获取详情
 * @param config.url 请求地址
 * @param config.id 请求加载的id
 * @param config.immediate 是否在修改ID时加载，默认: `true`
 */
export function useDetail<T = UnknownObject>({
  url,
  id,
  immediate = true,
}: UseDetailConfig): UseDetailReturn<T> {
  const _url = computed(() => replaceId(unref(url), unref(id)))
  const { isFetching, data, execute } = useGet<T>(_url)

  immediate && loadDetail()

  async function loadDetail() {
    if (isFetching.value) return
    await execute()
  }

  return {
    isFetching,
    detail: data,
    loadDetail,
  }
}

export interface UseListConfig<T> extends CommonConfig {
  transform?: (form: T) => T
}

export interface UseListReturn<T, K> {
  query: Ref<K>
  isFetching: Ref<boolean>
  page: Ref<number>
  limit: Ref<number>
  total: Ref<number>
  list: Ref<T[]>
  search: IFormSubmit
  loadList: () => Promise<void>
}

/**
 * 封装获取列表
 * @param config.url 请求地址
 * @param config.immediate 是否在初始化时加载，默认: `true`
 * @param config.transform 转换搜索
 */
export function useList<Item = StringObject, Serach = Item>({
  url,
  transform,
  immediate = true,
}: UseListConfig<Serach>): UseListReturn<Item, Serach> {
  const page = ref(1)
  const limit = ref(RequestLimit)
  const total = ref(0)
  const query = ref<Serach>({} as Serach) as Ref<Serach>
  const payload = computed(() => {
    const _query = transform ? transform(unref(query)) : query.value
    return {
      ..._query,
      [RequestPageKey]: page.value,
      [RequestLimitkey]: limit.value,
    }
  })
  const { isFetching, data, execute } = useGet<PagesData<Item>>(url, payload)
  const list = ref<Item[]>([]) as Ref<Item[]>
  const search: IFormSubmit = async (done, isValid) => {
    if (isValid) {
      page.value = 1
      await loadList()
    }
    done()
  }

  immediate && loadList()

  async function loadList() {
    if (isFetching.value) return
    await execute()

    if (data.value) {
      list.value = data.value.list
      total.value = data.value.total
    }
  }

  return {
    query,
    isFetching,
    page,
    limit,
    total,
    list,
    search,
    loadList,
  }
}

export interface UseCrudConfig<T, K>
  extends CommonConfig,
    Pick<UseFormConfig<T>, 'showTip' | 'transform'> {
  syncDetail?: boolean
  transformQuery?: (form: K) => K
  transformDetail?: (form: T) => T
}

export interface UseCrudReturn<T, K, Q, M>
  extends UseListReturn<T, Q>,
    Pick<UseFormReturn<K, M>, 'form' | 'submitForm'> {
  beforeOpen: ICrudBeforeOpen<T>
  submit: ICrudSubmit
  deleteRow: (row: T) => void
}

/**
 * 封装 Crud
 * @param config.url 请求地址
 * @param config.immediate 是否在初始化时加载，默认: `true`
 * @param config.showTip 显示提示，默认: `true`
 * @param config.syncDetail 是否需要异步加载详情
 * @param config.transform 转换表单
 * @param config.transformQuery 转换搜索
 * @param config.transformDetail 转换详情到表单
 */
export function useCrud<
  Item = StringObject,
  Form = Item,
  Serach = Item,
  Data = unknown
>({
  url,
  immediate = true,
  showTip = true,
  syncDetail = false,
  transform,
  transformQuery,
  transformDetail,
}: UseCrudConfig<Form, Serach>): UseCrudReturn<Item, Form, Serach, Data> {
  const id = ref<string | number | undefined>(undefined)
  const listCore = useList<Item, Serach>({
    url,
    immediate,
    transform: transformQuery,
  })
  const { form, submitForm } = useForm<Form, Data>({ url, transform })
  const { detail, loadDetail } = useDetail<Form>({ url, id, immediate: false })
  const delUrl = computed(() => replaceId(unref(url), id.value))
  const { data, execute } = useDelete<Data>(delUrl)
  const beforeOpen: ICrudBeforeOpen = async (done, formType, row) => {
    if (formType === 'edit') {
      let value = row
      if (syncDetail) {
        const _row = row as Item & { id: string | number }

        if (_row.id) {
          id.value = _row.id
          await loadDetail()

          if (detail.value) {
            value = detail.value
          }
        }
      }

      form.value = transformDetail ? transformDetail(value) : value
    }

    done()
  }
  const submit: ICrudSubmit = async (close, done, formType, isValid) => {
    if (isValid) {
      const res = await submitForm(formType === 'add' ? 'post' : 'put')

      if (res.value) {
        showTip && appMessage('success', '提交成功！')
        listCore.loadList()
        close()
      } else if (res.value !== null) {
        showTip && appMessage('warning', '提交失败！')
      }
    }
    done()
  }

  function deleteRow(row: Item) {
    appConfirm('您确定要删除该项吗？', '警告', { type: 'warning' })
      .then(async () => {
        const _row = row as Item & { id: string | number }

        id.value = _row.id
        await execute()

        if (data.value) {
          showTip && appMessage('success', '删除成功')
          listCore.loadList()
        } else {
          showTip && appMessage('warning', '删除失败')
        }
      })
      .catch(() => {
        appMessage('info', '已取消操作')
      })
  }

  return {
    ...listCore,
    form,
    beforeOpen,
    submit,
    submitForm,
    deleteRow,
  }
}
