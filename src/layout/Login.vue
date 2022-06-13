<template>
  <div class="login">
    <el-card class="login-content">
      <h1 class="title">
        管理后台
      </h1>
      <pro-form
        ref="login"
        v-model="form"
        :columns="columns"
        :menu="menu"
        label-position="top"
        @submit="submit"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { markRaw, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useDark, useMagicKeys, useTitle } from '@vueuse/core'
import { Lock, User } from '@element-plus/icons-vue'
import {
  defineFormColumns,
  defineFormMenuColumns,
  defineFormSubmit,
  IFormExpose,
} from 'element-pro-components'
import { useGlobalState, useForm } from '../composables/index'
import { Api } from '../utils/index'
import type { LoginForm, ResLogin } from '../types/index'

const router = useRouter()
const state = useGlobalState()
const { enter } = useMagicKeys()
const { form, submitForm } = useForm<LoginForm, ResLogin>({ url: Api.login })
const login = ref({} as IFormExpose)
const columns = defineFormColumns<LoginForm>([
  {
    label: '用户',
    prop: 'name',
    component: 'el-input',
    rules: { required: true, message: '请输入用户名', trigger: 'blur' },
    props: {
      clearable: true,
      prefixIcon: markRaw(User),
      placeholder: '请输入用户名',
    },
  },
  {
    label: '密码',
    prop: 'password',
    component: 'el-input',
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 5, max: 16, message: '长度 5 到 16 个字符', trigger: 'blur' },
    ],
    props: {
      type: 'password',
      clearable: true,
      showPassword: true,
      prefixIcon: markRaw(Lock),
      placeholder: '请输入密码',
    },
  },
])
const menu = defineFormMenuColumns({
  submitText: '登录',
  reset: false,
})
const submit = defineFormSubmit(async (done, isValid) => {
  await handleSubmit(isValid)
  done()
})

useDark()
useTitle('登陆后台')

watch(enter, async (value) => {
  if (value) {
    const isValid = await login.value.validate()
    await handleSubmit(isValid)
  }
})

async function handleSubmit(isValid: boolean) {
  if (isValid) {
    const res = await submitForm()

    if (res.value) {
      state.value = res.value
      router.push('/')
    }
  }
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
