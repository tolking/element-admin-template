import { isClient } from '@vueuse/core'
import { ElMessage, ElMessageBox } from 'element-plus'
import type {
  MessageOptions,
  MessageHandler,
  ElMessageBoxOptions,
  MessageBoxData,
} from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'

/**
 * 显示提示弹窗
 * @param type 提示类型
 * @param message 提示信息
 * @param option 更多配置
 */
export function appMessage(
  type: MessageOptions['type'],
  message: MessageOptions['message'],
  option = {} as MessageOptions
): MessageHandler {
  return ElMessage(Object.assign(option, { type, message }))
}

/**
 * 显示提示对话框
 * @param message 提示内容
 * @param title 提示标题
 * @param option 更多配置
 */
export function appConfirm(
  message: string,
  title: string,
  option = {} as ElMessageBoxOptions
): Promise<MessageBoxData> {
  return ElMessageBox.confirm(message, title, option)
}

/**
 * 向字符串末尾增加分隔符
 * @param string 字符串
 */
export function withEndSeparator(string: string): string {
  return /\/$/.test(string) ? string : string + '/'
}

/**
 * 替换链接ID，或者直接后缀ID
 * @param url 请求链接
 * @param arg 替换的ID值，注意排序
 *
 * ```
 * const api1 = replaceId('/api', 1)
 * api // '/api/1'
 * const api2 = replaceId('/api/{id}', 2)
 * api2 // '/api/2'
 * const api3 = replaceId('/api/{id}/child', 3)
 * api3 // '/api/3/child'
 * const api4 = replaceId('/api/{id}/{cId}', 'test', 4)
 * api4 // '/api/test/4'
 * ```
 */
export function replaceId(
  url: string,
  ...arg: Array<string | number | undefined>
): string {
  const [id, ...next] = arg

  if (id !== undefined && /\{\w*\}/.test(url)) {
    url = url.replace(/\{\w*\}/, String(id))
  } else if (id !== undefined) {
    url = withEndSeparator(url) + id
  } else {
    return url
  }

  return replaceId(url, ...next)
}

/**
 * 创建虚拟链接下载文件
 * @param blob 文件数据，通过 `useBlob` 获取
 * @param name 下载文件名称
 */
export function createDownload(blob: Blob, name?: string): void {
  const blobURL = window.URL.createObjectURL(blob)
  const tempLink = document.createElement('a')

  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', name || 'download')
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  window.URL.revokeObjectURL(blobURL)
}

/** 返回顶部 */
export function backtop() {
  if (isClient) {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
}
