<template>
  <div :class="Classes['form-wrap']">
    <Form v-model="formState" layout="inline" :form-items="formItems" @finish="onFinish"></Form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { Form } from 'vue-pro-components';

import { FormItem, ProFormItemType } from 'vue-pro-components/src/Form/type';

const formItems: FormItem[] = [
  {
    label: '名称', // !
    dataIndex: 'name', // !
    type: ProFormItemType.TEXT, // !
    validation: {
      isEmail: true,
    }, // ?
    required: true, // def:false
    allowClear: true, // def:true
    maxLength: 100, // ?
  },
  {
    label: '年龄', // !
    dataIndex: 'age', // !
    type: ProFormItemType.NUMBER, // !
    required: true, // def:false
    allowClear: true, // def:true
    min: -10, // ?
    max: 100, // ?
  },
  {
    label: '年份',
    dataIndex: 'year',
    type: ProFormItemType.DATEPICKER,
    required: true,
    allowClear: true,
  },
  {
    label: '爱好',
    dataIndex: 'hobby',
    type: ProFormItemType.CHECKBOX,
    required: true,
    allowClear: true,
    options: [
      { label: '游泳', value: 'swim' },
      { label: '蓝求', value: 'basketball' },
    ],
  },
];

const formState = reactive({
  name: '',
  age: undefined,
  year: undefined,
  hobby: [],
});

function onFinish(e) {
  console.log('onFinish', e);
}
</script>
<style module="Classes">
.form-wrap {
  width: 100%;
  height: 100%;
}
</style>
