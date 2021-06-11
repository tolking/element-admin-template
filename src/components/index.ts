import type { App, Component } from 'vue'
import RichEditor from './RichEditor.vue'

const components: Record<string, Component> = {
  RichEditor,
}

const install = (app: App): void => {
  for (const key in components) {
    const item = components[key]
    app.component(item.name || key, item)
  }
}

export default { install }
