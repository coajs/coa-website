---
title: 安装
---

## 环境安装

请确保在您的操作系统上安装了最新稳定版的 [Node.js](https://nodejs.org/) 。

## 新建项目

```bash
$ mkdir <project-name>
$ cd <project-name>

$ yarn add coa-http
$ yarn add typescript tsc-watch @types/node -D
```

## 创建文件

```
gateway             #网关层
├── index.ts        #服务初始化
├── debug           #模块定义
│     └── test.ts   #路由定义
service             #服务层
├── sIndex.ts        #业务层
package.json
tsconfig.json
```
