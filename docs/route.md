---
title: 路由及文档
---
coa项目中`gateway`文件夹下的每一个文件夹为一个模块，且模块间文档相互独立，文件夹下的`index.ts`文件为模块swagger概述文件

## 目录结构
```typescript
gateway             #网关层
├── debug           #debug模块
│     ├── index.ts  #debug模块下swagger概述文件
│     ├── debug.ts  #路由action
├── test            #test模块
│     ├── index.ts  #test模块下swagger概述文件
│     └── debug.ts  #路由action
```
## 示例

```typescript
// index.ts 
import { http } from '..';

http.routerConfig ({
  info: {
    title: 'debug',//
    version: '1.0.0',
    description: '公共参数说明'
  },
  externalDocs: {
    description: '外部链接',
    url: 'https://www.baidu.com'
  },
  components: {
    securitySchemes: {
      'key': {'type': 'apiKey', 'in': 'header', 'name': 'key'},
      'time': {'type': 'apiKey', 'in': 'header', 'name': 'time'},
      'digest': {'type': 'apiKey', 'in': 'header', 'name': 'digest'}
    }
  }
})

// debug.ts
import { http } from '..'

http.register('调试', {

  '/debug/test/hello': {
    options: {
      method: 'GET',
      name: '你好世界',
      param: {
        name: {required: false, description: '姓名', example: '王小明'}
      },
      result: {
        name: {description: '姓名', example: '王小明'}
      }
    },
    async handler () {
      return { result: 'hello,world!' }
    }
  },
})
```
