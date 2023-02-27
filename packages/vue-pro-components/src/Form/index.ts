import { withInstall } from '@vue-pro-components/utils';
// eslint-disable-next-line import/no-self-import
import Comp from './proForm';
import ProFormItemComp from './proFormItem.vue';

export * as validator from './validator';

export const Form = withInstall(Comp);
export const FormItem = withInstall(ProFormItemComp);
