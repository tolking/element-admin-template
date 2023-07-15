import { isFunction } from '@vueuse/core'
import type { MaybeRef } from '@vueuse/core'
import type {
  ICrudSubmit,
  ICrudBeforeOpen,
  StringObject,
} from 'element-pro-components'
import type { UseDetailConfig } from './detail'
import type { UseListReturn } from './list'
import type { UseFormConfig, UseFormReturn } from './form'

export interface UseCrudConfig<T, K, U, F>
  extends UseDetailConfig,
    Pick<UseFormConfig<K, F>, 'showTip' | 'transform' | 'afterSubmit'> {
  syncDetail?: MaybeRef<boolean>
  transformQuery?: (form: U) => U
  transformDetail?: (form: T | K) => K
}

export interface UseCrudReturn<T, K, Q, M>
  extends UseListReturn<T, Q>,
    Pick<UseFormReturn<K, M>, 'form' | 'submitForm'> {
  beforeOpen: ICrudBeforeOpen<T>
  submit: ICrudSubmit
  deleteRow: (row: T) => Promise<void>
}

/**
 * 封装 Crud
 * @param config.url 请求地址
 * @param config.immediate 是否在初始化时加载，默认: `true`
 * @param config.showTip 显示提示，默认: `true`
 * @param config.syncDetail 是否需要异步加载详情，默认: `false`
 * @param config.transform 转换表单
 * @param config.transformQuery 转换搜索
 * @param config.transformDetail 转换详情到表单
 * @param config.afterSubmit 提交表单后执行的回调函数
 */
export function useCrud<
  Item = StringObject,
  Form = Item,
  Serach = Item,
  Data = unknown,
>({
  url,
  immediate = true,
  showTip = true,
  syncDetail = false,
  transform,
  transformQuery,
  transformDetail,
  afterSubmit,
}: UseCrudConfig<Item, Form, Serach, Data>): UseCrudReturn<
  Item,
  Form,
  Serach,
  Data
> {
  const listCore = useList<Item, Serach>({
    url,
    immediate,
    transform: transformQuery,
  })
  const { form, submitForm } = useForm<Form, Data>({ url, showTip, transform })
  const { deleteId, submitRemove } = useRemove<Data>({ url, showTip })
  const { detailId, detail, loadDetail } = useDetail<Form>({
    url,
    immediate: false,
  })

  const beforeOpen: ICrudBeforeOpen<Item> = async (done, type, row) => {
    if (type === 'edit' || type === 'detail') {
      let value = { ...row } as (Item | Form) & { id?: string | number }

      if (unref(syncDetail) && value?.id) {
        detailId.value = value.id
        await loadDetail()

        if (detail.value) {
          value = detail.value
        }
      }

      form.value = isFunction(transformDetail)
        ? transformDetail(value)
        : (value as Form)
    } else {
      form.value = {} as Form
    }
    done()
  }

  const submit: ICrudSubmit = async (close, done, type, isValid) => {
    if (isValid) {
      const res = await submitForm(type === 'add' ? 'post' : 'put')

      if (res.value) {
        showTip && appMessage('success', '提交成功！')
        listCore.loadList()
        close()
      } else if (res.value !== null) {
        showTip && appMessage('warning', '提交失败！')
      }
      isFunction(afterSubmit) && afterSubmit(res.value)
    }
    done()
  }

  async function deleteRow(row: Item) {
    const _row = row as Item & { id: string | number }
    deleteId.value = _row.id
    const res = await submitRemove()
    res?.value && listCore.loadList()
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
