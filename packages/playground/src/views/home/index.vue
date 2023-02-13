<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane v-for="tab in tabConfig" :key="tab.key" :tab="tab.name">
      <component :is="tab.component"></component>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import testCrud from '../test-crud/index.vue';
import testEditableList from '../test-editableTable/index.vue';

export default defineComponent({
  setup() {
    const tabConfig = [
      {
        key: '1',
        name: 'Crud',
        component: testCrud,
      },
      {
        key: '2',
        name: 'EditableTable',
        component: testEditableList,
      },
      {
        key: '3',
        name: 'Form',
      },
    ];
    return {
      activeKey: ref('1'),
      tabConfig,
    };
  },
});
</script>
