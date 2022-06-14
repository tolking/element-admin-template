import { useStorage } from '@vueuse/core'
import { useGet } from './index'
import { Api } from '../utils/index'

interface CatesItem {
  label: string
  value: string
}

/** 缓存分类数据值 */
export function useCatesList() {
  const list = useStorage<CatesItem[]>('CatesList', [])
  const { data, execute } = useGet<{ list: CatesItem[] }>(Api.cates)

  !list.value?.length && loadList()

  async function loadList() {
    await execute()

    if (data.value?.list) {
      list.value = data.value.list
    }
  }

  return list
}
