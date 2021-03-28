---
title: 缓存
toc: menu
order: 6
group:
  title: 基础用法
  order: 3
---

基于`coa-redis`,COA 核心 Redis 数据库组件，包含数据缓存、队列消息、定时任务、分布式锁等

## 特点

- **功能齐全** 基础数据连接基于 [ioredis](https://github.com/luin/ioredis) ，注重性能、功能齐全
- **简单轻量** 不依赖于其他第三方库（基础连接库 ioredis 除外）
- **TypeScript** 全部使用 TypeScript 书写，类型约束、IDE 友好

## 组件

- 数据缓存 [RedisCache](https://github.com/coajs/coa-redis#数据缓存)
- 队列消息 [RedisQueue](https://github.com/coajs/coa-redis#队列消息) [RedisQueueWorker](https://github.com/coajs/coa-redis#队列消息)
- 定时任务 [RedisCron](https://github.com/coajs/coa-redis#定时任务)
- 分布式锁 [RedisLock](https://github.com/coajs/coa-redis#分布式锁)

## 安装

```sh
$ yarn add coa-redis
```

## 示例

```typescript
// cRedis.ts 配置实例化
import { RedisBin, RedisCache, RedisLock } from 'coa-redis';
import { CoaEnv } from 'coa-env';

const appEnv = new CoaEnv('1.0.0');
// Redis配置
const config = appEnv.getConfig({
  d0: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: 1,
    prefix: 'test-d0', // 缓存前缀
    trace: false,
  },
});

export default new (class {
  public bin = new RedisBin(config);
})();
```

## 组件使用

COA 核心 Redis 数据库组件，包含数据缓存、队列消息、定时任务、分布式锁等

### 特点

- **功能齐全** 基础数据连接基于 [ioredis](https://github.com/luin/ioredis) ，注重性能、功能齐全
- **简单轻量** 不依赖于其他第三方库（基础连接库 ioredis 除外）
- **TypeScript** 全部使用 TypeScript 书写，类型约束、IDE 友好

### 组件

- 数据缓存 [RedisCache](https://github.com/coajs/coa-redis#数据缓存)
- 队列消息 [RedisQueue](https://github.com/coajs/coa-redis#队列消息) [RedisQueueWorker](https://github.com/coajs/coa-redis#队列消息)
- 定时任务 [RedisCron](https://github.com/coajs/coa-redis#定时任务)
- 分布式锁 [RedisLock](https://github.com/coajs/coa-redis#分布式锁)

## 快速开始

### 安装

```sh
$ yarn add coa-redis
```

### 基础配置

```typescript
import { RedisBin } from 'coa-redis';

const redisConfig = {
  // 服务器地址
  host: '127.0.0.1',
  // 端口
  port: 6379,
  // 密码，若无填空字符串
  password: '123456',
  // 数据库，默认为0
  db: 0,
  // 键前缀，可区分不同的项目
  prefix: 'pre_',
  // 是否回显查询语句
  trace: false,
};

// 创建一个配置实例，后续所有的组件的使用均依赖此配置实例
// 一般一个数据库只需要使用一个实例，内部会管理连接池
const redisBin = new RedisBin(redisConfig);
```

### 数据缓存

基本使用

```typescript
// 创建一个缓存实例
const redisCache = new RedisCache(redisBin);

// 注意：为了约束模块数据的隔离，缓存实例的所有操作均需要传递nsp参数且无法省略
// 一般可将模块名称当做nsp，每个nsp之间数据相互隔离

// 设置缓存数据
await redisCache.set('module1', 'id001', 'value001', 5 * 60 * 1000 /*5分钟*/); // 1

// 读取缓存数据
await redisCache.get('module1', 'id001'); // value001

// 删除缓存数据（支持删除同一个nsp下的多条数据）
await redisCache.delete('module1', ['id001', 'id002']); // 2
```

批量操作

```typescript
// 批量设置缓存数据
await redisCache.mSet(
  'module1',
  { id101: 'value101' },
  5 * 60 * 1000 /*5分钟*/,
); // 1
await redisCache.mSet(
  'module2',
  { id201: 'value201', id202: { name: 'A2', title: 'a2' } },
  5 * 60 * 1000 /*5分钟*/,
); // 2

// 批量读取缓存数据
await redisCache.mGet('module1', ['id101']); // 'value101'
await redisCache.mGet('module2', ['id201', 'id202']); // { id201: 'value201', id202: { name: 'A2', title: 'a2' }

// 批量删除缓存数据（支持删除不同nsp下的多条数据）
await redisCache.mDelete([
  ['module1', ['id101']],
  ['module2', ['id201', 'id202']],
]); // 3
```

语法糖

```typescript
// 获取缓存信息，如果不存在则按照方法读取并保存
const resultWarp1 = await redisCache.warp(
  'module1',
  'id301',
  () => {
    // 这里做一些事情
    return Math.random(); // 返回结果
  },
  10 * 60 * 1000 /*10分钟*/,
);

resultWarp1; // 0.3745813097015189，10分钟内都返回 0.3745813097015189

// 这个语法糖等同于如下操作
async function getAndSetCache(nsp: string, id: string) {
  let result = await redisCache.get(nsp, id);
  if (result === undefined) {
    // 这里做一些事情
    result = Math.random(); // 得到结果
    await redisCache.set(nsp, id, result, 10 * 60 * 1000 /*10分钟*/);
  }
  return result;
}

// 批量获取缓存信息
const resultWarp2 = await redisCache.mWarp(
  'module1',
  ['id301', 'id302'],
  ids => {
    const result = {} as { [id: string]: number };
    for (const id of ids) {
      // 这里做一些事情
      result[id] = Math.random();
    }
    return result; // 返回结果，务必保证键值对形式
  },
  10 * 60 * 1000 /*10分钟*/,
);

resultWarp2; // { id301: 0.32430600236596074, id302: 0.29829421673682566 }
```

### 队列消息

```typescript
// 定义一个队列名称和消息类型名称
const QUEUE_NAME_1 = 'CHANNEL-1',
  MESSAGE_NAME_1 = 'NORMAL-MESSAGE-1';

// 定义一个消息队列
const queue = new RedisQueue(redisBin, QUEUE_NAME_1);

// 定义该队列的消费者
const worker = new RedisQueueWorker(queue);
worker.on(MESSAGE_NAME_1, async (id, data) => {
  console.log(`消息的ID是${id} 消息附带的数据${data}`);
});

// 生产一个消息
await queue.push(MESSAGE_NAME_1, 'message-id-001', { value: '001' }); // 1
```

### 定时任务

```typescript
// 定时任务依赖于消息队列的消费者，同时要指定版本号避免版本升级瞬间任务冲突
const cron = new RedisCron(quque.worker, env.version);

// 每天10、16点执行
cron.on('0 0 10,16 * * *', () => {
  /**做一些事情**/
});

// 每天0:30执行
cron.on('0 30 0 * * *', () => {
  /**做一些事情**/
});

// 每10分钟执行
cron.on('0 */10 * * * *', () => {
  /**做一些事情**/
});

// 每周一周三周五0点执行
cron.on('0 0 0 * * 1,3,5', () => {
  /**做一些事情**/
});

// 每月1日、16日的0点执行
cron.on('0 0 0 1,16 * *', () => {
  /**做一些事情**/
});
```

### 分布式锁

```typescript
// 创建锁方法实例
const redisLock = new RedisLock(redisBin);

// 阻塞执行，如果重复调用，会一直等待上一次调用完成
await redisLock.start('lock-for-user-register', () => {
  // 做一些事情，这个事情不会并发执行
});

// 尝试执行，如果是重复调用，则会抛出 RedisLock.Running 错误
await redisLock.try('lock-for-user-register', () => {
  // 做一些事情，这个事情不会并发执行
});

// 节流执行，1秒内只允许调用1次，重复调用会排队等待下一个1秒再执行
await redisLock.throttle(
  'lock-for-user-register',
  () => {
    // 做一些事情，这个事情不会并发执行
  },
  1000 /*1秒钟*/,
);
```
