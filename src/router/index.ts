import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useGlobalState } from '../composables/index'
import { AllowList } from '../utils/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../layout/Login.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    redirect: '/demo/form',
    component: () => import('../layout/Layout.vue'),
    meta: { title: 'Demo', icon: markRaw(IconHouse) },
    children: [
      {
        path: '/demo/form',
        component: () => import('../views/demo/Form.vue'),
        meta: { title: '简单表单' },
      },
      {
        path: '/demo/table',
        component: () => import('../views/demo/Table.vue'),
        meta: { title: '简单表格' },
      },
      {
        path: '/demo/crud',
        component: () => import('../views/demo/Crud.vue'),
        meta: { title: '简单Crud' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const state = useGlobalState()

  if (!AllowList.includes(to.path) && !state.value.token) {
    return '/login'
  } else if (to.path === '/login' && state.value.token) {
    return ''
  }
})

export default router