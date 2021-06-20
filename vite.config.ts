import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://mock-api.com/ZzRpXOne.mock',
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        importTest: /^El/,
        libraryName: 'element-plus',
        ensureStyleFile: true,
        resolveStyle: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`
        },
      }, {
        importTest: /^Pro/,
        libraryName: 'element-pro-components',
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(4)
          return `element-pro-components/lib/styles/${name}.css`
        },
      }]
    })
  ]
})
