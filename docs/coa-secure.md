---
title: coa-secure
---
- 常用的安全算法库
- 主要配合 [coa-http](https://www.npmjs.com/package/coa-http) 使用
- **零依赖** 不依赖任何第三方库
- **轻量** 只有一个文件
- **TypeScript** 使用TypeScript开发，类型约束，IDE友好

## 安装

```sh
$ yarn add coa-secure
```

## 示例

```typescript
import { secure } from 'coa-secure'

// 计算sha1
const sha1string = secure.sha1('ABC') // '3c01bdbb26f358bab27f267924aa2c9a03fcfdb8'

// 计算md5
const md5string = secure.md5('ABC') // '902fbdd2b1df0c4f70b4a5d23525e932'

// 计算id32算法（自命名），计算一个或多个字符串的md5值，保证返回值长度为32位十六进制格式
const id32string1 = secure.id32('ABC') // '2e092fe24ab259fb13522911f4b00fc7'
const id32string2 = secure.id32('ABC', 'XYZ') // '5f375d88acd94ed2aacdc8a1dc1e6611'

// 计算id32算法，并将返回值转换为25位三十六进制格式
const id25string1 = secure.id25('ABC') // 'hvq3uu4bg7ycr4al3o2gnikli'
const id25string2 = secure.id25('ABC', 'XYZ') // 'ksjjd0yqlqyeyuobnhpacq68g'

// 计算sha1_hmac
const sha1_hmac1_string = secure.sha1_hmac('ABC', 'KEY') // '4f51dbf33fccb9ff142e56e8a25a3309fb73287e'

// 计算sha256_hmac
const sha256_hmac_string = secure.sha256_hmac('ABC', 'KEY') // 'd4c67d59bcf3dc0f474272f289989c31e55ef71d72572b472fa15a1d267bc1d0'

// base64 encode
const base64_encode_string = secure.base64_encode('Hello World') // 'SGVsbG8gV29ybGQ='

// base64 decode
const base64_decode_string = secure.base64_decode(base64_encode_string) // 'Hello World'

// aes 加密
const AES_KEY = secure.md5('KEY')
const aes_encode_string = secure.aes_encode('Hello World', AES_KEY) // 'p7e5ctcVdcDGkkhHLPOxPA=='

// aes 解密
const aes_decode_string = secure.aes_decode(aes_encode_string, AES_KEY) // 'Hello World'

// 通过brotli算法对字符串进行压缩(重复度较高的字符串压缩效果明显)，返回base64格式
const brotli_compress_string1 = secure.brotli_compress('ABC-ABC-ABC-ABC-ABC-ABC') // 'GxYA-KVbgoSGxBgBQDY'
const brotli_compress_string2 = secure.brotli_compress('ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC') // 'G0YA-KVbgoSGxBkBQNsA'

// 解压缩字符串的brotli加密
const brotli_decompress_string1 = secure.brotli_decompress(brotli_compress_string1) // 'ABC-ABC-ABC-ABC-ABC-ABC'
const brotli_decompress_string2 = secure.brotli_decompress(brotli_compress_string2) // 'ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC-ABC'

// session数据（一个普通对象）加密成一个简短的字符串
const session_encode_string1 = secure.session_encode({ id: 'A0001' }, 60 * 60 * 1000 /*1小时后过期*/) // 'iwuAZGlLbG1MMTYxNTYxOTMyOWlkPUEwMDAxAw'
const session_encode_string2 = secure.session_encode({ id: 'A0001' }, 1 /*1毫秒后过期*/) // 'iwuAZ0xhUG84MTYxNTUzMjkyOWlkPUEwMDAxAw'

// session字符串数据解密
const session_decode_data1 = secure.session_decode(session_encode_string1) // [Object] { id: 'A0001' }
const session_decode_data2 = secure.session_decode(session_encode_string2) // null 已经过期，无法得到数据
```
