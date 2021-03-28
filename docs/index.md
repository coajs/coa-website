---
title: 简介
toc: menu
order: 1
---

## 什么是 COA

一个简单、快速、轻量的 HTTP 服务框架，专为 API 而生，是 COA 核心 HTTP 库

## 特性

- **API 而生** 专为 API 开发使用
- **轻量极简** 不到 10K、不依赖第三方库、不过度封装
- **灵活** 支持微服务、Serverless 模式、Context 可自由扩展
- **文档友好** 自动生成接口文档、自动生成前端接口代码
- **TypeScript** 全部使用 TypeScript 书写，类型约束、IDE 友好
- **Deno** 支持在 Deno 下运行（todo，计划 6 月份完成）

## 参考

- 受 [koa](https://www.npmjs.com/package/koa) 启发，完善 Context 生成机制
- 受 [koa-router](https://www.npmjs.com/package/koa-router) 启发，完善路由生成机制
- 受 [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser) 启发，完善请求体处理机制
- 受 [egg](https://eggjs.org/zh-cn) 启发，完善 Context 扩展机制
- 以 [swagger-ui](https://swagger.io/tools/swagger-ui) 为基础，完成接口文档的自动生成

## 迭代

- 第一版 [coajs](https://www.npmjs.com/package/coajs) ，于 2019 年发布的第一个版本，本身属于第三方类库的整合。从多个线上项目中抽离出来，以方便部署更新为目的作为单独的库。随着不断迭代，添加的东西越来越多，coajs 越来越臃肿，已经不适合轻量级小项目使用。迭代 114 个版本后停止维护

- 第二版 [coa-serve](https://www.npmjs.com/package/coa-serve) ，针对第一版出现的臃肿问题，基于`coajs`实现方式将其化整为零，分别将基础组件和核心组件抽离为单独的库，并将其**开源**，同时优化了文档生成机制、路由检索、系统环境配置等机制。目前已经稳定，线上所有的 coajs 项目均已经迁移到 coa-serve 来

- 第三版 `coa-http`，也就是目前的版本。随着不断迭代，接口对外提供服务的方式已经不限于`http`了，将`tcp`、`websocket`等服务直接整合到`coa-serve`中并不优雅。此外，~~随着笔者的认知进步，~~`koa`全家桶也并不是最优的选择。故计划将`coa-serve`拆解，分别重构为 `coa-http`、`coa-tcp`、`coa-ws`等。本版本正是重构的`coa-http`，目前仍在初步阶段，实际项目仅部分后台管理相关模块接口从`coa-serve`迁移过来

## 核心组件

|                       Project                       |                Description                 |
| :-------------------------------------------------: | :----------------------------------------: |
|    [coa-http](https://github.com/coajs/coa-http)    |                核心 HTTP 库                |
|     [coa-env](https://github.com/coajs/coa-env)     |   框架环境配置包装器，配合 coa-http 使用   |
|   [coa-error](https://github.com/coajs/coa-error)   |               框架基础错误类               |
|  [coa-helper](https://github.com/coajs/coa-helper)  | 基础工具库，包含常用方法及必要的第三方类库 |
|  [coa-secure](https://github.com/coajs/coa-secure)  |     常用安全算法库，配合 coa-http 使用     |
|   [coa-mysql](https://github.com/coajs/coa-mysql)   |             Mysql 数据库连接库             |
|   [coa-redis](https://github.com/coajs/coa-redis)   |              Redis 缓存连接库              |
| [coa-ali-oss](https://github.com/coajs/coa-ali-oss) |    轻量极简的阿里云 OSS 库 for Node.js     |
