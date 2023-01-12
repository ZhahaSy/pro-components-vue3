import { CSSProperties, defineComponent } from 'vue';
import './style.less';

enum SizeTitle {
  Small,
  Middle,
}
interface prefixProps {
  prefixClass: { type: string; default: '' };
  prefixStyle: { type: CSSProperties; default: undefined };
  size: { type: SizeTitle; default: 'middle' };
}

export type PrefixProps = Partial<prefixProps>;

export default defineComponent({
  setup(props: PrefixProps, { slots }) {
    return () => (
      <section class="wrapper">
        <span class={['prefix', props.size, props.prefixClass]} style={props.prefixStyle} />
        {slots.default?.()}
        {slots.extra?.()}
      </section>
    );
  },
});
