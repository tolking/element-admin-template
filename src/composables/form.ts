import { isFunction } from 'element-pro-components'
import type { Ref, MaybeRef } from 'vue'
import type { UseFetchReturn } from '@vueuse/core'
import type { IFormSubmit, StringObject } from 'element-pro-components'

export type ReqFormType = 'post' | 'put'

export interface UseFormConfig<T, K> {
  url: MaybeRef<string>
  showTip?: MaybeRef<boolean>
  type?: MaybeRef<ReqFormType>
  transform?: (form: T) => T
  afterSubmit?: (res: K | null) => void
}

export interface UseFormReturn<T, K> extends UseFetchReturn<K> {
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
 * @param config.afterSubmit 提交表单后执行的回调函数
 */
export function useForm<Form = StringObject, Data = unknown>({
  url,
  transform,
  showTip = true,
  type = 'post',
  afterSubmit,
}: UseFormConfig<Form, Data>): UseFormReturn<Form, Data> {
  const _type = ref(unref(type))
  const form = ref({}) as Ref<Form>
  const payload = ref({}) as Ref<Form>

  const _url = computed(() => {
    return replaceId(unref(url), (payload.value as { id?: string }).id)
  })

  const postForm = usePost<Data>(url, payload)
  const putForm = usePut<Data>(_url, payload)

  const submit: IFormSubmit = async (done, isValid) => {
    if (isValid) {
      const res = await submitForm()

      if (res.value) {
        unref(showTip) && appMessage('success', '提交成功！')
      } else if (res.value !== null) {
        unref(showTip) && appMessage('warning', '提交失败！')
      }
      isFunction(afterSubmit) && afterSubmit(res.value)
    }
    done()
  }

  async function submitForm(reqType?: ReqFormType) {
    if (reqType) {
      _type.value = reqType
    }
    setPayload()

    if (_type.value === 'post') {
      await postForm.execute()
      return postForm.data
    } else {
      await putForm.execute()

      return putForm.data
    }
  }

  function setPayload() {
    payload.value = isFunction(transform) ? transform(unref(form)) : form.value
  }

  return {
    ...(_type.value === 'put' ? putForm : postForm),
    form,
    submit,
    submitForm,
  }
}
