<template>
  <div class="login">
    <el-card class="login-content">
      <h1 class="title">
        管理后台
      </h1>
      <pro-form
        v-model="form"
        :columns="columns"
        :menu="menu"
        @submit="submit"
      />
    </el-card>
  </div>
  <teleport to="title">
    登陆后台
  </teleport>
</template>

<script setup name="Login" lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
import { login, getUserInfo } from '../api'
import { Token_key, Info_Key } from '../utils'
import type {
  IFormColumns,
  IFormMenuColumns,
  IFormSubmit,
} from 'element-pro-components'
import type { UserForm, UserInfo } from '../types'


const router = useRouter()
const token = useSessionStorage<string>(Token_key, '')
const userInfo = useSessionStorage<UserInfo>(Info_Key, { name: '', avatar: '' })
const form = ref<UserForm>({
  username: 'admin',
  password: 'admin',
})
const columns: IFormColumns<UserForm> = [
  {
    label: '用户',
    prop: 'username',
    component: 'el-input',
    rules: { required: true, message: 'admin', trigger: 'blur' },
  },
  {
    label: '密码',
    prop: 'password',
    component: 'el-input',
    rules: { required: true, message: 'admin', trigger: 'blur' },
    props: {
      type: 'password',
    },
  },
]
const menu: IFormMenuColumns = {
  submitText: '登录',
  reset: false,
}
const submit: IFormSubmit = async (done, isValid) => {
  if (isValid) {
    const res = await login<{ token: string }>(form.value)

    if (res && res.token) {
      token.value = res.token
      const info = await getUserInfo<UserInfo>()

      if (info) {
        userInfo.value = info
        router.push('/')
      }
    }
  }
  done()
}
</script>

<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--c-page-background);
  background-image: url('https://api.ixiaowai.cn/gqapi/gqapi.php');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.login .login-content {
  width: 500px;
  max-width: 90%;
}
.login .login-content .title {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}
.login .login-content .pro-form-menu,
.login .login-content .pro-form-menu .el-form-item__content .el-button {
  width: 100%;
}
</style>
