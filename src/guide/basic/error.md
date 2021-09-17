# 错误配置

## 安装

```sh
$ yarn add coa-error
```

## 示例

```typescript
import { CoaError } from 'coa-error'

// 定义并抛出一个新的错误
throw new CoaError('User.UserAgeInvaild', '用户年龄错误')

// 使用静态方法抛出（可以当做一个语法糖）
CoaError.throw('User.UserAgeInvaild', '用户年龄错误')

// 也可以使用message方法，仅仅提示不在stdio显示（由coa上层框架控制，框架外部调用等同于throw）
CoaError.message('User.UserAgeInvaild', '用户年龄错误')
```

## 数据结构

COA 错误要求必须定义如下统一参数：

- **code** 错误代码，
- **message** 错误消息

```typescript
class CoaError extends Error {
  name = 'CoaError'

  code: string
  stdout: boolean

  constructor(code: string, message: string, stdout: boolean = true) {
    super(message)
    this.code = code
    this.stdout = stdout
  }

  static message(code: string, message: string): never {
    throw new CoaError(code, message, false)
  }

  static throw(code: string, message: string): never {
    throw new CoaError(code, message)
  }
}
```
