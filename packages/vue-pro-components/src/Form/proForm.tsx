import { PropType, computed, defineComponent, ref, watch } from 'vue';
import { Form as AForm, Button as AButton, Row as ARow, Col as ACol } from 'ant-design-vue';
import { FormLayout } from 'ant-design-vue/es/form/Form';
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
      type: String as PropType<'inline' | 'horizontal' | 'vertical' | 'grid' | undefined>,
      default: undefined,
    },
    // 格栅数
    gridNum: {
      type: Number,
      default: 1,
    },
  };
};
export default defineComponent({
  name: 'ProForm',
  props: editableListProps(),
  emits: ['finish', 'update:modelValue'],
  setup(props, { emit, slots }) {
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

    const gridLayout = computed(() => {
      switch (props.layout) {
        case 'grid':
          return 24 / props.gridNum;
        default:
          return undefined;
      }
    });
    return () => {
      return (
        <div style="min-width: 100%">
          <AForm
            model={formState.value}
            layout={props.layout as FormLayout}
            onFinish={(e) => {
              emit('finish', e);
            }}
          >
            <ARow wrap={true}>
              {props.formItems.map((item) => (
                <ACol span={gridLayout.value}>
                  <ProFormItem
                    value={formState.value[item.dataIndex]}
                    {...item}
                    onUpdate:value={(e) => {
                      itemUpdate(e, item.dataIndex);
                    }}
                  ></ProFormItem>
                </ACol>
              ))}
              {slots?.default?.()}
            </ARow>
            <ARow>
              <div class="vpForm-footer">
                <AButton type="primary" html-type="submit">
                  提交
                </AButton>
              </div>
            </ARow>
          </AForm>
        </div>
      );
    };
  },
});
