import { CSSProperties, defineComponent, computed } from 'vue';
import PrefixTitle from '../Prefix/PrefixTitle';

enum WidthType {
  string,
  number,
}
interface Props {
  visible: boolean;
  title: { type: string; default: '' };
  bodyStyle: { type: CSSProperties; default: undefined };
  width: { type: WidthType; default: '' };
  titleProps: { type: Record<string, unknown>; default: undefined };
}

export type ModalProps = Partial<Props>;

export default defineComponent({
  emits: ['update:visible'],
  setup(props: ModalProps, { slots, attrs, emit }) {
    const computedWidth = computed(() => {
      const type = typeof props.width;
      if (type === 'number') {
        return `${props.width}px`;
      }
      return props.width;
    });

    const handleOk = () => {
      emit('update:visible', false);
    };

    return () => (
      <a-modal
        v-model:visible={props.visible}
        mask-closable={false}
        body-style={props.bodyStyle}
        width={computedWidth.value || '500px'}
        class="modalWrapper"
        v-bind={attrs}
        handleOk={handleOk}
      >
        {{
          title: slots.title
            ? () => (
                <PrefixTitle v-bind="titleProps">
                  {slots.default?.()}
                  {slots.extra?.()}
                </PrefixTitle>
              )
            : undefined,
          content: () => <></>,
          footer: () => {
            slots.footer?.();
          },
        }}
      </a-modal>
    );
  },
});
