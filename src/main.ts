import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPro from 'element-pro-components'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-pro-components/lib/styles/index.css'
import './styles/index.css'

createApp(App).use(ElementPlus).use(ElementPro).use(router).mount('#app')
