<template>
  <pro-layout
    transition="el-fade-in"
    keep-alive
    :include="/^Keep/"
  >
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <button
        class="header-icon"
        @click="toggleDark()"
      >
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
          />
        </svg>
      </button>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image
            v-if="state.avatar"
            :src="state.avatar"
            class="avatar"
          />
          {{ state.name }}
          <arrow-down class="el-icon-arrow-down el-icon--right" />
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDark, useTitle, useToggle } from '@vueuse/core'
import { ArrowDown } from '@element-plus/icons-vue'
import { useGlobalState } from '../composables/index'

const route = useRoute()
const router = useRouter()
const state = useGlobalState()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const title = computed(() => (route.meta.title || '') + ' | 管理后台')

useTitle(title)

async function loginOut() {
  state.value = {
    name: '',
    avatar: '',
    token: '',
  }
  router.push('/login')
}
</script>

<style scoped>
.header-icon {
  margin: 0 16px 0 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.header-icon svg {
  width: 28px;
  height: 28px;
  fill: var(--el-text-color-primary);
}
.el-dropdown-link .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.el-icon-arrow-down {
  width: var(--el-font-size-base);
  height: var(--el-font-size-base);
  vertical-align: middle;
}
</style>
