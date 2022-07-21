<template>
  <pro-card
    v-loading="isFetching"
    shadow="never"
  >
    <pro-table
      v-model:current-page="page"
      v-model:page-size="limit"
      :columns="columns"
      :data="list"
      :total="total"
      :menu="menu"
      border
      stripe
      layout="total, ->, jumper, prev, pager, next, sizes"
      @load="loadList"
    >
      <template #table-avatar="{ row }">
        <el-image
          style="width: 60px; height: 60px"
          :src="row.avatar"
          fit="scale-down"
        />
      </template>
      <template #table-status="{ row, size }">
        <el-tag
          :type="row.status ? 'success' : 'danger'"
          :size="size"
        >
          {{ row.status ? '启用' : '禁用' }}
        </el-tag>
      </template>
      <template #menu="{ row, size }">
        <el-button
          :loading="isLoading"
          :size="size"
          text
          @click="handleStatus(row)"
        >
          {{ row.status ? '禁用' : '启用' }}
        </el-button>
      </template>
    </pro-table>
  </pro-card>
</template>

<script setup lang="ts">
import {
  defineTableColumns,
  defineTableMenuColumns,
} from 'element-pro-components'
import { useList, useForm } from '../../composables/index'
import { Api, appMessage } from '../../utils/index'
import type { UserItem } from '../../types/index'

const { isFetching, page, limit, total, list, loadList } = useList({
  url: Api.user,
})
const {
  isFetching: isLoading,
  form,
  submitForm,
} = useForm({ url: Api.userStatus, type: 'put' })
const menu = defineTableMenuColumns({ label: '操作' })
const columns = defineTableColumns<UserItem>([
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '用户名',
    prop: 'name',
  },
  {
    label: '头像',
    prop: 'avatar',
  },
  {
    label: '权限',
    prop: 'role',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '是否启用',
    prop: 'status',
  },
])

async function handleStatus(item: UserItem) {
  form.value = {
    id: item.id,
    status: !item.status,
  }
  const res = await submitForm()

  if (res.value) {
    appMessage('success', '修改成功!')
    item.status = !item.status
  } else {
    appMessage('warning', '修改失败!')
  }
  form.value = {}
}
</script>
