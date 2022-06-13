<template>
  <pro-card
    v-loading="isFetching"
    shadow="never"
  >
    <pro-crud
      v-model="form"
      v-model:search="query"
      v-model:current-page="page"
      v-model:page-size="limit"
      :columns="columns"
      :menu="menu"
      :data="list"
      :detail="form"
      :total="total"
      :rules="rules"
      :before-open="beforeOpen"
      border
      stripe
      label-width="100px"
      layout="total, ->, jumper, prev, pager, next, sizes"
      @search="search"
      @submit="submit"
      @delete="deleteRow"
      @load="loadList"
      @search-reset="loadList"
    >
      <template #table-tag="{ row, size }">
        <el-tag
          v-for="(item, index) in row.tag"
          :key="index"
          :size="size"
          class="tag-item"
        >
          {{ item }}
        </el-tag>
      </template>
      <template #detail-tag="{ item, size }">
        <el-tag
          v-for="(v, i) in item.tag"
          :key="i"
          :size="size"
          class="tag-item"
        >
          {{ v }}
        </el-tag>
      </template>
    </pro-crud>
  </pro-card>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import {
  defineCrudColumns,
  defineCrudMenuColumns,
} from 'element-pro-components'
import { useCrud } from '../../composables/index'
import { Api } from '../../utils/index'
import RichEditor from '../../components/RichEditor.vue'
import type { ArticleItem, ArticleForm, ArticleQuery } from '../../types/index'

const {
  query,
  form,
  isFetching,
  page,
  limit,
  total,
  list,
  beforeOpen,
  search,
  loadList,
  submit,
  deleteRow,
} = useCrud<ArticleItem, ArticleForm, ArticleQuery>({ url: Api.article })
const menu = defineCrudMenuColumns({ label: '操作' })
const columns = defineCrudColumns<ArticleItem>([
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '标题',
    prop: 'title',
    component: 'el-input',
    search: true,
    form: true,
    detail: true,
    props: {
      clearable: true,
      placeholder: '请输入标题',
    },
  },
  {
    label: '作者',
    prop: 'author',
    component: 'el-input',
    search: true,
    form: true,
    detail: true,
    props: {
      clearable: true,
      placeholder: '请输入作者',
    },
  },
  {
    label: '标签',
    prop: 'tag',
    component: 'pro-input-tag',
    form: true,
    detail: true,
    props: {
      clearable: true,
      trigger: 'enter',
      placeholder: '请输入标签',
    },
  },
  {
    label: '内容',
    prop: 'content',
    component: markRaw(RichEditor),
    form: true,
    detail: true,
    hide: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
])
const rules = {
  title: { required: true, message: '请输入标题', trigger: 'blur' },
  author: { required: true, message: '请输入作者', trigger: 'blur' },
  tag: { required: true, message: '请输入标签', trigger: 'blur' },
  content: { required: true, message: '请输入内容', trigger: 'blur' },
}
</script>

<style scoped>
.tag-item:nth-child(n + 2) {
  margin-left: 6px;
}
</style>
