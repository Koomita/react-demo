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

