<script lang="ts" setup>
import { computed, ref, unref } from 'vue'

import type { TableColumnProps, TableProps } from 'ant-design-vue'
import type { PaginationProps } from 'ant-design-vue/lib/pagination'

interface Props {
    tableData?: Record<string, unknown>[];
    columns: TableColumnProps[];
    pagination?: PaginationProps & {
        pageNo: number
    };
    mutiple?: boolean;
    tableProps?: TableProps
    /**
     * 是否使用默认 的分页器
     */
    isShowPagination: boolean
}

const props = defineProps<Props>()

const selectedRowKeys = ref<unknown[]>([]) // Check here to configure the default column

const onSelectChange = (changableRowKeys: number[]) => {
    selectedRowKeys.value = changableRowKeys
}

const selectRow = (record: Record<string, unknown>) => {
    const newSelectRowKeys = [...selectedRowKeys.value]
    if (record.id) {
        if (newSelectRowKeys.indexOf(record.id) >= 0) {
            newSelectRowKeys.splice(selectedRowKeys.value.indexOf(record.id), 1)
        } else {
            newSelectRowKeys.push(record.id)
        }
        selectedRowKeys.value = newSelectRowKeys
    }
}

const customRow = (record: Record<string, unknown>) => ({
    onClick: () => {
        selectRow(record)
    },
})

const rowSelection = computed(() =>
    props.mutiple
        ? {
            fixed: true,
            selectedRowKeys: unref(selectedRowKeys),
            onChange: onSelectChange,
          }
        : undefined
)
</script>

<template>
    <div :class="Classes['table-wrapper']">
        <div v-if="$slots.header" :class="Classes['btn-group']">
            <slot name="header"></slot>
        </div>
        <div :class="Classes['extra']">
            <slot name="extra"></slot>
        </div>
        <a-table
            row-key="id"
            :row-selection="rowSelection"
            :pagination="isShowPagination ? pagination : false"
            :columns="columns"
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
}

.btn-group {
    margin-bottom: 8px;

    .btn {
        margin-right: 8px;
    }
}

.extra {
    margin: 10px 0;
}
</style>
