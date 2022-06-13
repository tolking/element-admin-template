import { computed, unref } from 'vue'
import { stringifyQuery, LocationQueryRaw } from 'vue-router'
import { createFetch, isObject, MaybeRef, UseFetchReturn } from '@vueuse/core'
import { useGlobalState } from './index'
import {
  RequestAuthKey,
  RequestWithCookie,
  RequestTimeout,
  appMessage,
} from '../utils/index'
import router from '../router/index'

const baseUrl = import.meta.env.VITE_BASE_URL
const useRequest = createFetch({
  baseUrl,
  options: {
    immediate: false,
    timeout: RequestTimeout,
    beforeFetch({ options }) {
      const state = useGlobalState()

      // NOTE: 在线 mock api 使用，你不需要下面这段
      options.headers = Object.assign(options.headers || {}, {
        'app-token':
          '$2a$10$oWYgEw/X1hj9BbvejQOud.xFezq5wP8H7NGkVA.4HcChK928Z2nja',
      })

      if (RequestAuthKey && state.value.token) {
        options.headers = Object.assign(options.headers || {}, {
          [RequestAuthKey]: state.value.token,
        })
      }

      return { options }
    },
    afterFetch({ data, response }) {
      const state = useGlobalState()
      const status = data.code

      // NOTE: 拦截返回，需要根据具体返回修改
      if (status === 200) {
        data = data.data || {}
      } else if (status === 401) {
        state.value = {
          token: '',
          name: '',
          avatar: '',
        }
        appMessage('warning', '登陆已经过期')
        setTimeout(() => {
          router.push('/login')
        }, 1500)
        data = null
      } else if (status === 1000) {
        console.error(data.message)
        appMessage('warning', data.message)
        data = null
      } else if (status) {
        console.log('出现未全局拦截错误')
        data = undefined
      }

      import.meta.env.MODE === 'development' && console.log('result:', data)

      return { data, response }
    },
    onFetchError({ data, error }) {
      console.error(error)
      data = undefined
      return { data, error }
    },
  },
  fetchOptions: {
    mode: 'cors',
    credentials: RequestWithCookie ? 'include' : 'same-origin',
  },
})

/**
 * 封装 get 请求
 * @param url 请求地址
 * @param query 请求参数
 */
export function useGet<T = unknown>(
  url: MaybeRef<string>,
  query?: MaybeRef<unknown>
): UseFetchReturn<T> {
  const _url = computed(() => {
    const _url = unref(url)
    const _query = unref(query)
    const queryString = isObject(_query)
      ? stringifyQuery(_query as LocationQueryRaw)
      : _query || ''
    return `${_url}${queryString ? '?' : ''}${queryString}`
  })

  return useRequest<T>(_url).json()
}

/**
 * 封装 post 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePost<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>
): UseFetchReturn<T> {
  return useRequest<T>(url).post(payload).json()
}

/**
 * 封装 put 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePut<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>
): UseFetchReturn<T> {
  return useRequest<T>(url).put(payload).json()
}

/**
 * 封装 delete 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function useDelete<T = unknown>(
  url: MaybeRef<string>,
  payload?: MaybeRef<unknown>
): UseFetchReturn<T> {
  return useRequest<T>(url).delete(payload).json()
}

/**
 * 封装获取Blob进行下载
 * @param url 请求地址
 */
export function useBlob(url: MaybeRef<string>): UseFetchReturn<Blob> {
  return useRequest(url).blob()
}
