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
import { markRaw } from 'vue'
import { defineFormColumns } from 'element-pro-components'
import { useForm } from '../../composables/index'
import { Api } from '../../utils/index'
import RichEditor from '../../components/RichEditor.vue'
import type { ArticleForm } from '../../types/article'

import { useLocale } from 'element-plus'
const { t } = useLocale()
console.log(t('pro.form.submit'))
console.log(t('pro.crud.submit'))

const { form, submit } = useForm<ArticleForm>({ url: Api.article })
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
  {
    label: '标签',
    prop: 'tag',
    component: 'pro-input-tag',
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
    component: markRaw(RichEditor),
    rules: { required: true, message: '请输入内容', trigger: 'blur' },
  },
])
</script>
