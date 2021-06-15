<template>
  <pro-layout>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image
            v-if="userInfo.avatar"
            :src="userInfo.avatar"
            class="avatar"
          />
          {{ userInfo.name }}
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginOut">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
    <template #header-bottom>
      <pro-tabs />
    </template>
  </pro-layout>
  <teleport to="title">
    {{ title }}
  </teleport>
</template>

<script setup name="Layout" lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
import { Token_key, Info_Key } from '../utils'
import type { UserInfo } from '../types'

const route = useRoute()
const router = useRouter()
const title = computed(() => {
  return (route.meta.title || '') + ' | 管理后台'
})
const token = useSessionStorage<string>(Token_key, '')
const userInfo = useSessionStorage<UserInfo>(Info_Key, { name: '', avatar: '' })

function loginOut() {
  token.value = ''
  userInfo.value = { name: '', avatar: '' }
  router.push('/login')
}
</script>

<style scoped>
.el-dropdown-link .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
</style>
