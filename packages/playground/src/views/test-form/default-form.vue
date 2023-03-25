<template>
  <div :class="Classes['form-wrap']">
    <Form v-model="formState" layout="grid" :grid-num="3" :form-items="formItems" @finish="onFinish"></Form>
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
    showOn: (formState) => !!formState.age,
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
  {
    label: '代办',
    dataIndex: 'todos',
    type: ProFormItemType.LIST,
    required: true,
    span: 24,
    labelCol: { span: 24 },
    formListConfig: [
      {
        label: '名称', // !
        dataIndex: 'name', // !
        type: ProFormItemType.TEXT, // !
        validation: {
          isString: true,
        }, // ?
        required: true, // def:false
        allowClear: true, // def:true
        maxLength: 100, // ?
      },
      {
        label: '类型', // !
        dataIndex: 'type', // !
        type: ProFormItemType.SELECT, // !
        required: true, // def:false
        allowClear: true, // def:true
        options: [
          {
            label: '类型1',
            value: 'type1',
          },
          {
            label: '类型2',
            value: 'type2',
          },
        ],
      },
    ],
  },
];

const formState = reactive({
  name: '',
  age: undefined,
  year: undefined,
  hobby: [],
  todos: [
    {
      name: '1',
      type: 0,
    },
  ],
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
