<template>
  <div class="vpFormListWrap">
    <a-row v-for="(state, index) in formState || []" :key="state.__id" :wrap="true">
      <a-col v-for="item in formListConfig || []" :key="item.dataIndex + index" :span="span">
        <proFormItem
          v-model:value="formState![index][item.dataIndex]"
          v-bind="item"
          :data-index="[index, item.dataIndex]"
        >
        </proFormItem>
      </a-col>
      <div></div>
    </a-row>

    <a-row v-if="addible" style="margin-right: 20px" :wrap="true">
      <a-button type="dashed" block @click="handleAdd">
        <PlusOutlined />
        新增
      </a-button>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch, computed } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { uniqueId } from 'lodash';
import { FormItem } from '../Form/type';
import proFormItem from '../Form/proFormItem.vue';

type formValue = (Record<string, unknown> & { __id: string }[]) | undefined;

interface Props {
  value: formValue;
  addible?: boolean;
  deletable?: boolean;
  formListConfig?: FormItem[];
  span?: number;
}

const props = withDefaults(defineProps<Props>(), {
  addible: true,
  formListConfig: undefined,
  span: 24,
});

const emit = defineEmits(['update:modelValue']);

const formState: Ref<formValue> = ref();

const handleAdd = () => {
  console.log('add');

  if (props.addible) {
    formState.value?.push({
      __id: uniqueId(),
    });
    emit('update:modelValue', formState.value);
  }
};

watch(
  () => props.value,
  () => {
    formState.value = props.value;
  },
  {
    immediate: true,
  },
);

const span = computed(() => 24 / (props.formListConfig?.length || 1));
</script>

<style lang="less">
.vpFormListWrap {
  margin-bottom: 10px;
}
</style>
