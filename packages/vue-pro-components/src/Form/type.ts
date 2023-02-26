import { OptionProps } from 'ant-design-vue/es/select';
import { PickerMode } from 'ant-design-vue/es/vc-picker/interface';
import { FormLayout } from 'ant-design-vue/lib/form/Form';

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

type DefaultFormItem = {
  label: string;
  dataIndex: string;
  validation?: Validation;
  required?: boolean;
  allowClear?: boolean;
  type: string;
};
export type InputItem = DefaultFormItem & {
  maxLength?: number;
};
export type NumberItem = DefaultFormItem & {
  min?: number;
  max?: number;
};
export type DatePickerItem = DefaultFormItem & {
  picker: PickerMode;
};

export type CheckBoxItem = DefaultFormItem & {
  options: OptionProps;
};

export type FormItem = InputItem | NumberItem | DatePickerItem | CheckBoxItem;

// 表单布局 @TODO 张双意 待确认
export type VPFormLayout = FormLayout | 'multiseriate';
