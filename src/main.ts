import { createApp } from 'vue'
import {
  locale,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElImage,
  ElCard,
  ElInput,
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import {
  ProLayout,
  ProBreadcrumb,
  ProTabs,
  ProForm,
  ProTable,
  ProCrud,
} from 'element-pro-components'
import Components from './components'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-pro-components/lib/style.css'
import App from './App.vue'
import router from './router'
import type { InstallOptions } from 'element-pro-components'

const options: InstallOptions = {
  menu: {
    searchText: '搜索',
    searchResetText: '清空',
    addText: '新增',
    editText: '编辑',
    delText: '删除',
    submitText: '提交',
    resetText: '重置',
  },
}

locale(lang)

createApp(App)
  .use(router)
  .use(ElDropdown)
  .use(ElDropdownMenu)
  .use(ElDropdownItem)
  .use(ElImage)
  .use(ElCard)
  .use(ElInput)
  .use(ProLayout)
  .use(ProBreadcrumb)
  .use(ProTabs)
  .use(ProForm)
  .use(ProTable)
  .use(ProCrud, options)
  .use(Components)
  .mount('#app')
