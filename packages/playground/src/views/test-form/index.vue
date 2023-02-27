<template>
  <a-card title="列表表单" style="width: 100%; margin-bottom: 20px">
    <listForm></listForm>
  </a-card>
  <a-card title="高级表单-schema" style="width: 100%">
    <defaultForm></defaultForm>
  </a-card>
</template>

<script setup lang="ts">
import defaultForm from './default-form.vue';
import listForm from './list-form.vue';
</script>

<style scoped></style>
