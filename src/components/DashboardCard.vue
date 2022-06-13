<template>
  <p class="title">
    {{ title }}
  </p>
  <p class="info">
    {{ number.toFixed() }}
  </p>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'

const props = defineProps<{
  title: string
  info: number
}>()
const { title, info } = toRefs(props)
const source = ref(0)
const number = useTransition(source, {
  duration: 800,
  transition: TransitionPresets.easeInOutCubic,
})

onMounted(() => {
  source.value = info.value
})
</script>

<style scoped>
.title {
  font-size: 18px;
  color: var(--el-text-color-primary);
  font-weight: 500;
}
.info {
  font-size: 32px;
  color: var(--el-color-primary);
  text-align: right;
  font-weight: 500;
}
</style>
