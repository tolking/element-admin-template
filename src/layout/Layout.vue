<template>
  <pro-layout>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image
            v-if="state.avatar"
            :src="state.avatar"
            class="avatar"
          />
          {{ state.name }}
          <icon-arrow-down class="el-icon-arrow-down el-icon--right" />
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
import { useGlobalState } from '../composables/index'

const route = useRoute()
const router = useRouter()
const state = useGlobalState()
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
