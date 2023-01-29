import { TableColumnProps } from 'ant-design-vue';

export enum FilterType {
  SELECT = 'select',
  NUMBER = 'number',
  DATEPICKER = 'date-picker',
}

export interface Filter {
  label: string;
  valueKey: string;
  type: FilterType;
}

export type ColumnProp = TableColumnProps & { suppressible: boolean };
