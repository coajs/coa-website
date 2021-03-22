module.exports = {
  title: 'COA',
  tagline: '一个简单、快速、轻量的Web服务框架，专为API而生',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  url: '//coajs.com', // Your website URL
  baseUrl: '/',
  projectName: 'coa-website',
  organizationName: 'coajs',

  themeConfig: {
    navbar: {
      title: 'COA',
      logo: {
        alt: 'Coa Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        // {to: 'plug', label: '插件', position: 'left'},
        {
          href: 'https://github.com/coajs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '组件',
          items: [
            {
              label: 'coa-http',
              href: 'https://github.com/coajs/coa-http',
            },
            {
              label: 'coa-env',
              href: 'https://github.com/coajs/coa-env',
            },
            {
              label: 'coa-mysql',
              href: 'https://github.com/coajs/coa-mysql',
            },
            {
              label: 'coa-redis',
              href: 'https://github.com/coajs/coa-redis',
            },
            {
              label: 'coa-helper',
              href: 'https://github.com/coajs/coa-helper',
            },
            {
              label: 'coa-secure',
              href: 'https://github.com/coajs/coa-secure',
            },
            {
              label: 'coa-error',
              href: 'https://github.com/coajs/coa-error',
            },
            {
              label: 'coa-ali-oss',
              href: 'https://github.com/coajs/coa-ali-oss',
            }
          ],
        },
        {
          title: '文档',
          items: [
            {
              label: 'Coa文档',
              to: 'docs/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/coajs',
            }
          ],
        },
        {
          title: '相关资源',
          items: [
            {
              label: 'knex',
              href: 'https://github.com/knex',
            },
            {
              label: 'swagger',
              href: 'https://swagger.io',
            },
            {
              label: 'lodash',
              href: 'https://lodash.com',
            }, {
              label: 'dayjs',
              href: 'https://day.js.org/',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} COA`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
