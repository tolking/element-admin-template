<template>
  <div class="login">
    <div class="login-bg" />
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
import type { IFormExpose } from 'element-pro-components'
import type { LoginForm, ResLogin } from '../types/index'

const route = useRoute()
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
    rules: { required: true, message: '请输入用户名', trigger: 'blur' },
    props: defineComponentProps<typeof ElInput>({
      clearable: true,
      prefixIcon: markRaw(ElIconUser),
      placeholder: '请输入用户名',
    }),
  },
  {
    label: '密码',
    prop: 'password',
    component: markRaw(ElInput),
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 5, max: 16, message: '长度 5 到 16 个字符', trigger: 'blur' },
    ],
    props: defineComponentProps<typeof ElInput>({
      type: 'password',
      clearable: true,
      showPassword: true,
      prefixIcon: markRaw(ElIconLock),
      placeholder: '请输入密码',
    }),
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
      router.push((route.query.redirect as string) || '/')
    }
  }
}
</script>

<style scoped>
.login {
  --s-filter: 6px;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.login .login-bg {
  position: absolute;
  z-index: 1;
  top: calc(var(--s-filter) * -2);
  bottom: calc(var(--s-filter) * -2);
  left: calc(var(--s-filter) * -2);
  right: calc(var(--s-filter) * -2);
  background-color: var(--el-bg-color);
  background-image: url('https://picsum.photos/1920/1080?random');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(var(--s-filter)) saturate(80%);
  will-change: background-image;
  transition: var(--el-transition-all);
}
.login .login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  flex: none;
  width: 500px;
  max-width: 90%;
  transform: translate(-50%, -50%);
}
.login .login-content .title {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}
.login .login-content :deep(.pro-form-menu),
.login .login-content :deep(.pro-form-menu .el-form-item__content .el-button) {
  width: 100%;
}
</style>
