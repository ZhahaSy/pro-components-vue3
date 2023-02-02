<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from 'vue-pro-components/src/Action/ActionDialog';
import testCrud from './views/test-crud/index.vue';
import testEditableList from './views/test-editableTable/index.vue';
</script>

<template>
  <div class="app-wrap">
    <!-- <h1>Crud</h1>
    <testCrud></testCrud> -->
    <!-- <h1>VpButton</h1>
    <Button type="primary"></Button> -->
    <h1>EditableList</h1>
    <testEditableList></testEditableList>
  </div>
</template>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.btn-test-ul {
  text-align: left;

  > li {
    + li {
      margin-top: 10px;
    }

    > span {
      margin-right: 10px;
    }
  }
}
</style>
