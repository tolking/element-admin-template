import { Ref, ref, UnwrapRef } from 'vue'
import { ElMessage } from 'element-plus'
import type { IFormSubmit, UnknownFunction } from 'element-pro-components'

/**
 * 统一提交表单
 * @param getForm 获取列表函数
 * @param create 新增表单函数
 * @param update 更新表单函数
 */
export function useForm<T>({
  create,
  transform,
}: {
  create: UnknownFunction
  transform: <T, Q = T>(form: T) => Q
}): {
  form: Ref<UnwrapRef<T>>
  submit: IFormSubmit
} {
  const form = ref<T>({} as T)
  const submit: IFormSubmit = async (deno, isValid) => {
    if (isValid) {
      const _form = transform ? transform(form.value) : form.value
      const res = await create(_form)

      if (res) {
        ElMessage({ type: 'success', message: '操作成功' })
      }
    }
    deno()
  }

  return {
    form,
    submit,
  }
}
