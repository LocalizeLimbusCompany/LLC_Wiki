// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Localize Limbus Company',
  tagline: '都市零协会汉化组 Localize Everything',
  url: 'https://zxp123.eu.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZengXiaoPi', // Usually your GitHub org/user name.
  projectName: 'zero-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Localize Limbus Company',
        logo: {
          alt: 'Localize EveryThing.',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'left',
            label: '主页',
          },
          {to: '/blog', label: '博客', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '页面',
            items: [
              {
                label: '主页',
                to: '/docs/main',
              },
            ],
          },
          {
            title: '联系我们',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/1247764479',
              },
            ],
          },
          {
            title: '别的东西',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `版权所有 © 2023 Localize Limbus Company . 本网站使用 Docusaurus 构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
