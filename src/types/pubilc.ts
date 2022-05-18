// NOTE: 如果你分页列表不是返回下面这种格式，需要根据情况修改。然后修改 `composables/crud.ts` 中 `useList` 报错部分
/** 分页数据公用组装 */
export interface PagesData<T> {
  list: T[]
  total: number
}
