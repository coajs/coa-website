const i18n = require('./locales.json')
const getSidebar = (lang) => {
  const locale = i18n[lang]
  const sidebar = {}
  sidebar[`/${lang}/guide/`] = [
    {
      text: locale.gettingStarted,
      items: [
        { text: locale.instantiate, link: `${lang}/guide/introduction` },
        { text: locale.start, link: `${lang}/guide/start` }
      ]
    },
    {
      text: locale.basicUsage,
      items: [
        { text: locale.env, link: `${lang}/guide/basic/env` },
        { text: locale.instantiate, link: `${lang}/guide/basic/instantiate` },
        { text: locale.route, link: `${lang}/guide/basic/route` },
        { text: locale.error, link: `${lang}/guide/basic/error` },
        { text: locale.db, link: `${lang}/guide/basic/db` },
        { text: locale.cache, link: `${lang}/guide/basic/cache` }
      ]
    },
    {
      text: locale.advancedDescription,
      items: [
        { text: locale.cacheModel, link: `${lang}/guide/advanced/cache-model` },
        {
          text: locale.modelDatabase,
          link: `${lang}/guide/advanced/model-database`
        }
      ]
    }
  ]
  sidebar[`/${lang}/component/`] = [
    {
      text: locale.coreComponent,
      items: [
        { text: 'coa-http', link: `${lang}/component/core/coa-http` },
        {
          text: 'coa-websocket',
          link: `${lang}/component/core/coa-websocket`
        },
        { text: 'coa-tcp', link: `${lang}/component/core/coa-tcp` }
      ]
    },
    {
      text: locale.expandComponent,
      items: [
        { text: 'coa-mysql', link: `${lang}/component/expand/coa-mysql` },
        { text: 'coa-redis', link: `${lang}/component/expand/coa-redis` }
      ]
    },
    {
      text: locale.externalComponent,
      items: [
        { text: 'coa-wx-isv', link: `${lang}/component/external/coa-wx-isv` },
        { text: 'coa-wx-pay', link: `${lang}/component/external/coa-wx-pay` },
        {
          text: 'coa-ali-pop',
          link: `${lang}/component/external/coa-ali-pop`
        }
      ]
    }
  ]
  return sidebar
}
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Coa.js'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Coa.js - A Lightweight Web Framework'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    repo: 'coajs',
    socialLinks: [{ icon: 'github', link: 'https://github.com/coajs/' }],
    locales: {
      '/zh-CN/': {
        lang: 'zh-CN',
        title: 'Coa.js',
        description: 'Coa.js - 轻量级的web框架.',
        nav: [
          {
            text: '指南',
            activeMatch: `^/zh-CN/guide`,
            link: '/zh-CN/guide/introduction'
          },
          {
            text: '组件',
            activeMatch: `^/zh-CN/component`,
            link: '/zh-CN/component/core/coa-http'
          },
          {
            text: '语言',
            items: [
              {
                items: [
                  { text: '简体中文', link: '/zh-CN/' },
                  { text: 'English', link: '/en-US/' }
                ]
              }
            ]
          }
        ],
        sidebar: getSidebar('zh-CN')
      },
      '/en-US/': {
        lang: 'en-US',
        title: 'Coa.js',
        description: 'Coa.js - A Lightweight Web Framework.',
        nav: [
          {
            text: 'Guide',
            activeMatch: `^/en-US/guide`,
            link: '/en-US/guide/introduction'
          },
          {
            text: 'Component',
            activeMatch: `^/en-US/component`,
            link: '/en-US/component/core/coa-http'
          },
          {
            text: 'Languages',
            items: [
              {
                items: [
                  { text: '简体中文', link: '/zh-CN/' },
                  { text: 'English', link: '/en-US/' }
                ]
              }
            ]
          }
        ],
        sidebar: getSidebar('en-US')
      }
    }
  }
}
