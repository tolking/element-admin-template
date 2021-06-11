import { isObject } from '@vue/shared'
import { useSessionStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import router from '../router'
import { Token_key, stringify } from '.'

async function request<T>(
  method: string,
  url: string,
  data?: unknown,
  options?: Record<string, unknown>
): Promise<T | undefined> {
  const token = useSessionStorage<string>(Token_key, '')
  const api =
    method === 'Get' && data && isObject(data)
      ? `${url}?${stringify(data)}`
      : url
  const config = Object.assign(
    {
      method: method === 'Upload' ? 'Post' : method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: '',
      },
      body:
        method !== 'Get' && data
          ? method === 'Upload'
            ? (data as BodyInit)
            : JSON.stringify(data)
          : undefined,
    },
    options
  )
  if (token && token.value) {
    config.headers.Authorization = 'Berar ' + token.value
  }

  return fetch(api, config)
    .then((res) => {
      return res.json()
    })
    .then((res: T | undefined) => {
      if (res) {
        return res || ({} as T)
      } else {
        return undefined
      }
    })
    .catch((err) => {
      console.log(err)
      ElMessage({
        type: 'error',
        message: err.message || '请求错误',
      })
      token.value = ''
      router.push('/login')
      return undefined
    })
}

export async function get<T>(
  url: string,
  data?: unknown
): Promise<undefined | T> {
  return request<T>('Get', url, data)
}

export async function post<T>(
  url: string,
  data?: unknown,
  options?: Record<string, unknown>
): Promise<undefined | T> {
  return request<T>('Post', url, data, options)
}

export async function put<T>(
  url: string,
  data: unknown
): Promise<undefined | T> {
  return request<T>('Put', url, data)
}

export async function del<T>(
  url: string,
  data?: unknown
): Promise<undefined | T> {
  return request<T>('Delete', url, data)
}

export async function upload<T>(
  url: string,
  data?: unknown
): Promise<undefined | T> {
  return request<T>('Upload', url, data, { headers: {} })
}
