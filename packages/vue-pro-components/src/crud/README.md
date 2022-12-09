# Crud

增删改查组件 使用Antd-vue 作为基础组件库进行封装

## 用法

``` vue
<CRUD 
    :v-model:tableData = "tableData"
    :v-model:fiterData = "fiterData"

    colums = ""
    formProps = '{}'
    tabeProps = ""
    seletion=""
    pagination=""


    request="() => {}"
    customRequest="() => {}"
>
<template #advanceFilter>
</template>
<template #topToolbar={ selectRowKeys, selectRows }>
</template>
<template #tableColumns
>
</template>
</CRUD>
```


### API
| 属性       | 说明               | 类型                        | 默认值 |
| ---------- | ------------------ | --------------------------- | ------ |
| file | 文件列表   | BudgetFile[] | -      |
| disabled    | 是否禁用（禁用则不可新增，不可删除） | boolean | true     |

### Event

| 事件名 | 事件作用 | 参数 |
| ------- | ---------------------------- | --------------- |
| download | 下载按钮点击时触发 | 默认执行下载文件的操作 |
| preview | 文件被点击时触发 | 默认执行预览文件的操作 |
| remove | 删除按钮被点击时触发 | - |


- 自带 `action`，直接调用后端上传接口

- 自带 `Header`，默认会带上 `X-AppKey` 和 `X-CSRF` 两个请求头

- 默认支持所有可支持的文件类型：`ALL_SUPPORT_FILE_SUFFIX`

## 用法

``` vue
<FileUpload :show-upload-list="false">
  <a-button :style="{ color: '#61666D' }">重新上传</a-button>
</FileUpload>
```


### API
| 属性       | 说明               | 类型                        | 默认值 |
| ---------- | ------------------ | --------------------------- | ------ |
| file | 文件列表   | BudgetFile[] | -      |
| disabled    | 是否禁用（禁用则不可新增，不可删除） | boolean | true     |

### Event

| 事件名 | 事件作用 | 参数 |
| ------- | ---------------------------- | --------------- |
| download | 下载按钮点击时触发 | 默认执行下载文件的操作 |
| preview | 文件被点击时触发 | 默认执行预览文件的操作 |
| remove | 删除按钮被点击时触发 | - |
