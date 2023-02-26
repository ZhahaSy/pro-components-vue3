<template>
  <div></div>
</template>

<script setup lang="ts">
import { OptionProps } from 'ant-design-vue/es/select';
import { defineProps, reactive } from 'vue';

interface Props {
  value;
  options: OptionProps;
}

defineProps<Props>();

const checked = reactive;
</script>
