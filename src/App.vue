<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = {
  ...zhCn,
  pro: {
    form: {
      submit: '提交',
      reset: '重置',
    },
    crud: {
      add: '新增',
      edit: '编辑',
      detail: '详情',
      del: '删除',
      submit: '提交',
      reset: '重置',
      search: '搜索',
      searchReset: '重置',
    },
  },
}
</script>
