import { ElLoading } from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.css'

createApp(App).use(ElLoading).use(router).mount('#app')
