# 使用React开发『叮当记账』

> 这是一篇记录个人项目开发的文章



## 最难的技术问题

### SCSS 支持

> 1. 我先让 React 引用支持 sass
> 2. 需要 node-sass，它有两个缺点：下载速度慢、本地编译慢
> 3. 于是我想改用 dart-sass 代替 node-sass
> 4. 但是 React 只支持 node-sass 不支持 dart-sass
> 5. 经过我的努力搜索和研究
> 6. 我发现 npm 6.9 支持一个新功能，叫做 package alias
> 7. `yarn add --dev node-sass@npm:dart-sass@1.25.0` 即可偷梁换柱瞒天过海
> 8. 最后达成了我的目的

-  node-sass 安装失败
  1. 下载失败或下载慢，需要设置淘宝源（需要在 github 上下载，不是从 npm 下载
  2. 编译慢，甚至失败（node-sass 下载完后不能直接用，需要在本地编译
-  解决方法
   1. 使用 dart-sass 代替 node-sass（后者容易被墙
   2.  `yarn add --dev node-sass@npm:dart-sass@1.25.0`



## 字体

[跨平台中文字体解决方案]: https://github.com/zenozeng/fonts.css/

使用黑体



## 导航栏

### 1. 确定页面 url

> 使用 React Router
>
> 文档真 TM 难看

使用 5.3.0 版本，才有 *Switch*

Router 有两种模式：History 和 Hash

我选择：HashRouter，不需要后台服务器

### 2. Icon 组件

#### SVG Symbols

##### 难点：自定义webpack config

1. `yarn eject` 拿到 `webpack` 配置

2. 根据文档学习配置

   为了不被 TreeShaking，我们用 ***require*** 引入 svg

3. 之前需要一个一个文件引入，我选择引入一整个目录

   运行

   `yarn add --dev @types/webpack-env`

   ```typescript
   let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
   try {
     importAll(require.context('icons', true, /\.svg$/));
   } catch (error) {
     console.log(error);
   }
   ```


### 3. 封装导航栏

- 将 svg 抽离成 <Icon /> 组件
- 将导航栏抽里程 <Nav /> 组件
- 将布局抽离成 <Layout /> 组件



