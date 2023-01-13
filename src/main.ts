import { createApp } from 'vue'
import App from './App.vue'
// NOTE: 普通路由 demo
import router from './router/index'
// NOTE: 异步路由 demo
// import router from './router/asyncRouter'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.css'

createApp(App).use(router).mount('#app')
