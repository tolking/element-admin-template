<template>
  <pro-card
    v-loading="isFetching"
    shadow="never"
  >
    <pro-form
      v-model="form"
      :columns="columns"
      :gutter="40"
      label-width="100px"
      @submit="submit"
    />
  </pro-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineFormColumns } from 'element-pro-components'
import { useForm, useDetail, useCatesList } from '../../composables/index'
import { Api } from '../../utils/index'
import type { GoodsForm } from '../../types/index'

const route = useRoute()
const { form, submit } = useForm<GoodsForm>({ url: Api.goods, transform })
const { isFetching, detailId, detail, loadDetail } = useDetail<GoodsForm>({
  url: Api.goods,
  immediate: false,
})

const catesList = useCatesList()
// INFO: 当 columns 内部引用响应式数据时必须使用 `ref()` 包裹且数据不需要解构响应式数据，否则可以无法获取异步数据变化
// INFO: 当然也可以使用 `computed`
const columns = ref(
  defineFormColumns<GoodsForm>([
    {
      label: '基础信息',
      prop: 'id',
      class: 'form-title', // 为当前项增加类名
    },
    {
      label: '商品名称',
      prop: 'title',
      component: 'el-input',
      rules: { required: true, message: '请输入商品名称', trigger: 'blur' },
      props: {
        clearable: true,
        placeholder: '请输入商品名称',
      },
    },
    {
      label: '价格',
      prop: 'price',
      component: 'el-input',
      md: 12,
      rules: { required: true, message: '请输入价格', trigger: 'blur' },
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入价格',
        slots: { suffix: () => '元' },
      },
    },
    {
      label: '成本',
      prop: 'cost',
      component: 'el-input',
      md: 12,
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入成本',
        slots: { suffix: () => '元' },
      },
    },
    {
      label: '库存',
      prop: 'stock',
      component: 'el-input',
      md: 12,
      rules: { required: true, message: '请输入库存', trigger: 'blur' },
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入库存',
        slots: { suffix: () => '件' },
      },
    },
    {
      label: '分类',
      prop: 'cates',
      component: 'pro-select',
      md: 12,
      rules: { required: true, message: '请选择分类', trigger: 'blur' },
      props: {
        data: catesList, // 这里不要通过 `catesList.value` 解构响应式数据
        clearable: true,
        placeholder: '请选择分类',
        style: 'width:100%',
      },
    },
    {
      label: '标签',
      prop: 'tags',
      component: 'pro-input-tag',
      md: 12,
      rules: { required: true, message: '请输入标签', trigger: 'blur' },
      props: {
        clearable: true,
        max: 10,
        placeholder: '通过 Enter 键触发输入',
      },
    },
    {
      label: '上架时间',
      prop: 'time',
      component: 'el-date-picker',
      md: 12,
      rules: { required: true, message: '请选择上架时间段', trigger: 'blur' },
      props: {
        clearable: true,
        unlinkPanels: true,
        type: 'daterange',
        format: 'YYYY-MM-DD',
        valueFormat: 'YYYY-MM-DD',
        rangeSeparator: '至',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        style: 'width:100%',
      },
    },
    {
      label: '描述',
      prop: 'desc',
      component: 'el-input',
      rules: { required: true, message: '请输入描述', trigger: 'blur' },
      props: {
        type: 'textarea',
        clearable: true,
        autosize: true,
        showWordLimit: true,
        placeholder: '请输入描述',
      },
    },
    {
      label: '规格信息',
      prop: 'id',
      class: 'form-title',
    },
    {
      label: '长',
      prop: 'length',
      component: 'el-input',
      md: 12,
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入长',
        slots: { suffix: () => 'cm' },
      },
    },
    {
      label: '宽',
      prop: 'width',
      component: 'el-input',
      md: 12,
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入宽',
        slots: { suffix: () => 'cm' },
      },
    },
    {
      label: '高',
      prop: 'height',
      component: 'el-input',
      md: 12,
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入高',
        slots: { suffix: () => 'cm' },
      },
    },
    {
      label: '重量',
      prop: 'weight',
      component: 'el-input',
      md: 12,
      props: {
        type: 'number',
        clearable: true,
        placeholder: '请输入重量',
        slots: { suffix: () => 'kg' },
      },
    },
    {
      label: '配置信息',
      prop: 'sku',
      class: 'form-title',
      children: [
        {
          label: '属性',
          prop: 'key',
          component: 'el-input',
          md: 8,
          rules: { required: true, message: '请输入商品名称', trigger: 'blur' },
          props: {
            clearable: true,
            placeholder: '请输入商品名称',
          },
        },
        {
          label: '可选值',
          prop: 'value',
          component: 'pro-input-tag',
          md: 16,
          rules: { required: true, message: '请输入可选值', trigger: 'blur' },
          props: {
            clearable: true,
            placeholder: '通过 Enter 键触发输入',
          },
        },
      ],
    },
  ])
)

watch(
  () => route.query.id,
  async (val) => {
    if (val !== undefined) {
      detailId.value = val as string | number
      await loadDetail()

      if (detail.value?.start && detail.value?.end) {
        detail.value.time = [detail.value.start, detail.value.end]
      }

      form.value = detail.value || ({} as GoodsForm)
    }
  },
  { immediate: true }
)

function transform(form: GoodsForm) {
  if (form.time?.length) {
    form.start = form.time[0]
    form.end = form.time[1]
  }
  return form
}
</script>

<style scoped>
.pro-form > :deep(.form-title > .el-form-item__label) {
  font-size: 18px;
  color: var(--el-text-color-primary);
  font-weight: 500;
}
.pro-form :deep(.pro-form-menu) {
  position: sticky;
  bottom: 0;
  margin: 0;
  padding: 18px 0;
  width: 100%;
  background-color: var(--pro-card-bg-color);
}
</style>
