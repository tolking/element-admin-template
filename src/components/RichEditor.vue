<template>
  <div ref="editor" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入文本',
  },
})
const emit = defineEmits(['update:modelValue'])
const { modelValue, placeholder } = toRefs(props)
const editor = ref<HTMLElement>({} as HTMLElement)
const quill = ref<Quill>({} as Quill)
const isEdit = ref(false)

watch(modelValue, (val) => {
  if (val !== quill.value.root.innerHTML && !quill.value.hasFocus()) {
    quill.value.root.innerHTML = val
  }
})

onMounted(() => {
  init()
})

onUnmounted(() => {
  quill.value = null as unknown as Quill
})

function init() {
  quill.value = new Quill(editor.value, {
    theme: 'snow',
    placeholder: placeholder.value,
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ color: [] }, { background: [] }],
        ['clean'],
        // [{ 'size': ['small', false, 'large', 'huge'] }],
        // [{ 'indent': '-1' }, { 'indent': '+1' }],
        // [{ 'align': [] }],
        // [{ 'direction': 'rtl' }],
        // ['blockquote', 'code-block'],
        // [{ 'font': [] }],
        // [{ 'header': 1 }, { 'header': 2 }],
        // ['link', 'image', 'video']
      ],
    },
  })

  if (!isEdit.value && modelValue?.value) {
    quill.value.root.innerHTML = props.modelValue || ''
  }

  quill.value.on('text-change', () => {
    isEdit.value = true
    emit('update:modelValue', quill.value.root.innerHTML)
  })
}
</script>

<style>
.ql-toolbar {
  width: 100%;
}
.ql-container {
  width: 100%;
  height: auto;
}
.ql-container .ql-editor {
  min-height: 150px;
  resize: vertical;
}
.ql-toolbar.ql-snow,
.ql-container.ql-snow {
  border-color: var(--el-border-color);
}
.ql-snow .ql-picker {
  color: var(--el-text-color-primary);
}
.ql-snow .ql-stroke {
  stroke: var(--el-text-color-primary);
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: var(--el-text-color-primary);
}
</style>
