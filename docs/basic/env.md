---
title: 环境配置
toc: menu
order: 1
group:
  title: 基础用法
  order: 3
---

# 环境配置

环境配置依赖于[coa-env]()

## 安装

```sh
$ yarn add coa-env
```

## 示例

```typescript
import { CoaEnv } from 'coa-env'

// 创建一个新的环境实例
const appEnv = new CoaEnv('1.0.0')

// 判断是否是线上环境
if (appEnv.isOnline) {
  // do something
}

// 判断是否是测试类环境
if (appEnv.runEnvType === 't') {
  // do something
}

// 获取版本
const version = appEnv.version

// 获取环境名称
const runEnvName = appEnv.runEnvName

// 获取当前工作目录
const cwd = appEnv.cwd
```

## 多环境配置

定义不同环境的配置表，会自动根据环境类型返回对应环境的配置信息

- 精确返回对应环境的配置

```typescript
// 用户 d1 t1 v1 等精确的环境，精确返回对应环境的配置
const hostConfig1 = appEnv.getConfig({
  d1: { host: '127.0.0.1' },
  t1: { host: '192.168.0.1' },
  v1: { host: '172.16.0.1' },
})
// 当环境是d1，返回 { host: '127.0.0.1' }
// 当环境是t1，返回 { host: '192.168.0.1' }
// 当环境是v1，返回 { host: '172.16.0.1' }
// 当环境是v2，报错 CoaError: Env.ConfigNotFound 配置信息不存在
```

- 返回一类环境的配置

```typescript
// 用 d t v 可以代表一类环境，返回该类环境
const hostConfig2 = appEnv.getConfig({
  d: { host: '127.0.0.1' },
  t: { host: '192.168.0.1' },
  v: { host: '172.16.0.1' },
})
// 当环境是d1 d2 d3，返回 { host: '127.0.0.1' }
// 当环境是t1 t2 t3，返回 { host: '192.168.0.1' }
// 当环境是v1 v2 v3，返回 { host: '172.16.0.1' }
// 当环境是a1，报错 CoaError: Env.ConfigNotFound 配置信息不存在
```

- 返回默认环境配置

```typescript
// 用 $ 可以代表默认配置，当配置表不存在对应环境时，返回默认配置
const hostConfig3 = appEnv.getConfig({
  $: { host: '127.0.0.1' },
  v: { host: '172.16.0.1' },
})
// 当环境是v1 v2 v3，返回 { host: '172.16.0.1' }
// 其他环境，一律返回 { host: '127.0.0.1' }
```

## 环境变量属性

```typescript
// 以下属性均为只读属性，在实例创建时刻就已经固定，实例生成后无法修改
class CoaEnv {
  // runEnv 运行环境，一般定义为开发类环境('d0' 'd1' 'd2') 测试类环境('t0' 't1' 't2') 生产类环境('v0' 'v1' 'v2')等
  // 由环境变量 process.env.RUN_ENV 控制，如果没有定义，则默认为 'd0'
  public readonly runEnv: string

  // runEnvType 运行环境类型，单字母形式，便于判断某一类环境，根据 runEnv 自动判断，如 'd' 't' 'v'
  public readonly runEnvType: 'd' | 't' | 'v' | string

  // runEnvName 运行环境的名称，便于对外展示环境的名称，根据 runEnvType 自动判断，如 'alpha' 'beta' 'online'
  public readonly runEnvName: 'alpha' | 'beta' | 'online' | 'unknown' | string

  // cwd 当前运行Node.js进程的工作目录，由 process.cwd() 控制
  public readonly cwd: string

  // name 当前包名，由 package.json 中的 name 控制
  public readonly name: string

  // isProd 是否是生产环境，由 process.env.NODE_ENV === 'production' 控制，只要不是 'production' 均为非生产环境
  public readonly isProd: boolean

  // isOnline 是否是线上环境，由 runEnvType === 'v' 控制，只要不是 'v' 均为非线上环境
  public readonly isOnline: boolean

  // hostname 当前主机名称，由 process.env.HOSTNAME 控制，默认为 'local'
  public readonly hostname: string

  // 当前运行的版本号，解耦出来，由外部程序控制，创建实例时必传此参数
  public readonly version: string
}
```
