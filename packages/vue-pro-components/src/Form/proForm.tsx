import { Rule } from 'ant-design-vue/lib/form';
import { PropType, defineComponent } from 'vue';

export enum FormItemType {
  // input
  TEXT = 'text',
  // number
  NUMBER = 'number',
  // datePicker
  DATEPICKER = 'datePicker',
  // select
  SELECT = 'select',
  // checkbox
  CHECKBOX = 'checkbox',
  // radio
  RADIO = 'radio',
}

export type FormItem = {
  label: string;
  dataIndex: string;
  type: FormItemType;
  rules?: Rule[];
  required?: boolean;
  allowClear?: boolean;
  // TODO: 联合类型需要联动设置
  maxLength?: number;
  min?: number;
  max?: number;
};

export const editableListProps = () => {
  return {
    value: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<FormItem[]>,
      default: [],
    },
    columns: {
      type: Array,
      required: true,
    },
  };
};
export default defineComponent({
  name: 'ProForm',
  props: editableListProps(),
  emits: ['onFinish', 'model:value'],
  setup(props, { emit }) {
    return (
      <aForm value={props.value} onFinish={(e) => emit('onFinish', e)} onChange={(e) => emit('model:value', e)}>
        <div class="vpForm-footer">
          {props.formItems.map((item) => (
            <>{item}</>
          ))}

          <aButton type="submit">提交</aButton>
        </div>
      </aForm>
    );
  },
});
