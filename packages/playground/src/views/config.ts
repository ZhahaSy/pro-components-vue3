import { TableColumnProps } from 'ant-design-vue';
import { any } from 'vue-types';
// @TODO 组件 类型定义 导出
// import type { Filter } from '@/components/Crud/type';
// @TODO 组件 类型定义 导出
// eslint-disable-next-line import/no-unresolved
// import { FilterType } from '@/components/Crud/type';


export const columns: TableColumnProps[] = [
  {
    title: '流水主键ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '业务线',
    dataIndex: 'businessLineCode',
    width: 100,
  },
  {
    title: '项目名称',
    dataIndex: 'projectName',
    width: 100,
  },
  {
    title: '业务系统项目编码',
    dataIndex: 'projectCode',
    width: 100,
  },
  {
    title: '金蝶项目类别',
    dataIndex: 'easType',
    width: 100,
  },
  {
    title: '金蝶项目代码',
    dataIndex: 'easCode',
    width: 100,
  },
  {
    title: '金蝶项目名称',
    dataIndex: 'easName',
    width: 100,
  },
  // @TODO 字段
  {
    title: '装扮类型',
    dataIndex: 'businessLineTypeCode',
    width: 100,
  },
  {
    title: '项目类型',
    dataIndex: 'projectType',
    width: 100,
  },
  {
    title: '支付月份',
    dataIndex: 'payMonth',
    width: 100,
  },
  {
    title: '支付额度',
    dataIndex: 'payQuota',
    width: 100,
  },
  {
    title: '摊销月份',
    dataIndex: 'amortizationMonth',
    width: 100,
  },
  {
    title: '摊销额度',
    dataIndex: 'amortizationQuota',
    width: 100,
  },
];

export const advanceFilterList: any[] = [
  {
    label: '年度',
    valueKey: 'year',
    type: '1',
  },
];
