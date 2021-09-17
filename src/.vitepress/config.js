// @ts-check

const nav = [
  {
    text: '指南',
    activeMatch: `^/guide`,
    link: '/guide/introduction'
  },
  {
    text: '组件',
    activeMatch: `^/component`,
    link: '/component/core/coa-http'
  }
]

const sidebar = {
  '/guide/': [
    {
      text: '入门',
      items: [
        { text: '简介', link: '/guide/introduction' },
        { text: '快速开始', link: '/guide/start' }
      ]
    },
    {
      text: '基础用法',
      items: [
        { text: '环境配置', link: '/guide/basic/env' },
        { text: '实例化', link: '/guide/basic/instantiate' },
        { text: '路由及文档', link: '/guide/basic/route' },
        { text: '错误配置', link: '/guide/basic/error' },
        { text: '数据库连接', link: '/guide/basic/db' },
        { text: '缓存', link: '/guide/basic/cache' }
      ]
    },
    {
      text: '进阶介绍',
      items: [
        { text: '缓存数据模型', link: '/guide/advanced/cache-model' },
        { text: '数据库关联', link: '/guide/advanced/model-database' }
      ]
    }
  ],
  '/component/': [
    {
      text: '核心组件',
      items: [
        { text: 'coa-http', link: '/component/core/coa-http' },
        { text: 'coa-websocket', link: '/component/core/coa-websocket' },
        { text: 'coa-tcp', link: '/component/core/coa-tcp' }
      ]
    },
    {
      text: '扩展组件',
      items: [
        { text: 'coa-mysql', link: '/component/expand/coa-mysql' },
        { text: 'coa-redis', link: '/component/expand/coa-redis' }
      ]
    },
    {
      text: '第三方库',
      items: [
        { text: 'coa-wx-isv', link: '/component/external/coa-wx-isv' },
        { text: 'coa-wx-pay', link: '/component/external/coa-wx-pay' },
        { text: 'coa-ali-pop', link: '/component/external/coa-ali-pop' }
      ]
    }
  ]
}
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  // @ts-ignore
  extends: require('@vue/theme/config'),
  vite: {
    server: {
      host: true
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  lang: 'en-US',
  title: 'Coa.js',
  description: 'Coa.js - A Lightweight Web Framework',

  head: [],

  themeConfig: {
    logo: '/logo.png',
    repo: 'coajs',
    socialLinks: [{ icon: 'github', link: 'https://github.com/coajs/' }],
    nav,
    sidebar
  }
}
