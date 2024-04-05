import type { Ref, MaybeRef } from 'vue'
import type { UseFetchReturn } from '@vueuse/core'
import type { UseDetailConfig } from './detail'

export interface UseRemoveConfig extends UseDetailConfig {
  showTip?: MaybeRef<boolean>
}

export interface UseRemoveReturn<T>
  extends Omit<UseFetchReturn<T>, 'data' | 'execute'> {
  deleteId: Ref<string | number | undefined>
  submitRemove: () => Promise<Ref<T | null> | undefined>
}

/**
 * 封装删除某项
 * @param config.url 请求地址
 * @param config.immediate 是否在修改ID时直接调用删除，默认: `false`
 * @param config.showTip 显示提示，默认: `true`
 */
export function useRemove<T = unknown>({
  url,
  immediate = false,
  showTip = true,
}: UseRemoveConfig): UseRemoveReturn<T> {
  const deleteId = ref<string | number | undefined>(undefined)

  const _url = computed(() => replaceId(unref(url), deleteId.value))

  const { data, execute, ...args } = useDelete<T>(_url)

  unref(immediate) &&
    watch(deleteId, (val) => {
      val !== undefined && submitRemove()
    })

  function submitRemove() {
    return appConfirm('警告', '您确定要删除该项吗?', { type: 'warning' })
      .then(async () => {
        await execute()

        if (data.value) {
          deleteId.value = undefined
          unref(showTip) && appMessage('success', '删除成功!')
        } else {
          unref(showTip) && appMessage('warning', '删除失败!')
        }
        return data
      })
      .catch(() => {
        deleteId.value = undefined
        appMessage('info', '已取消操作')
        return undefined
      })
  }

  return {
    ...args,
    deleteId,
    submitRemove,
  }
}
