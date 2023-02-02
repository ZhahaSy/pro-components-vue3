// 兼容所有Table的基础功能，关闭筛选功能，同时支持行内编辑功能
import { ExtractPropTypes, PropType, defineComponent } from 'vue';
import Crud from '../Crud/index';
import { listProps } from '../Crud/List';
import { ColumnProp } from '../Crud/type';
import VpEditCell from './editCell';

export type EditableColumnProp = {
  editable?: boolean;
  // type?
} & ColumnProp;

export const editableListProps = () => {
  return {
    ...listProps(),
    editingKeys: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array as PropType<EditableColumnProp[]>,
      required: true,
    },
  };
};

export type EditableListProps = Partial<ExtractPropTypes<ReturnType<typeof editableListProps>>>;

export default defineComponent({
  name: 'VpEditableList',
  props: editableListProps(),
  emits: ['update:editingKeys'],
  setup: (props, { slots, attrs }) => {
    return () => {
      return (
        <Crud {...attrs} columns={props.columns} isOptionalTableColumn={false}>
          {{
            header: () => slots.header?.(),
            extra: () => slots.extra?.(),
            tableBodyCell: (cellData) => {
              if (cellData.column.editable && props.editingKeys?.includes(cellData.record.key)) {
                return <div>editing</div>;
              }

              if (cellData.column.customRender) {
                return cellData.column.customRender(cellData);
              }

              return slots.tableBodyCell?.(cellData);
            },
          }}
        </Crud>
      );
    };
  },
});
