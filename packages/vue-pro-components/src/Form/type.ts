import { ColProps } from 'ant-design-vue';
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
  // formList
  LIST = 'list',
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
  span?: number;
  labelCol?: ColProps;
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

export type ProFormItem = InputItem | NumberItem | DatePickerItem | CheckBoxItem;
export type FormListItem = DefaultFormItem & {
  formListConfig: ProFormItem[];
};
export type FormItem = ProFormItem | FormListItem;

export type VPFormLayout = FormLayout | 'grid';
