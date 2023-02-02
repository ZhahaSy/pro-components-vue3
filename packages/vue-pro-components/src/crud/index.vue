<script setup lang="ts">
import { FormProps, TableProps } from 'ant-design-vue';
import { reactive, onMounted, computed } from 'vue';
import AdvanceForm from './AdvanceForm/index';
import List from './List/index';

import { ColumnProp } from './type';

interface Props {
  /**
   * 列信息
   */
  columns: ColumnProp[];
  /**
   * table 是否可以多选
   */
  mutiple?: boolean;
  /**
   * table 请求
   */
  request: (params: Record<string, unknown>) => Promise<{
    tableData: Record<string, unknown>[];
  }>;
  /**
   * 筛选表单数据
   */
  formState: Record<string, unknown>;
  /**
   * a-table组件中的表格 props
   */
  tableProps?: TableProps;
  /**
   * 是否使用默认 的分页器
   */
  isShowPagination?: boolean;
  /**
   * a-form组件中的表格 props
   */
  filterProps?: FormProps;
  /**
   * 是否可以控制 列的显隐
   */
  isOptionalTableColumn?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mutiple: false,
  tableProps: undefined,
  filterProps: undefined,
  isOptionalTableColumn: false,
  isShowPagination: true,
});

const state = reactive<{
  tableData: Record<string, unknown>[];
}>({
  tableData: [],
});

const page = reactive({
  pageNo: 1,
  pageSize: 10,
});

const requestParams = computed(() => ({
  ...props.formState,
  ...page,
}));

const getTableData = async () => {
  const res = await props.request(requestParams.value);
  state.tableData = res.tableData;
};

onMounted(async () => {
  await getTableData();
});

const refresh = async () => {
  await getTableData();
};

defineExpose({
  refresh,
});
</script>

<template>
  <AdvanceForm
    v-if="$slots.filter"
    :filter-props="filterProps"
    :form-state="formState"
    @search="getTableData"
    @reset="getTableData"
  >
    <template #filter="{ expand }">
      <slot name="filter" :expand="expand"></slot>
    </template>
  </AdvanceForm>
  <List
    :table-props="tableProps"
    :table-data="state.tableData"
    :mutiple="mutiple"
    :columns="columns"
    :is-show-pagination="isShowPagination"
    :is-optional-table-column="isOptionalTableColumn"
  >
    <template #header>
      <slot v-if="$slots.tableHeader" name="tableHeader"></slot>
    </template>
    <template #extra>
      <slot name="extra" v-bind="state"></slot>
    </template>
    <template #bodyCell="cellData">
      <slot name="tableBodyCell" v-bind="cellData"></slot>
    </template>
  </List>
</template>

<style lang="less" module="Classess"></style>
