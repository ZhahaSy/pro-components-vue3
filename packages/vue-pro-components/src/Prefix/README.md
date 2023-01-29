# PrefixTitle 组件

### 用法

```vue
<PrefixTitle class="" :style="{ color: 'red' }" prefix-class="" :prefix-style="{ width: '2px', height: '8px' }">
  Header
</PrefixTitle>
```

```jsx
<PrefixTitle class={} style={color: 'red'} prefixClass={} prefixStyle={width: '2px', height: '8px'}>
   Header
</PrefixTitle>
```

### API

| 属性        | 说明         | 类型                    | 默认值   |
| ----------- | ------------ | ----------------------- | -------- |
| class       | 容器类名     | string                  | -        |
| style       | 容器样式     | CSSProperties           | -        |
| prefixClass | 左侧前缀类名 | string                  | -        |
| prefixStyle | 左侧前缀样式 | CSSProperties           | -        |
| size        | 左侧前缀大小 | 'small' &#124; 'middle' | 'middle' |

> size 为 middle 时，宽 3，高 11，为 small 时，宽 2，高 8

### Slots

| 名称    | 说明           | 参数 |
| ------- | -------------- | ---- |
| default | 标题内容       | -    |
| extra   | 额外的提示信息 | -    |
