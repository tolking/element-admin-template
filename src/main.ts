import { ElLoading } from 'element-plus'
import App from './App.vue'
import router from './router'

createApp(App).use(ElLoading).use(router).mount('#app')
