import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'
import App from './App.vue'
// NOTE: 普通路由 demo
import router from './router/index'
// NOTE: 异步路由 demo
// import router from './router/asyncRouter'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-pro-components/lib/styles/index.css'
import './styles/index.css'

createApp(App).use(ElementPlus).use(ElementPro).use(router).mount('#app')
