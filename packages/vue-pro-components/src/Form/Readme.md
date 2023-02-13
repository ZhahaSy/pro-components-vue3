# VP-Form

### 功能点
1. 配置化生成Form，支持以下基础组件
    1. select
    2. input
    3. date-picker
    4. switch
    5. uploader
    6. checkbox
    7. radio
    拓展组件
    1. treeSelect 
    2. deptSelect (treeSelect的变体，对接部门系统)
    3. mentions (关联公司人员系统)

2. 内置常用规则
    phone
    empty
    id  number

```html

<template>
    <VpForm v-model="formState" :formItems="formItems" @onFinish="onFinish"></VpForm>
</template>
<script setup lang="ts">
enum FormItem {
    // input
    TEXT="text",
    // number
    NUMBER="number",
    // datePicker
    DATEPICKER="datePicker",
    // select
    SELECT="select",
    // checkbox
    CHECKBOX="checkbox",
    // radio
    RADIO="radio",
}
// !: 必填； ?: 非必填； def: 默认值
const formItems = [
    {
        label: '名称', // !
        dataIndex: 'name', // !
        type: FormItem.TEXT, // !
        rules: [], // ?
        required: true, // def:false
        allowClear: true, // def:true
        maxLength: 100, // ?
    },
    {
        label: '年龄', // !
        dataIndex: 'name', // !
        type: FormItem.NUMBER, // !
        rules: [], // ?
        required: true, // def:false
        allowClear: true, // def:true
        min: 0, // ?
        max: 0, // ?
    },
    {
        label: '年份',
        dataIndex: 'year',
        type: FormItem.DATEPICKER,
        required: true,
        allowClear: true,
    }
];
</script>

```

2. Dependency 数据联动

3. 分步表单

4. 布局？？
    


