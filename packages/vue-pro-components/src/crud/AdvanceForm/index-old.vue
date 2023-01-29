<script lang="ts" setup>
import { ref } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import type { FormInstance, FormProps } from 'ant-design-vue';
import type { FlowListParams } from '@/api/bussinessFlow';

interface props {
  formState: Record<string, unknown>;
  isShowExpand: boolean;
  /**
   * a-form组件中的表格 props
   */
  filterProps?: FormProps;
}

withDefaults(defineProps<props>(), {
  isShowExpand: true,
  filterProps: undefined,
});

const emits = defineEmits(['search', 'reset']);

const expand = ref(false);
const formRef = ref<FormInstance>();

// 提交
const onFinish = (values: FlowListParams) => {
  emits('search', values);
};

// 重置
const onReset = () => {
  formRef.value?.resetFields();
  emits('search', formRef.value?.getFieldsValue() || {});
};
</script>

<template>
  <div>
    <!-- 搜索 -->
    <a-form
      ref="formRef"
      name="advanced_search"
      :class="Classes['advanced-form']"
      :model="formState"
      v-bind="filterProps"
      @finish="onFinish"
    >
      <slot name="filter" :expand="isShowExpand ? expand : undefined"></slot>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onReset">重置</a-button>
          <a v-if="isShowExpand" style="font-size: 14px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            {{ !expand ? '展开' : '收起' }}
          </a>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<style lang="less" module="Classes">
.advanced-form {
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
}
</style>
