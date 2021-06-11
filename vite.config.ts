import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://mock-api.com/ZzRpXOne.mock',
    },
  },
  plugins: [vue()]
})
