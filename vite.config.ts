import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      host: '0.0.0.0',
      proxy: {
        '/admin/': env.VITE_PROXY_URL,
      },
    },
    build: {
      rollupOptions: {
        output: {
          inlineDynamicImports: false,
          manualChunks: {
            'modules-vue': ['vue', 'vue-router'],
            'modules-vueuse': ['@vueuse/core'],
            'modules-quill': ['quill'],
            'modules-element-plus': ['element-plus'],
            'modules-element-pro': ['element-pro-components'],
            'modules-element-icon': ['@element-plus/icons-vue'],
          },
        },
      },
    },
    plugins: [vue()],
  }
})
