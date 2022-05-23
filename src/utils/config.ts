/** 存储全局信息的键值 */
export const GlobalStorageKey = 'App_Storage'

/**
 * 请求时携带在 headers 中的认证 token 的键值
 * 当为 `''` 时将不会携带
 */
export const RequestAuthKey = ''

/** 请求时是否携带 cookie 值 */
export const RequestWithCookie = false

/** 请求过期时间 */
export const RequestTimeout = 30000

/** 请求当前页键值 */
export const RequestPageKey = 'page'

/** 请求条数键值 */
export const RequestLimitkey = 'limit'

/** 请求列表是默认条数 */
export const RequestLimit = 20

/** 路由白名单 */
export const AllowList = ['/login']
