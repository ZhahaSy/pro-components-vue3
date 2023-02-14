import { PropType, defineComponent } from 'vue';
import { Form as AForm, Button as AButton } from 'ant-design-vue';
import ProFormItem, { FormItem } from './proFormItem';

export const editableListProps = () => {
  return {
    modelValue: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<FormItem[]>,
      default: [],
    },
  };
};
export default defineComponent({
  name: 'ProForm',
  props: editableListProps(),
  emits: ['finish', 'model:value'],
  setup(props, { emit }) {
    return () => {
      return (
        <div style="min-width: 100%">
          <AForm model={props.modelValue} onFinish={(e) => emit('finish', e)}>
            {props.formItems.map((item) => (
              <ProFormItem model={(props.modelValue || {})[item.dataIndex]} {...item}></ProFormItem>
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
