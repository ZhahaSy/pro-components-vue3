<script lang="ts" setup>
import { Crud } from 'vue-pro-components';
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
  <Crud
    :form-state="formState"
    :columns="columns"
    :table-props="{}"
    :request="getData"
    :is-optional-table-column="true"
  >
    <template #filter="{ expand }">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item :name="`year`" :label="`年度`">
            <a-date-picker
              v-model:value="formState.year"
              :class="Classes['date-picker']"
              placeholder="请输入"
              picker="year"
              value-format="YYYY"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item :name="`businessLineCode`" :label="`业务线`">
            <a-select v-model:value="formState.businessLineCode" :options="[]" placeholder="请选择" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item :name="`businessLineType`" :label="`装扮类型`">
            <a-select v-model:value="formState.businessLineType" :options="[]" placeholder="请选择" />
          </a-form-item>
        </a-col>
        <a-col v-show="expand" :span="8">
          <a-form-item :name="`projectName`" :label="`月份`">
            <a-input v-model:value="formState.month" placeholder="请输入" />
          </a-form-item>
        </a-col>
        <a-col v-show="expand" :span="8">
          <a-form-item :name="`projectType`" :label="`摊销月份`">
            <a-select v-model:value="formState.amortizationMonth" :options="[]" placeholder="请选择" />
          </a-form-item>
        </a-col>
      </a-row>
    </template>
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
  </Crud>
</template>

<style lang="less" module="Classes">
.date-picker {
  width: 100%;
}
</style>
