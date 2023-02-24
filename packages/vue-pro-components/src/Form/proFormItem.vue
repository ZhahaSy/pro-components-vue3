<script setup lang="ts">
import { FormItem as AFormItem, Input, InputNumber, DatePicker, Select, Checkbox, Radio } from 'ant-design-vue';
import { computed } from 'vue';
import { isEmpty } from 'lodash-es';
import validationMap from './validator';
import { Validation } from './type';

interface Props {
  value: unknown;
  type: string;
  label: string;
  dataIndex: string;
  required: boolean;
  validation?: Validation;
}
const ProFormItemComMap = {
  text: Input,
  number: InputNumber,
  datePicker: DatePicker,
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
};

const props = withDefaults(defineProps<Props>(), { validation: undefined });

const emit = defineEmits(['update:value']);

const comTmpl = computed(() => ProFormItemComMap[props.type]);
function handleUpdate(e) {
  emit('update:value', e);
}

const computedRules = computed(() => {
  return [
    {
      validator: (rule, value) => {
        console.log(value);

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
  <AFormItem :key="dataIndex" :label="label" :name="dataIndex" :rules="computedRules">
    <component
      :is="comTmpl"
      v-bind="$attrs"
      :value="value"
      @update:value="
        (e) => {
          handleUpdate(e);
        }
      "
    ></component>
  </AFormItem>
</template>
