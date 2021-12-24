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
