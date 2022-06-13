<template>
  <pro-card
    ghost
    direction="column"
  >
    <pro-card
      :gutter="20"
      ghost
    >
      <pro-card
        v-for="(item, index) in info"
        :key="index"
        :xs="12"
        :sm="12"
        :md="6"
        shadow="never"
        class="space-y"
      >
        <dashboard-card
          :title="item.title"
          :info="item.info"
        />
      </pro-card>
    </pro-card>
    <pro-card
      split
      shadow="never"
      class="space-y"
    >
      <pro-card
        :xs="24"
        :sm="12"
        :md="10"
        shadow="never"
      >
        <el-calendar v-model="days" />
      </pro-card>
      <pro-card
        :header="title"
        shadow="never"
      >
        <div class="circle-list">
          <el-progress
            :percentage="25"
            type="circle"
            class="space-y"
          />
          <el-progress
            :percentage="50"
            type="circle"
            class="space-y"
          />
          <el-progress
            :percentage="60"
            type="circle"
            class="space-y"
          />
          <el-progress
            :percentage="14"
            type="circle"
            class="space-y"
          />
        </div>
        <div>
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="70"
            class="space-y"
          />
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="100"
            status="success"
            class="space-y"
          />
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="80"
            status="warning"
            class="space-y"
          />
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="50"
            status="exception"
            class="space-y"
          />
        </div>
      </pro-card>
    </pro-card>
  </pro-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DashboardCard from '../../components/DashboardCard.vue'

const days = ref(new Date())
const title = computed(() => {
  return `${days.value.toLocaleDateString()} 数据`
})
const info = [
  { title: '项目1', info: 14758 },
  { title: '项目2', info: 4387 },
  { title: '项目3', info: 4390 },
  { title: '项目4', info: 569 },
]
</script>

<style scoped>
.pro-card :deep(.pro-card__body) {
  overflow: hidden;
}
.space-y {
  margin-top: 16px;
  margin-bottom: 16px;
}
.circle-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
