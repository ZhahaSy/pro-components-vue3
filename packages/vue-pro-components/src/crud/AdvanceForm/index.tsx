import { defineComponent, ref, PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import { Form as AForm, Button as AButton, FormInstance, FormProps, Row as ARow, Col as ACol } from 'ant-design-vue';
import './index.less';

export const advanceFormProps = () => ({
  formState: Object as PropType<Record<string, unknown>>,
  isShowExpand: { type: Boolean, default: true },
  filterProps: {
    type: Object as PropType<FormProps>,
    default: undefined,
  },
});
export type AdvanceFormProps = Partial<ExtractPropTypes<ReturnType<typeof advanceFormProps>>>;

export default defineComponent({
  name: 'AdvanceForm',
  props: advanceFormProps(),
  emits: ['search', 'reset'],
  setup: (props, { emit, slots }) => {
    const expand = ref(false);
    const formRef = ref<FormInstance>();
    // 提交
    const onFinish = (values) => {
      emit('search', values);
    };

    // 重置
    const onReset = () => {
      formRef.value?.resetFields();
      emit('search', formRef.value?.getFieldsValue() || {});
    };
    return () => (
      <div>
        <AForm
          ref={formRef}
          name="advanced_search"
          class="advanced-form"
          model={props.formState}
          {...props.filterProps}
          onFinish={onFinish}
        >
          {slots.filter?.({ expand: props.isShowExpand ? expand : undefined })}
          <ARow>
            <ACol span={24} style="text-align: right">
              <AButton type="primary" html-type="submit">
                搜索
              </AButton>
              <AButton style="margin: 0 8px" onClick={onReset}>
                重置
              </AButton>
              {props.isShowExpand ? (
                <a
                  style="font-size: 14px"
                  onClick={() => {
                    expand.value = !expand.value;
                  }}
                >
                  {expand.value ? <UpOutlined /> : <DownOutlined />}
                  {!expand.value ? '展开' : '收起'}
                </a>
              ) : null}
            </ACol>
          </ARow>
        </AForm>
      </div>
    );
  },
});
