import type { ResLogin } from '../types/index'

/** 存储全局响应变量 */
export const useGlobalState = createGlobalState(() =>
  useStorage<ResLogin>(GlobalStorageKey, {
    token: '',
    name: '',
    avatar: '',
  })
)
