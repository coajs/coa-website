---
title: 快速开始
toc: menu
order: 2
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

## 基础用法

在 `gateway/index.ts` 中写入代码

```typescript
import { CoaContext, CoaHttp } from 'coa-http'

export const http = new CoaHttp(CoaContext)

http.start().then(() => {
  // 做一些启动后的事情
})
```

在 `gateway/debug/test.ts` 中写入代码

```typescript
import { http } from '..'

http.register('调试', {
  '/debug/test/hello': {
    options: {
      method: 'GET',
      name: '你好世界',
    },
    async handler() {
      return { result: 'hello,world!' }
    },
  },
})
```

在 `tsconfig.json` 中写入配置

```typescript
{
  "compilerOptions": {
    "strict": true,
        "module": "CommonJS",
        "target": "ESNext",
        "baseUrl": ".",
        "outDir": "node_run",
        "sourceMap": true
  },
  "include": [
    "gateway",
    "service"
  ]
}
```

在 `package.json` 文件的 `scripts` 节点中加入`dev`

```typescript
{
  "scripts": {
    "dev": "HOST=3000 NODE_PATH=node_run tsc-watch --onSuccess 'node node_run/gateway'"
  }
}
```

## 启动

```sh
$ yarn dev
```

看到类似下面的运行结果，说明启动成功

```sh
Found 0 errors. Watching for file changes.
[server] Booting...
[server] Startup successful in: 5.399953 ms
[server] Listening on: http://localhost:3000/gw/doc
```

此时使用浏览器打开 `http://localhost:3000/gw/doc` 可以直接打开并查看接口文档
