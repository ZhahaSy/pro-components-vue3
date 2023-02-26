import { PropType, defineComponent, ref, watch } from 'vue';
import { Form as AForm, Button as AButton } from 'ant-design-vue';
import ProFormItem from './proFormItem.vue';
import type { FormItem } from './type';

export const editableListProps = () => {
  return {
    modelValue: {
      type: Object as PropType<Record<string, unknown>>,
      required: true,
    },
    formItems: {
      type: Array as PropType<FormItem[]>,
      default: [],
    },
    layout: {
      type: String as PropType<'inline' | 'horizontal' | 'vertical' | undefined>,
      default: undefined,
    },
  };
};
export default defineComponent({
  name: 'ProForm',
  props: editableListProps(),
  emits: ['finish', 'update:modelValue'],
  setup(props, { emit }) {
    const formState = ref({});
    watch(
      () => props.modelValue,
      (value) => {
        formState.value = value || {};
      },
      {
        immediate: true,
        deep: true,
      },
    );

    const itemUpdate = (e, dataIndex) => {
      formState.value[dataIndex] = e;

      emit('update:modelValue', formState);
    };
    return () => {
      return (
        <div style="min-width: 100%">
          <AForm
            model={formState.value}
            layout={props.layout}
            onFinish={(e) => {
              emit('finish', e);
            }}
          >
            {props.formItems.map((item) => (
              <ProFormItem
                value={formState.value[item.dataIndex]}
                {...item}
                onUpdate:value={(e) => {
                  itemUpdate(e, item.dataIndex);
                }}
              ></ProFormItem>
            ))}
            <div class="vpForm-footer">
              <AButton type="primary" html-type="submit">
                提交
              </AButton>
            </div>
          </AForm>
        </div>
      );
    };
  },
});
