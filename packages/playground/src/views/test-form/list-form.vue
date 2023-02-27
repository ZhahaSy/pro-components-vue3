<template>
  <Form v-model="formState">
    <FormItem v-model:value="formState.age" :type="ProFormItemType.NUMBER" label="年龄" data-index="age"></FormItem>
    <FormList :form-list-config="formListConfig"></FormList>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Form, FormItem, FormList } from 'vue-pro-components';
import { ProFormItemType } from 'vue-pro-components/src/Form/type';

const formListConfig: ProFormItemType[] = reactive([]);

const formState = reactive({
  age: 0,
  list: [
    {
      id: 1,
      name: 'haha',
      type: 1,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
