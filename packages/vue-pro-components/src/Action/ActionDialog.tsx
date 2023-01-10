import { defineComponent, ref } from 'vue';
import './style.css';
import Modal from '../Modal/BasicModal';

interface ButtonProps {
  type: 'primary' | 'dashed' | 'link';
}

const Button = defineComponent({
  setup(props: ButtonProps) {
    const visible = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };
    return () => (
      <>
        <a-button class={['btn', `btn-${props.type}`]} showModal={showModal}></a-button>
        <Modal v-model:visible={visible}></Modal>
      </>
    );
  },
});

export default Button;
