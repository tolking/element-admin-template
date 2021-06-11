import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStorage } from '@vueuse/core'
import { Token_key, Allow_List } from '../utils'
import type { IRouteRecordRaw } from 'element-pro-components'

const routes: IRouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../layout/Login.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    redirect: '/demo/form',
    component: () => import('../layout/Layout.vue'),
    meta: { title: 'Demo', icon: 'el-icon-house' },
    children: [
      {
        path: '/demo/form',
        component: () => import('../views/demo/Form.vue'),
        meta: { title: 'Form' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const token = useSessionStorage<string>(Token_key, '')

  if (!Allow_List.includes(to.path) && !token.value) {
    return '/login'
  } else if (to.path === '/login' && token.value) {
    return ''
  }
})

export default router
