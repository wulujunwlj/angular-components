conow-components 操作指南
==========

## 初始化模块
> grunt initComponent:component-name

在 `webapp/src/app/components/` 目录下会生成 `component-name` 对应的文件，包括：'.directive.js', '.service.js', '.filter.js', '.less', '.tpl.html'

## 监控 Less 和 JS 文件变化
> grunt watch

修改 `component-name` 目录下的 less 和 js 文件会自动进行文件编译或合并

## cautions
* 注意刷新 eclipse 的文件结构

## 关于本地 `node_modules` 的使用
* npm-g 中的文件拷贝到服务器: `C:\Users\your_name\AppData\Roaming\npm` 下
* npm 中的文件拷贝到服务器：`D:\work\javawork\conow-pub\src\main\webapp\UEDV2` 下