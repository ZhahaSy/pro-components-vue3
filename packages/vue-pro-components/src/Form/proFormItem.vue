<script setup lang="ts">
import { FormItem as AFormItem, Input, InputNumber, DatePicker, Select, Checkbox, Radio } from 'ant-design-vue';
import { computed } from 'vue';

const ProFormItemComMap = {
  text: Input,
  number: InputNumber,
  datePicker: DatePicker,
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
};

const props = defineProps({
  value: {
    type: [String, Array, Number, Object],
    default: undefined,
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
});

const emit = defineEmits(['update:value']);

const comTmpl = computed(() => ProFormItemComMap[props.type]);
function handleUpdate(e) {
  emit('update:value', e);
}
</script>

<template>
  <AFormItem :key="dataIndex" :label="label" :name="dataIndex">
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
