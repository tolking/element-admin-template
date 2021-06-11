import { get, post } from '../utils'

export async function login<T>(data: unknown): Promise<undefined | T> {
  return post<T>('/api/token', data)
}

export async function getUserInfo<T>(): Promise<undefined | T> {
  return get<T>('/api/user-info')
}
