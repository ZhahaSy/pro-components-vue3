import { PropType, defineComponent, reactive, watch } from 'vue';
import { Form as AForm, Button as AButton } from 'ant-design-vue';
import ProFormItem from './proFormItem.vue';
import type { FormItem } from './proFormItem';

export const editableListProps = () => {
  return {
    modelValue: {
      type: Object as PropType<Record<string, any>>,
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
    const formState = reactive({});
    watch(
      () => props.modelValue,
      () => {
        Object.assign(formState, props.modelValue);
      },
      {
        immediate: true,
      },
    );

    const itemUpdate = (e, dataIndex) => {
      formState[dataIndex] = e;
      emit('update:modelValue', formState);
    };
    return () => {
      return (
        <div style="min-width: 100%">
          <AForm
            model={formState}
            layout={props.layout}
            onFinish={(e) => {
              emit('finish', e);
            }}
          >
            {props.formItems.map((item) => (
              <ProFormItem
                value={formState[item.dataIndex]}
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
