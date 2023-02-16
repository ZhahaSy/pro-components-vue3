<template>
  <div :class="Classes['form-wrap']">
    <Form v-model="formState" layout="inline" :form-items="formItems" @finish="onFinish"></Form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { Form } from 'vue-pro-components';

import { FormItem, ProFormItemType } from 'vue-pro-components/src/Form/proFormItem';

const formItems: FormItem[] = [
  {
    label: '名称', // !
    dataIndex: 'name', // !
    type: ProFormItemType.TEXT, // !
    rules: [], // ?
    required: true, // def:false
    allowClear: true, // def:true
    maxLength: 100, // ?
  },
  {
    label: '年龄', // !
    dataIndex: 'age', // !
    type: ProFormItemType.NUMBER, // !
    rules: [], // ?
    required: true, // def:false
    allowClear: true, // def:true
    min: 0, // ?
    max: 0, // ?
  },
  {
    label: '年份',
    dataIndex: 'year',
    type: ProFormItemType.DATEPICKER,
    required: true,
    allowClear: true,
  },
];

const formState = reactive({
  name: '',
  age: undefined,
  year: undefined,
});

function onFinish(e) {
  console.log(e);
}
</script>
<style module="Classes">
.form-wrap {
  width: 100%;
  height: 100%;
}
</style>
