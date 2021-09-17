# 缓存数据模型

缓存数据模型基于 [coa-redis](https://www.npmjs.com/package/coa-redis) 实现快速高效的数据缓存，并**统一对缓存进行管理、维护缓存的生命周期、保证缓存与 MySQL 数据的一致性**

使用之前需安装 `coa-redis` ，使用方法可查看 [这里](/component/expand/coa-redis)

缓存数据模型的使用方法和基本数据模型完全相同，仅需要将 `MysqlNative` 替换为 `MysqlCache`

```typescript
import { CoaMysql, MysqlCache } from 'coa-mysql'
import { RedisBin, RedisCache } from 'coa-redis'

// 定义一个redis实例，详细用法详见 https://github.com/coajs/coa-redis
const redisCache = new RedisCache(new RedisBin({ host: '127.0.0.1' }))

// 定义一个缓存数据模型的基类
export class MysqlCacheModel<T> extends MysqlCache<T> {
  constructor(option: CoaMysql.ModelOption<T>) {
    // 将配置实例 和 redisCache实例 都绑定到这个基类上
    super(option, mysqlBin, redisCache)
  }
}

// 通过缓存基类模型定义缓存用户模型
const UserCached = new (class extends MysqlCacheModel<UserScheme> {
  constructor() {
    super({
      name: 'User',
      title: '用户表',
      scheme: userScheme,
      pick: ['userId', 'name']
    })
  }
})()

// 查询数据
await User.getById('id001') // 首次查询会先读取数据库
await User.getById('id001') // 第二次调用会直接从缓存中读取数据

// 增删改操作和基本数据模型一直
await User.insert({ name: '王小明', gender: 1 }) // 返回 'id001'
await User.updateById('id001', { name: '李四' }) // 返回 1
```

缓存模型会自动维护和管理缓存，如果缓存已经存在，接下来又调用 update 更新了数据，再次查询数据时自动从数据库中取出最新的数据
