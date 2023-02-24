export enum ProFormItemType {
  // input
  TEXT = 'text',
  // number
  NUMBER = 'number',
  // datePicker
  DATEPICKER = 'datePicker',
  // select
  SELECT = 'select',
  // checkbox
  CHECKBOX = 'checkbox',
  // radio
  RADIO = 'radio',
}

export interface Validation {
  isEmail?: boolean;
  isURI?: boolean;
  isMobilePhone?: boolean;
  isTelePhone?: boolean;
  isID?: boolean;
  isBankValidator?: boolean;
  isNumber?: boolean;
  isString?: boolean;
}

export type FormItem = {
  label: string;
  dataIndex: string;
  type: ProFormItemType;
  validation?: Validation;
  required?: boolean;
  allowClear?: boolean;
  // TODO: 联合类型需要联动设置
  maxLength?: number;
  min?: number;
  max?: number;
};

export interface Props {
  value: unknown;
  type: string;
  label: string;
  dataIndex: string;
  required: boolean;
  validation?: Validation;
}
