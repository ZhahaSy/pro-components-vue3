# Crud

增删改查组件 使用Antd-vue 作为基础组件库进行封装。

## 用法

``` html
<template>
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
    <template #advanceFilter/>
    <template #topToolbar={ selectRowKeys, selectRows }/>
    <template #tableColumns/>
  </CRUD>
</template>
```


### API
| 属性       | 说明               | 类型                        | 默认值 |
| ---------- | ------------------ | --------------------------- | ------ |
| columns | 列信息   | BudgetFile[] | -      |
| mutiple    | 是否可以多选 | boolean | true     |

### Event

| 事件名 | 事件作用 | 参数 |
| ------- | ---------------------------- | --------------- |
| download | 下载按钮点击时触发 | 默认执行下载文件的操作 |
| preview | 文件被点击时触发 | 默认执行预览文件的操作 |
| remove | 删除按钮被点击时触发 | - |

