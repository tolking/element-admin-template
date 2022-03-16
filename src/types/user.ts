export interface LoginForm {
  name: string
  password: string
}

export interface ResLogin {
  name: string
  avatar: string
  token: string
}

export interface UserItem {
  id: string
  name: string
  avatar: string
  role: string
  status: boolean
  createTime: string
}
