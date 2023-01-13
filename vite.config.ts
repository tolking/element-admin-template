import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { ElementProResolver } from 'element-pro-components'

const customImports = {
  'element-pro-components': [
    'defineFormColumns',
    'defineFormMenuColumns',
    'defineFormSubmit',
    'defineTableColumns',
    'defineTableMenuColumns',
    'defineTableSelectionColumns',
    'defineTableIndexColumns',
    'defineTableExpandColumns',
    'defineCrudColumns',
    'defineCrudMenuColumns',
    'defineCrudBeforeOpen',
    'defineCrudBeforeClose',
    'defineCrudSearch',
    'defineCrudSubmit',
    'defineComponentProps',
    'defineDescriptionsColumns',
  ],
}

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
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', customImports],
        dirs: ['./src/components', './src/composables', './src/utils'],
        resolvers: [ElementPlusResolver(), ElementProResolver()],
        eslintrc: { enabled: true },
      }),
      Components({
        resolvers: [ElementPlusResolver(), ElementProResolver()],
      }),
    ],
  }
})
