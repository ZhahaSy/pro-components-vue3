# Vue-pro-components
## vue3 + antd-vue 的业务组件

相关技术栈
- [learnajs](https://github.com/lerna/lerna#readme)
- [vue](https://cn.vuejs.org/)
- [antd-v](https://www.antdv.com/docs/vue/introduce-cn/)
- [typescript](https://www.tslang.cn/index.html)

## 文件结构
 -- packages （项目主文件）

 -- vue-pro-components (组件文件夹)

 -- playground (测试项目)


## 快速启动
```
// 安装工程依赖
npm run bootstrap

// 启动测试项目
npm run playground:dev

// 提交npm 未启用
publish:package 
```

## about developer （开发者必看！！！）

### 分支管理规范

1. 一个功能为一个分支。 一个task 为一个commit。
2. 合并主分支前 应提交mr 让团队其他成员提供 code review 后才合并主分支。

### 组件开发

1. class 命名规范遵循一下规则
vp- 前缀
vp-danger 变量
vp-crud-header_logo  具体位置样式
