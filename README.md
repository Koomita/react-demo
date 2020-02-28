## 可跑命令

世界惯例👇

### `npm start`

### `npm test`

### `npm run build`

### `npm run lint`

eslint检查兼修复

## 魔改

跑了 `npm run eject` 把 `create-react-app` 的webpack配置暴露出来，方便魔改项目。

### 启用.babelrc

在 `config/webpack.config.js` 里搜索babelrc，可看到👇

```js
...
  rules: [
    ...
    {
      test: /\.(js|mjs)$/,
      exclude: /@babel(?:\/|\\{1,2})runtime/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false, // 改为true即可启用babelrc
        ...
```

### 添加公共SCSS混入与变量

#### margin/padding mixin

已经使用函数生成了简单明了的margin/padding样式，减少设置margin/padding的时间

- 设置margin
  `m{数值}` - 四周外边距
  `m{l/t/r/b}${数值}` - l左/t上/r右/b下

- 设置padding
  `p{数值}` - 四周内边距
  `p{l/t/r/b}` - l左/t上/r右/b下

- eg 设置一个外边距20px，内边距30px的盒子
```html
  <div className="m20 p20"></div>
```

#### 公共变量

在 `src/styles/variavle.scss` 里可设置全局颜色/字体等变量，方便以后修改

#### webpack注入全局样式

在 `config/webpack.config.js` 里使用 `sass-resources-loade` 引入公共样式，减少每个样式文件都引入一次的繁琐操作

