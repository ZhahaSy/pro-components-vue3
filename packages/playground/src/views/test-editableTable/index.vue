<script lang="ts" setup>
import { EditableList } from 'vue-pro-components';
import { reactive } from 'vue';
import { columns } from './config';
// import AmortizationConfirm from './amortizationConfirm.vue';

const formState = reactive<Record<string, string>>({
  year: '',
  month: '',
  amortizationMonth: '',
  businessLineType: '',
  businessLineCode: '',
});

const getData = async (params: any) => {
  return {
    tableData: [
      {
        accountancyYear: 2022,
        amortizationMonth: 8,
        businessLineCode: '111',
        businessLineType: '2222',
        id: 105097,
        month: 7,
        payQuota: '283.02',
        projectName: '阴阳师',
        projectType: '17',
      },
      {
        accountancyYear: 2021,
        amortizationMonth: 1,
        businessLineCode: '000',
        businessLineType: '1111',
        id: 1111,
        month: 1,
        payQuota: '111',
        projectName: '111',
        projectType: '1111',
      },
    ],
    page: {
      // total: res.total,
      total: 100,
      pageSize: params.pageSize,
      pageNo: params.pageNo,
    },
  };
};
</script>
<template>
  <EditableList
    :editing-keys="[]"
    :columns="columns"
    :table-props="{}"
    :request="getData"
    :is-optional-table-column="true"
  >
    <template #extra>
      <a-alert type="info" message="单位 元 筛选数据有 400 条 税后总收入 1,234.56 元"></a-alert>
    </template>
    <template #tableHeader>
      <!-- <AmortizationConfirm></AmortizationConfirm> -->
    </template>
    <template #tableBodyCell="{ column, record }">
      <template v-if="column.dataIndex">
        {{ record[column.dataIndex] || '-' }}
      </template>
    </template>
  </EditableList>
</template>

<style lang="less" module="Classes">
.date-picker {
  width: 100%;
}
</style>
