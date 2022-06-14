import { markRaw } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { House } from '@element-plus/icons-vue'
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
    redirect: '/demo',
    component: () => import('../layout/Layout.vue'),
    meta: { title: 'Demo', icon: markRaw(House) },
    children: [
      {
        path: '/demo',
        component: () => import('../views/demo/Dashboard.vue'),
        meta: { title: '首页' },
      },
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
        path: '/demo/descriptions',
        component: () => import('../views/demo/Descriptions.vue'),
        meta: { title: '简单描述' },
      },
      {
        path: '/demo/crud',
        component: () => import('../views/demo/Crud.vue'),
        meta: { title: '简单Crud' },
      },
      {
        path: '/demo/keep-alive',
        component: () => import('../views/demo/KeepAlive.vue'),
        meta: { title: 'KeepAlive' },
      },
      {
        path: '/demo/complex-form',
        component: () => import('../views/demo/ComplexForm.vue'),
        meta: { title: '复杂表单' },
      },
      {
        path: '/demo/complex-crud',
        component: () => import('../views/demo/ComplexCrud.vue'),
        meta: { title: '复杂Crud' },
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
