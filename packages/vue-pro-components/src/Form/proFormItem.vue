<script setup lang="ts">
import { FormItem as AFormItem, Input, InputNumber, DatePicker, Select, CheckboxGroup, Radio } from 'ant-design-vue';
import { ComputedRef, computed } from 'vue';
import { isEmpty } from '@vue-pro-components/utils';
import { RuleObject } from 'ant-design-vue/lib/form';
import validationMap from './validator';
import { Validation, VPFormLayout } from './type';

interface Props {
  value: unknown;
  type: string;
  label: string;
  dataIndex: string;
  required?: boolean;
  validation?: Validation;
  formLayout?: VPFormLayout;
}
const ProFormItemComMap = {
  text: Input,
  number: InputNumber,
  datePicker: DatePicker,
  select: Select,
  checkbox: CheckboxGroup,
  radio: Radio,
};

const props = withDefaults(defineProps<Props>(), { validation: undefined, required: false, formLayout: undefined });

const emit = defineEmits(['update:value']);

const comTmpl = computed(() => ProFormItemComMap[props.type]);
function handleUpdate(e) {
  emit('update:value', e);
}

const computedRules: ComputedRef<RuleObject[]> = computed(() => {
  return [
    {
      required: props.required,
      validator: (rule, value) => {
        console.log(value, isEmpty(value));
        if (props.required && isEmpty(value)) {
          return Promise.reject(new Error(`${props.label}不能为空`));
        }
        const keys = Object.keys(props.validation || {});
        let result = '';
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < keys.length; i++) {
          const validation = validationMap[keys[i]];
          if (!validation.validator(value)) {
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
  <AFormItem :key="dataIndex" class="vpFormItem" :label="label" :name="dataIndex" :rules="computedRules">
    <component
      :is="comTmpl"
      v-bind="$attrs"
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
