import { computed, ref, unref, reactive, watch, defineComponent, PropType, ExtractPropTypes } from 'vue';

import type { TableColumnProps, TableProps } from 'ant-design-vue';
import {
  Table as ATable,
  Popover as APopover,
  Checkbox as ACheckbox,
  CheckboxGroup as ACheckboxGroup,
  Button as AButton,
} from 'ant-design-vue';
import type { PaginationProps } from 'ant-design-vue/lib/pagination';

import 'ant-design-vue/lib/table/style/index';
import 'ant-design-vue/lib/popover/style/index';
import './index.less';

type columnProp = TableColumnProps & { suppressible: boolean };
export const listProps = () => ({
  tableData: Array as PropType<Record<string, unknown>[]>,
  columns: {
    type: Array as PropType<columnProp[]>,
    default: [],
  },
  pagination: Object as PropType<
    PaginationProps & {
      pageNo: number;
    }
  >,
  mutiple: { type: Boolean, default: false },
  tableProps: Object as PropType<TableProps>,
  isShowPagination: { type: Boolean, default: true },
  isOptionalTableColumn: { type: Boolean, default: true },
});

export type ListProps = Partial<ExtractPropTypes<ReturnType<typeof listProps>>>;

export default defineComponent({
  name: 'VpList',
  props: listProps(),
  setup: (props, { slots }) => {
    const selectedRowKeys = ref<unknown[]>([]); // Check here to configure the default column

    const onSelectChange = (changableRowKeys: number[]) => {
      selectedRowKeys.value = changableRowKeys;
    };

    const selectRow = (record: Record<string, unknown>) => {
      const newSelectRowKeys = [...selectedRowKeys.value];
      if (record.id) {
        if (newSelectRowKeys.indexOf(record.id) >= 0) {
          newSelectRowKeys.splice(selectedRowKeys.value.indexOf(record.id), 1);
        } else {
          newSelectRowKeys.push(record.id);
        }
        selectedRowKeys.value = newSelectRowKeys;
      }
    };

    const customRow = (record: Record<string, unknown>) => ({
      onClick: () => {
        selectRow(record);
      },
    });

    const rowSelection = computed(() =>
      props.mutiple
        ? {
            fixed: true,
            selectedRowKeys: unref(selectedRowKeys),
            onChange: onSelectChange,
          }
        : undefined,
    );

    // 设置按钮
    const checkoutState = reactive({
      indeterminate: false,
      checkAll: true,
      checkedList: props.columns.map((v) => v.key),
    });

    // 全选按钮点击
    const onCheckAllChange = (e: any) => {
      Object.assign(checkoutState, {
        checkedList: e.target.checked
          ? props.columns.map((v) => v.key)
          : props.columns.filter((v: any) => !v.suppressible).map((v) => v.key),
        indeterminate: false,
      });
    };

    watch(
      () => checkoutState.checkedList,
      (newVal) => {
        checkoutState.indeterminate = !!newVal?.length && newVal?.length < props.columns?.length;
        checkoutState.checkAll = newVal.length === props.columns.length;
      },
    );

    const checkColumns = computed(() => {
      const temp = props.columns.filter((v) => checkoutState.checkedList.includes(v.key));
      return temp;
    });

    return () => {
      return (
        <div class="table-wrapper">
          {props.isOptionalTableColumn}
          {slots.header || props.isOptionalTableColumn ? (
            <div class="btn-group">
              {/* {slots.header && slots.header?.()} */}
              {props.isOptionalTableColumn && (
                <span class="btn-extra">
                  {slots['popover-btn']}
                  {slots['popover-btn'] ? (
                    slots['popover-btn']?.()
                  ) : (
                    <APopover trigger="click" placement="bottomRight" overlay-style={{ minWidth: '160px' }}>
                      {{
                        default: () => (
                          <AButton type="primary" ghost>
                            设置
                          </AButton>
                        ),
                        content: () => (
                          <div>
                            <div
                              style={{
                                borderBottom: '1px solid #E9E9E9',
                                paddingBottom: '5px',
                                marginBottom: '5px',
                              }}
                            >
                              <ACheckbox
                                checked={checkoutState.checkAll}
                                indeterminate={checkoutState.indeterminate}
                                onChange={onCheckAllChange}
                              >
                                全选
                              </ACheckbox>
                            </div>
                            <ACheckboxGroup
                              value={checkoutState.checkedList}
                              onUpdate:value={(e) => {
                                checkoutState.checkedList = e;
                              }}
                            >
                              {props.columns.map((item) => (
                                <div key={item.key}>
                                  <ACheckbox value={item.key} disabled={!item.suppressible}>
                                    {item.title}
                                  </ACheckbox>
                                </div>
                              ))}
                            </ACheckboxGroup>
                          </div>
                        ),
                      }}
                    </APopover>
                  )}
                </span>
              )}
            </div>
          ) : null}
          {/* 附加描述行 */}
          <div class="extra">{slots.extra?.()}</div>
          {/* 列表行 */}
          <ATable
            row-key="id"
            row-selection={rowSelection}
            pagination={props.isShowPagination ? props.pagination : false}
            columns={checkColumns.value}
            data-source={props.tableData}
            custom-row={customRow}
            scroll={{ x: 1500, y: 540 }}
            {...props.tableProps}
          >
            {{
              bodyCell: (cellData) => slots.bodyCell?.(cellData),
            }}
          </ATable>
        </div>
      );
    };
  },
});
