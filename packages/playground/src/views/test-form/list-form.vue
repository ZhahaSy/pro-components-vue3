<template>
  <Form ref="FormRef" v-model="formState">
    <!-- <a-row> -->
    <a-col :span="24">
      <VpFormItem v-model:value="formState.age" :type="ProFormItemType.NUMBER" label="年龄" data-index="age"
    /></a-col>
    <a-col :span="24">
      <FormList v-model:value="formState.list" :form-list-config="formListConfig"></FormList>
    </a-col>
    <!-- </a-row> -->
    <div @click="handleValidate">testValidate</div>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, FormItem as VpFormItem, FormList } from 'vue-pro-components';
import { FormItem, ProFormItemType } from 'vue-pro-components/src/Form/type';

const formListConfig: FormItem[] = reactive([
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
]);

const formState = reactive({
  age: 0,
  list: [
    {
      __id: 1,
      name: 'haha',
      type: 1,
    },
  ],
});

const FormRef = ref();

const handleValidate = () => {
  FormRef.value?.validate();
};
</script>

<style lang="scss" scoped></style>
