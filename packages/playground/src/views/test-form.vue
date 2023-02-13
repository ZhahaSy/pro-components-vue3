<template>
  <vpForm v-model="formState" :form-items="formItems" @on-finish="onFinish"></vpForm>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { vpForm } from 'vue-pro-components';

import { FormItem, FormItemType } from 'vue-pro-components/src/Form/proForm';

const formItems: FormItem[] = [
  {
    label: '名称', // !
    dataIndex: 'name', // !
    type: FormItemType.TEXT, // !
    rules: [], // ?
    required: true, // def:false
    allowClear: true, // def:true
    maxLength: 100, // ?
  },
  {
    label: '年龄', // !
    dataIndex: 'name', // !
    type: FormItemType.NUMBER, // !
    rules: [], // ?
    required: true, // def:false
    allowClear: true, // def:true
    min: 0, // ?
    max: 0, // ?
  },
  {
    label: '年份',
    dataIndex: 'year',
    type: FormItemType.DATEPICKER,
    required: true,
    allowClear: true,
  },
];

const formState = reactive({});

function onFinish(e) {
  console.log(e);
}
</script>
