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
          viewBox="0 0 30 30"
        >
          <path
            d="M7.45 23.045A11.71 11.71 0 014 14.711c0-2.587.831-5.03 2.403-7.064a11.774 11.774 0 012.68-2.52c.586-.4 1.631-.802 3.136-1.204a.5.5 0 01.61.617c-.518 1.873-.778 3.252-.778 4.135 0 5.389 4.384 9.775 9.774 9.775.883 0 2.262-.26 4.135-.78a.5.5 0 01.617.61c-.401 1.505-.802 2.55-1.202 3.137a11.774 11.774 0 01-2.522 2.68 11.447 11.447 0 01-7.064 2.403 11.723 11.723 0 01-8.339-3.455z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <path
            d="M15 24.09c.628 0 1.136.51 1.136 1.137v1.637c0 .585-.443 1.068-1.012 1.13L15 28a1.136 1.136 0 01-1.136-1.136v-1.637c0-.627.508-1.136 1.136-1.136zm-6.428-2.662a1.136 1.136 0 010 1.607l-1.157 1.157a1.137 1.137 0 01-1.515.083l-.092-.083a1.136 1.136 0 010-1.607l1.157-1.157a1.136 1.136 0 011.607 0zm14.463 0l1.157 1.157a1.136 1.136 0 01-1.607 1.607l-1.157-1.157a1.137 1.137 0 01-.083-1.515l.083-.092a1.136 1.136 0 011.607 0zM15 7.424a7.576 7.576 0 110 15.152 7.576 7.576 0 010-15.152zm-10.227 6.44a1.136 1.136 0 010 2.272H3.136a1.137 1.137 0 01-1.13-1.012L2 15c0-.628.509-1.136 1.136-1.136h1.637zm22.09 0a1.136 1.136 0 110 2.272h-1.636a1.137 1.137 0 01-1.13-1.012L24.091 15c0-.628.509-1.136 1.136-1.136h1.637zm-2.67-8.056a1.136 1.136 0 010 1.607l-1.158 1.157a1.137 1.137 0 01-1.515.083l-.092-.083a1.136 1.136 0 010-1.607l1.157-1.157a1.136 1.136 0 011.607 0zm-16.778 0l1.157 1.157a1.136 1.136 0 01-1.607 1.607L5.808 7.415A1.137 1.137 0 015.725 5.9l.083-.092a1.136 1.136 0 011.607 0zM15 2c.628 0 1.136.509 1.136 1.136v1.637c0 .586-.443 1.068-1.012 1.13L15 5.909a1.136 1.136 0 01-1.136-1.136V3.136C13.864 2.51 14.372 2 15 2z"
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
