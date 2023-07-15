import type { Ref } from 'vue'
import type { UseFetchReturn } from '@vueuse/core'
import type { UnknownObject, MaybeRef } from 'element-pro-components'

export interface UseDetailConfig {
  url: MaybeRef<string>
  immediate?: MaybeRef<boolean>
}

export interface UseDetailReturn<T>
  extends Omit<UseFetchReturn<T>, 'data' | 'execute'> {
  isFetching: Ref<boolean>
  detailId: Ref<string | number | undefined>
  detail: Ref<T | null>
  loadDetail: () => Promise<void>
}

/**
 * 封装获取详情
 * @param config.url 请求地址
 * @param config.immediate 是否在修改ID时加载，默认: `true`
 */
export function useDetail<T = UnknownObject>({
  url,
  immediate = true,
}: UseDetailConfig): UseDetailReturn<T> {
  const detailId = ref<string | number | undefined>(undefined)
  const _url = computed(() => replaceId(unref(url), detailId.value))
  const { isFetching, data, execute, ...args } = useGet<T>(_url)

  unref(immediate) &&
    watch(detailId, (val) => {
      val !== undefined && loadDetail()
    })

  async function loadDetail() {
    if (isFetching.value) return
    await execute()
  }

  return {
    ...args,
    isFetching,
    detailId,
    detail: data,
    loadDetail,
  }
}
