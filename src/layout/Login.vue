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
import { useGlobalState, useForm } from '../composables/index'
import { Api } from '../utils/index'
import type { IFormExpose } from 'element-pro-components'
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
    component: markRaw(ElInput),
    rules: { required: true, message: 'admin', trigger: 'blur' },
  },
  {
    label: '密码',
    prop: 'password',
    component: markRaw(ElInput),
    rules: [
      { required: true, message: 'admin', trigger: 'blur' },
      { min: 5, max: 16, message: '长度 5 到 16 个字符', trigger: 'blur' },
    ],
    props: {
      type: 'password',
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
