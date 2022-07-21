import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useGlobalState } from '../composables/index'
import { AllowList } from '../utils/index'

interface Router {
  path: string
  redirect?: string
  component: string // NOTE: 页面组件路径，相对于 src 目录
  name?: string
  title?: string
  icon?: string // NOTE: icon 需要通过全局注册
  hide?: string
  roles?: string[]
  children?: Router[]
}

/**
 * 模拟后台返回的路由数据，或者是需要筛选权限的路由数据
 * 如果是路由来自后台，最好将数据存储在 localStorage 或者 sessionStorage 中
 */
const asyncRoutes: Router[] = [
  {
    path: '/',
    redirect: '/demo',
    component: 'layout/Layout.vue',
    title: 'Demo',
    icon: 'House',
    children: [
      {
        path: '/demo',
        component: 'views/demo/Dashboard.vue',
        title: '首页',
      },
      {
        path: '/demo/form',
        component: 'views/demo/Form.vue',
        title: '简单表单',
      },
      {
        path: '/demo/table',
        component: 'views/demo/Table.vue',
        title: '简单表格',
      },
      {
        path: '/demo/descriptions',
        component: 'views/demo/Descriptions.vue',
        title: '简单描述',
      },
      {
        path: '/demo/crud',
        component: 'views/demo/Crud.vue',
        title: '简单Crud',
      },
      {
        path: '/demo/keep-alive',
        component: 'views/demo/KeepAlive.vue',
        title: 'KeepAlive',
      },
      {
        path: '/demo/complex-form',
        component: 'views/demo/ComplexForm.vue',
        title: '复杂表单',
      },
      {
        path: '/demo/complex-crud',
        component: 'views/demo/ComplexCrud.vue',
        title: '复杂Crud',
      },
    ],
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../layout/Login.vue'),
    meta: { hidden: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

let initRoute = false

router.beforeEach((to, form, next) => {
  const state = useGlobalState()

  if (!AllowList.includes(to.path) && !state.value.token) {
    next(`/login?redirect=${to.path}`)
  } else if (to.path === '/login' && state.value.token) {
    next('/')
  } else if (!initRoute && to.path !== '/login' && state.value.token) {
    // 获取路由 -> 转化 -> addRoute
    generateRoutes(asyncRoutes).forEach((item) => {
      router.addRoute(item)
      ;(router.options.routes as RouteRecordRaw[]).push(item)
    })
    initRoute = true
    next({ ...to, replace: true })
  } else {
    next()
  }
})

/**
 * 转化路由 NOTE: 根据需要修改
 * @param list 需要转化的路由
 */
function generateRoutes(list: Router[]): RouteRecordRaw[] {
  return list.reduce((all, item) => {
    // NOTE: 这里可以进行一些权限筛选，排除没有权限的路由
    if (item.roles?.length && item.roles.includes('admin')) return all

    const children = item.children?.length
      ? generateRoutes(item.children)
      : undefined

    const current = {
      path: item.path,
      redirect: item.redirect,
      name: item.name,
      component: () => import(`../${item.component}`),
      children,
      meta: {
        title: item.title,
        icon: item.icon,
        hide: item.hide,
      },
    } as RouteRecordRaw

    return [...all, current]
  }, [] as RouteRecordRaw[])
}

export default router
