<script setup lang="ts">
import {
  FormItem as AFormItem,
  Input,
  InputNumber,
  DatePicker,
  Select,
  CheckboxGroup,
  Radio,
  ColProps,
  FormItemProps,
} from 'ant-design-vue';
import { ComputedRef, computed } from 'vue';
import { isEmpty } from '@vue-pro-components/utils';
import { RuleObject } from 'ant-design-vue/lib/form';
import FormList from '../FormList/FormList.vue';
import validationMap from './validator';
import { ProFormItem, Validation, VPFormLayout } from './type';

export interface Props {
  value: unknown;
  type: string;
  label: string;
  dataIndex: string | (string | number)[];
  required?: boolean;
  validation?: Validation;
  formLayout?: VPFormLayout;
  labelCol: ColProps;
  formItemProps?: FormItemProps;
  fieldProps?: ProFormItem;
}
const ProFormItemComMap = {
  text: Input,
  number: InputNumber,
  datePicker: DatePicker,
  select: Select,
  checkbox: CheckboxGroup,
  radio: Radio,
  list: FormList,
};

const props = withDefaults(defineProps<Props>(), {
  validation: undefined,
  required: false,
  formLayout: undefined,
  formItemProps: undefined,
  fieldProps: undefined,
});

const emit = defineEmits(['update:value']);

const comTmpl = computed(() => ProFormItemComMap[props.type]);
function handleUpdate(e) {
  emit('update:value', e);
}

const computedRules: ComputedRef<RuleObject[]> = computed(() => {
  return [
    {
      required: props.required,
      validator: () => {
        if (props.required && isEmpty(props.value)) {
          return Promise.reject(new Error(`${props.label}不能为空`));
        }
        const keys = Object.keys(props.validation || {});
        let result = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < keys.length; i++) {
          const validation = validationMap[keys[i]];
          if (!validation.validator(props.value)) {
            result = props.label + validation.message;
            break;
          }
        }

        if (result) return Promise.reject(result);

        return Promise.resolve();
      },
      trigger: 'change',
    },
  ];
});
</script>

<template>
  <AFormItem
    :key="dataIndex.toString()"
    class="vpFormItem"
    :label="label"
    :name="dataIndex"
    :label-col="labelCol"
    :rules="computedRules"
    v-bind="formItemProps"
  >
    <component
      :is="comTmpl"
      v-bind="fieldProps"
      :value="value"
      class="vpFormItem-input"
      @update:value="
        (e) => {
          handleUpdate(e);
        }
      "
    ></component>
  </AFormItem>
</template>

<style lang="less">
.vpFormItem {
  margin-right: 20px;
  min-height: 50px;

  .vpFormItem-input {
    width: 100%;
  }
}
</style>
