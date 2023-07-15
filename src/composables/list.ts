import { isFunction } from 'element-pro-components'
import type { Ref } from 'vue'
import type { UseFetchReturn } from '@vueuse/core'
import type { IFormSubmit, StringObject } from 'element-pro-components'
import type { UseDetailConfig } from './detail'
import type { PagesData } from '../types/index'

export interface UseListConfig<T> extends UseDetailConfig {
  transform?: (form: T) => T
}

export interface UseListReturn<T, K>
  extends Omit<UseFetchReturn<PagesData<T>>, 'data' | 'execute'> {
  query: Ref<K>
  list: Ref<T[]>
  page: Ref<number>
  limit: Ref<number>
  total: Ref<number>
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
  const query = ref({}) as Ref<Serach>
  const payload = ref({}) as Ref<Serach>
  const list = ref<Item[]>([]) as Ref<Item[]>

  const { isFetching, data, execute, ...args } = useGet<PagesData<Item>>(
    url,
    payload,
  )

  const search: IFormSubmit = async (done, isValid) => {
    if (isValid) {
      page.value = 1
      await loadList()
    }
    done()
  }

  unref(immediate) && loadList()

  async function loadList() {
    if (isFetching.value) return
    setPayload()
    await execute()

    if (data.value) {
      backtop()
      list.value = data.value.list
      total.value = data.value.total
    }
  }

  function setPayload() {
    const _query = isFunction(transform) ? transform(unref(query)) : query.value

    payload.value = {
      ..._query,
      [RequestPageKey]: page.value,
      [RequestLimitkey]: limit.value,
    }
  }

  return {
    ...args,
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
