<template>
  <pro-card shadow="never">
    <pro-form
      v-model="form"
      :columns="columns"
      label-width="100px"
      @submit="submit"
    />
  </pro-card>
</template>

<script setup lang="ts">
import { useForm } from '../../composables/index'
import { Api } from '../../utils/index'
import RichEditorVue from '../../components/RichEditor.vue'
import type { ArticleForm } from '../../types/article'

const { form, submit } = useForm<ArticleForm>({ url: Api.article })
const columns = defineFormColumns<ArticleForm>([
  {
    label: '标题',
    prop: 'title',
    // NOTE: 这里可以改写成 `component: 'el-input'` 但需要在 `main.ts` 中全局引用组件
    component: markRaw(ElInput),
    rules: { required: true, message: '请输入标题', trigger: 'blur' },
    props: {
      clearable: true,
      placeholder: '请输入标题',
    },
  },
  {
    label: '作者',
    prop: 'author',
    component: markRaw(ElInput),
    rules: { required: true, message: '请输入作者', trigger: 'blur' },
    props: {
      clearable: true,
      placeholder: '请输入作者',
    },
  },
  {
    label: '标签',
    prop: 'tag',
    component: markRaw(ProInputTag),
    rules: { required: true, message: '请输入标签', trigger: 'blur' },
    props: {
      clearable: true,
      trigger: 'enter',
      placeholder: '通过 Enter 键触发输入',
    },
  },
  {
    label: '内容',
    prop: 'content',
    component: markRaw(RichEditorVue),
    rules: { required: true, message: '请输入内容', trigger: 'blur' },
  },
])
</script>
