/// <reference types="vite/client" />
/// <reference types="element-plus/global" />
/// <reference types="element-pro-components/types/components" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_BASE_URL: string
  readonly VITE_PROXY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
