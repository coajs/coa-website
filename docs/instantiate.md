---
title: 实例化
---

端口号配置，在package.json的scripts中设置项目启动的环境变量HOST

```typescript
"dev": "HOST=3000 NODE_PATH=node_run tsc-watch --onSuccess 'node node_run/gateway'"
```

项目启动配置

```typescript
import { CoaContext, CoaHttp } from 'coa-http'
import { CoaEnv } from 'coa-env';

const appEnv = new CoaEnv('1.0.0')

export const http = new CoaHttp(
  CoaContext,
  appEnv, //环境变量初始化
  { baseUrl: '/xxx' } //项目路由前缀 
)

http.start().then(() => {
  // 做一些启动后的事情
})
```
