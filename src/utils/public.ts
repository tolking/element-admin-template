import type { UnknownObject } from 'element-pro-components'

/**
 * 格式化 `GET` 请求对象
 * @param obj 请求对象
 */
export function stringify(obj: UnknownObject): string {
  let str = ''

  for (const key in obj) {
    str +=
      obj[key] !== undefined && obj[key] !== null && obj[key] !== ''
        ? `${str ? '&' : ''}${key}=${obj[key]}`
        : ''
  }

  return str
}
