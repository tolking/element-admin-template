import { useGet, usePost, usePut, useDelete } from './index'
import { appMessage, appConfirm, replaceId, RequestPageKey, RequestLimitkey } from '../utils/index'
import type { Ref } from 'vue'
import type {
  ICrudSearch,
  ICrudSubmit,
  ICrudBeforeOpen,
  IFormSubmit,
  StringObject,
  UnknownObject,
  MaybeRef,
} from 'element-pro-components'
import type { PagesData } from '../types/index'

type ReqType = 'post' | 'put'

interface FormAttrs<T> {
  url: MaybeRef<string>
  showTip?: boolean
  suffix?: boolean
  type?: ReqType
  transform?: (form: T) => T
}

/**
 * 封装表单提交
 * @param url 请求地址
 * @param showTip 显示提示，默认: `true`
 * @param type 提交请求方式 post | put，默认: `post`
 * @param transform 转换表单
 */
export function useForm<Form = StringObject, Data = unknown>({
  url,
  transform,
  showTip = true,
  type = 'post',
}: FormAttrs<Form>): {
  isFetching: Ref<boolean>
  form: Ref<Form>
  submit: IFormSubmit
  submitForm: (type?: ReqType) => Promise<Ref<Data | null>>
} {
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

interface DetailAttr {
  url: MaybeRef<string>
  id?: MaybeRef<string | number | undefined>
  immediate?: boolean
}

/**
 * 封装获取详情
 * @param url 请求地址
 * @param id 请求加载的id
 * @param immediate 是否在修改ID时加载，默认: `true`
 */
export function useDetail<T = UnknownObject>({
  url,
  id,
  immediate = true,
}: DetailAttr): {
  isFetching: Ref<boolean>
  detail: Ref<T>
  loadDetail: () => Promise<void>
} {
  const detail = ref({} as T) as Ref<T>
  const _url = computed(() => replaceId(unref(url), unref(id)))
  const { isFetching, data, execute } = useGet<T>(_url)

  immediate && loadDetail()

  async function loadDetail() {
    if (isFetching.value) return
    await execute()

    if (data.value) {
      detail.value = data.value
    }
  }

  return {
    isFetching,
    detail,
    loadDetail,
  }
}

/** 统一分页 */
export function usePagination(): {
  page: Ref<number>
  limit: Ref<number>
  total: Ref<number>
} {
  const page = ref(1)
  const limit = ref(20)
  const total = ref(0)

  return {
    page,
    limit,
    total,
  }
}

interface ListAttr<T> {
  url: MaybeRef<string>
  transform?: (form: T) => T
  immediate?: boolean
}

/**
 * 封装获取列表
 * @param url 请求地址
 * @param immediate 是否在初始化时加载，默认: `true`
 * @param transform 转换搜索
 */
export function useList<Item = StringObject, Serach = Item>({
  url,
  transform,
  immediate = true,
}: ListAttr<Serach>): {
  query: Ref<Serach>
  isFetching: Ref<boolean>
  page: Ref<number>
  limit: Ref<number>
  total: Ref<number>
  list: Ref<Item[]>
  loadList: () => Promise<void>
} {
  const { page, limit, total } = usePagination()
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
    loadList,
  }
}

interface CrudAttr<Form, Serach> {
  url: MaybeRef<string>
  immediate?: boolean
  showTip?: boolean
  syncDetail?: boolean
  transform?: (form: Form) => Form
  transformQuery?: (form: Serach) => Serach
  transformDetail?: (form: Form) => Form
}

/**
 * 封装 Crud
 * @param url 请求地址
 * @param immediate 是否在初始化时加载，默认: `true`
 * @param showTip 显示提示，默认: `true`
 * @param syncDetail 是否需要异步加载详情
 * @param transform 转换表单
 * @param transformQuery 转换搜索
 * @param transformDetail 转换详情到表单
 */
 export function useCrud<Item = StringObject, Form = Item, Serach = Item, Data = unknown>({
  url,
  immediate = true,
  showTip = true,
  syncDetail = false,
  transform,
  transformQuery,
  transformDetail,
}: CrudAttr<Form, Serach>): {
  isFetching: Ref<boolean>
  page: Ref<number>
  limit: Ref<number>
  total: Ref<number>
  list: Ref<Item[]>
  loadList: () => Promise<void>
  query: Ref<Serach>
  search: ICrudSearch
  form: Ref<Form>
  beforeOpen: ICrudBeforeOpen<Item>
  submit: ICrudSubmit
  submitForm: (type?: ReqType) => Promise<Ref<Data | null>>
  deleteRow: (row: Item) => void
} {
  const { query, isFetching, page, limit, total, list, loadList } = useList<
    Item,
    Serach
  >({ url, immediate, transform: transformQuery })
  const id = ref<string | number | undefined>(undefined)
  const { form, submitForm } = useForm<Form, Data>({ url, transform })
  const { detail, loadDetail } = useDetail<Form>({ url, id, immediate: false })
  const delUrl = computed(() => replaceId(unref(url), id.value))
  const { data, execute } = useDelete<Data>(delUrl)
  const search: ICrudSearch = async (done, isValid) => {
    if (isValid) {
      page.value = 1
      await loadList()
    }
    done()
  }
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
        loadList()
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
          appMessage('success', '删除成功')
          loadList()
        } else {
          appMessage('warning', '删除失败')
        }
      })
      .catch(() => {
        appMessage('info', '已取消操作')
      })
  }

  return {
    isFetching,
    page,
    limit,
    total,
    list,
    loadList,
    query,
    search,
    form,
    beforeOpen,
    submit,
    submitForm,
    deleteRow,
  }
}
