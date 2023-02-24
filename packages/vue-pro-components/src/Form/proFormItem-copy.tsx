/* eslint-disable vue/require-default-prop */
import { FormItem as AFormItem, Input, InputNumber, DatePicker, Select, Checkbox, Radio } from 'ant-design-vue';
import { defineComponent, h, resolveComponent, ref } from 'vue';
import { Rule } from 'ant-design-vue/lib/form';

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

export default defineComponent({
  name: 'ProFormItem',
  components: {
    text: Input,
    number: InputNumber,
    datePicker: DatePicker,
    select: Select,
    checkbox: Checkbox,
    radio: Radio,
  },
  props: {
    modelValue: {
      type: [String, Array, Number],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dataIndex: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup: (props, { attrs, emit }) => {
    const itemCom = ref(props.type);
    return () => {
      return (
        <AFormItem label={props.label} name={props.dataIndex}>
          {h(resolveComponent(itemCom.value), {
            ...attrs,
            value: props.modelValue,
            onUpdate: (e) => emit('update:modelValue', e),
          })}
        </AFormItem>
      );
    };
  },
});
