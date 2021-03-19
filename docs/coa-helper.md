---
title: coa-helper
---
COA基础工具库，包含常用方法、必要的第三方类库

## 安装

```sh
$ yarn add coa-helper
```

## 导入

```typescript
// 导入 helper
import { helper } from 'coa-helper'

// 也可以导入为短字符 $
import { $ } from 'coa-helper'

// $ 是 helper 的别名，两者完全相同的，都可以正常使用，下文均以 $ 为例
$ === helper // true
```

## 常用方法

```typescript
// 异步休眠，代码暂停指定毫秒（注意：必须在async函数下运行，前面要加await）
await $.timeout(1000)

// 解析成数组，如果已经是数组则直接返回，不是数组则将值放在数组中，如果为空则返回空数组
$.parseArray([1, 2, 3]) // [1, 2, 3]
$.parseArray(1) // [1]
$.parseArray('A') // ['A']
$.parseArray(undefined) // []
$.parseArray(null) // []

// 将对象数组转成键值对的对象形式
const list1 = [{ id: 'a', name: 'A' }, { id: 'b', name: 'B' }, { id: 'c', name: 'C' }]
$.list2object(list1, 'id') // { a: { id: 'a', name: 'AA' }, b: { id: 'b', name: 'BB' },c: { id: 'c', name: 'BB' }}

// 将所有键转换为snakeCase风格
const object1 = { userId: '1', userName: 'A', extendData: { userAge: 25, userAvatar: '' } }
const object2 = $.snakeCaseKeys(object1) // { user_id: '1', user_name: 'A', extend_data: { user_age: 25, user_avatar: '' }}

// 将所有键转换为camelCase风格
$.camelCaseKeys(object2) // { userId: '1', userName: 'A', extendData: { userAge: 25, userAvatar: '' } }
```

## 第三方库

包含以下第三方库

- [dayjs](https://day.js.org/zh-CN)
- [axios](https://github.com/axios/axios)
- [hashids](https://hashids.org/)
- [lodash](https://lodash.com/)

```typescript
// 获取 dayjs 对象，dayjs的使用详见 https://day.js.org/zh-CN
import { dayjs } from 'coa-helper'

// 获取 axios 对象，axios的使用详见 https://github.com/axios/axios
import { axios } from 'coa-helper'

// 获取 hashids 对象，hashids的使用详见 https://hashids.org
import { HashIds } from 'coa-helper'

// 获取 lodash 对象，lodash的使用详见 https://lodash.com
import { lodash } from 'coa-helper'

// lodash 存在别名 _ ，也可以直接导入
import { _ } from 'coa-helper'
```
