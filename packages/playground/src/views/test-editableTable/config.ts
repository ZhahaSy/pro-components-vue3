// import { TableColumnProps } from 'ant-design-vue';
// import { any } from 'vue-types';
// @TODO 组件 类型定义 导出
// import type { Filter } from '@/components/Crud/type';
// @TODO 组件 类型定义 导出
// eslint-disable-next-line import/no-unresolved
// import { FilterType } from '@/components/Crud/type';
import { Button as AButton } from 'ant-design-vue';
import { h } from 'vue';

export const columns: any = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
    width: 80,
    suppressible: false,
    fixed: 'left',
    editable: true,
  },
  {
    title: '业务线',
    key: 'businessLineCode',
    dataIndex: 'businessLineCode',
    width: 100,
    suppressible: true,
  },
  {
    title: '项目名称',
    key: 'projectName',
    dataIndex: 'projectName',
    width: 100,
    suppressible: true,
  },
  {
    title: '装扮类型',
    key: 'businessLineType',
    dataIndex: 'businessLineType',
    width: 100,
    suppressible: true,
  },
  {
    title: '项目类型',
    key: 'projectType',
    dataIndex: 'projectType',
    width: 100,
    suppressible: true,
  },
  {
    title: '支付年度',
    key: 'accountancyYear',
    dataIndex: 'accountancyYear',
    width: 100,
    suppressible: true,
  },
  {
    title: '月份',
    key: 'month',
    dataIndex: 'month',
    width: 100,
    suppressible: true,
  },
  {
    title: '支付额度',
    key: 'payQuota',
    dataIndex: 'payQuota',
    width: 100,
    suppressible: true,
  },
  {
    title: '摊销月份',
    key: 'amortizationMonth',
    dataIndex: 'amortizationMonth',
    width: 100,
    suppressible: true,
  },
  {
    title: '操作',
    key: 'option',
    dataIndex: 'option',
    width: 100,
    customRender: ({ text, record, index, column }) => {
      return h(
        AButton,
        {
          type: 'link',
          onClick: () => {
            console.log('编辑了');
          },
        },
        '编辑',
      );
    },
  },
];

export const advanceFilterList: any[] = [
  {
    label: '年度',
    valueKey: 'year',
    type: '1',
  },
];
