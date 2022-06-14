<template>
  <pro-card shadow="never">
    <p>当页面的名字以 `Keep` 开头时会自动缓存当前页面</p>
    <p>尝试在下面输入框中输入内容，然后切换其它页面再切换回来，数据将不变</p>
    <pro-form
      v-model="form"
      :columns="columns"
      label-width="100px"
      @submit="submit"
    />
  </pro-card>
</template>

<script lang="ts">
// INFO: 当页面的名字以 `Keep` 开头时会自动缓存当前页面
export default { name: 'KeepAlive' }
</script>

<script setup lang="ts">
import { defineFormColumns } from 'element-pro-components'
import { useForm } from '../../composables/index'
import { Api } from '../../utils/index'
import type { ArticleForm } from '../../types/article'

const { form, submit } = useForm<ArticleForm>({ url: Api.form })
const columns = defineFormColumns<ArticleForm>([
  {
    label: '标题',
    prop: 'title',
    component: 'el-input',
    rules: { required: true, message: '请输入标题', trigger: 'blur' },
    props: {
      clearable: true,
      placeholder: '请输入标题',
    },
  },
  {
    label: '作者',
    prop: 'author',
    component: 'el-input',
    rules: { required: true, message: '请输入作者', trigger: 'blur' },
    props: {
      clearable: true,
      placeholder: '请输入作者',
    },
  },
])
</script>
