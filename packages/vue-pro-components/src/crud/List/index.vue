<script lang="ts" setup>
import { computed, ref, unref, reactive, watch } from 'vue';

import type { TableColumnProps, TableProps } from 'ant-design-vue';
import type { PaginationProps } from 'ant-design-vue/lib/pagination';

interface Props {
  tableData?: Record<string, unknown>[];
  columns: TableColumnProps[];
  pagination?: PaginationProps & {
    pageNo: number;
  };
  mutiple?: boolean;
  tableProps?: TableProps;
  /**
   * 是否使用默认 的分页器
   */
  isShowPagination: boolean;
  isOptionalTableColumn?: boolean;
}

const props = defineProps<Props>();

const selectedRowKeys = ref<unknown[]>([]); // Check here to configure the default column

const onSelectChange = (changableRowKeys: number[]) => {
  selectedRowKeys.value = changableRowKeys;
};

const selectRow = (record: Record<string, unknown>) => {
  const newSelectRowKeys = [...selectedRowKeys.value];
  if (record.id) {
    if (newSelectRowKeys.indexOf(record.id) >= 0) {
      newSelectRowKeys.splice(selectedRowKeys.value.indexOf(record.id), 1);
    } else {
      newSelectRowKeys.push(record.id);
    }
    selectedRowKeys.value = newSelectRowKeys;
  }
};

const customRow = (record: Record<string, unknown>) => ({
  onClick: () => {
    selectRow(record);
  },
});

const rowSelection = computed(() =>
  props.mutiple
    ? {
        fixed: true,
        selectedRowKeys: unref(selectedRowKeys),
        onChange: onSelectChange,
      }
    : undefined,
);

// 设置按钮
const checkoutState = reactive({
  indeterminate: false,
  checkAll: true,
  checkedList: props.columns.map((v) => v.key),
});

// 全选按钮点击
const onCheckAllChange = (e: any) => {
  Object.assign(checkoutState, {
    checkedList: e.target.checked
      ? props.columns.map((v) => v.key)
      : props.columns.filter((v: any) => !v.suppressible).map((v) => v.key),
    indeterminate: false,
  });
};

watch(
  () => checkoutState.checkedList,
  (newVal) => {
    checkoutState.indeterminate = !!newVal?.length && newVal?.length < props.columns?.length;
    checkoutState.checkAll = newVal.length === props.columns.length;
  },
);

const checkColumns = computed(() => {
  const temp = props.columns.filter((v) => checkoutState.checkedList.includes(v.key));
  return temp;
});
</script>

<template>
  <div :class="Classes['table-wrapper']">
    <div v-if="$slots.header" :class="Classes['btn-group']">
      <slot name="header"></slot>
      <span v-if="isOptionalTableColumn" :class="Classes['btn-extra']">
        <slot name="popover-btn">
          <a-popover trigger="click" placement="bottomRight" :overlay-style="{ minWidth: '160px' }">
            <template #content>
              <div
                :style="{
                  borderBottom: '1px solid #E9E9E9',
                  paddingBottom: '5px',
                  marginBottom: '5px',
                }"
              >
                <a-checkbox
                  v-model:checked="checkoutState.checkAll"
                  :indeterminate="checkoutState.indeterminate"
                  @change="onCheckAllChange"
                >
                  全选
                </a-checkbox>
              </div>
              <a-checkbox-group v-model:value="checkoutState.checkedList">
                <div v-for="item in columns" :key="item.key">
                  <a-checkbox v-model:value="item.key" :disabled="!item['suppressible']">
                    {{ item.title }}
                  </a-checkbox>
                </div>
              </a-checkbox-group>
            </template>
            <a-button type="primary" ghost> 设置 </a-button>
          </a-popover>
        </slot>
      </span>
    </div>
    <div :class="Classes['extra']">
      <slot name="extra"></slot>
    </div>
    <a-table
      row-key="id"
      :row-selection="rowSelection"
      :pagination="isShowPagination ? pagination : false"
      :columns="checkColumns"
      :data-source="tableData"
      :custom-row="customRow"
      :scroll="{ x: 1500, y: 540 }"
      v-bind="tableProps"
    >
      <template #bodyCell="cellData">
        <slot name="bodyCell" v-bind="cellData"></slot>
      </template>
    </a-table>
  </div>
</template>

<style lang="less" module="Classes">
.dataInfo {
  padding: 6px;
  margin-bottom: 6px;
  line-height: 20px;

  :global(.anticon) {
    font-size: 20px;
    margin-top: 1px;
  }

  // .blue {
  //     color: @primary-color;
  // }
}

.table-wrapper {
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  :global(.ant-table-thead > tr > th) {
    text-align: center;
    padding: 6px 16px;
    font-size: 13px;
    color: #61666d;
    background-color: #eff2f5;
  }

  :global(.ant-table-thead > tr > th.ant-table-selection-column) {
    padding: 6px 8px;
    font-size: 13px;
    color: #61666d;
    background-color: #eff2f5;
  }

  :global(ant-pagination-total-text) {
    position: relative;
    left: 0;
  }

  :global(.ant-table-cell) {
    text-align: center;
  }
}

.btn-group {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  button {
    margin-right: 8px;
  }
  .btn-extra {
    margin-left: auto;
  }
}

.extra {
  margin: 10px 0;
}
</style>
