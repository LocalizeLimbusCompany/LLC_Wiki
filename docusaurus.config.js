// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Localize Limbus Company",
  tagline: "都市零协会汉化组(LLC)",
  url: "https://www.zerossso.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LocalizeLimbusCompany", // Usually your GitHub org/user name.
  projectName: "LLC_Wiki", // Usually your repo name.
  trailingSlash: false,
  
  customFields: {
      USE_SSH: true,
      GIT_PASS: process.env.GIT_PASS,
      GIT_USER: "ZengXiaoPi",
      CURRENT_BRANCH: "main"
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
/*
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "novel",
        path: "novel",
        routeBasePath: "novel",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ]
  ],
*/
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "都市零协会汉化组, 边狱公司, 汉化补丁, LLC, 零协会",
        },
      ],
      headTags: [
        {
          tagName: "link",
          attributes: {
            rel: "自动安装",
            href: "https://www.zeroasso.top/docs/install/autoinstall",
          },
        },
        // Declare some json-ld structured data
        {
          tagName: "link",
          attributes: {
            rel: "手动安装",
            href: "https://www.zeroasso.top/docs/install/install",
          },
        },
        {
          tagName: "script",
          attributes: {
            type: "application/ld+json",
          },
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "都市零协会汉化组官网",
            url: "https://www.zeroasso.top",
            logo: "https://www.zeroasso.top/img/logo.png",
          }),
        },
      ],
      navbar: {
        title: "Localize Limbus Company",
        logo: {
          alt: "Localize EveryThing.",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "main",
            position: "left",
            label: "主页",
          },

//          { to: "/novel/mainpage", label: "小说", position: "left" },
          { to: "/blog", label: "博客", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "页面",
            items: [
              {
                label: "主页",
                to: "/docs/main",
              },
              {
                label: "联系我们",
                to: "/docs/contact",
              }
            ],
          },
          {
            title: "社交帐号",
            items: [
              {
                label: "BiliBili主页",
                to: "https://space.bilibili.com/1247764479",
              },
            ],
          },
          {
            title: "别的东西",
            items: [
              {
                label: "博客",
                to: "/blog",
              },
/*
              {
                label: "小说",
                to: "/novel/mainpage",
              },
*/
            ],
          },
        ],
        copyright: `都市零协会汉化组 Localize Limbus Company | 本网站使用 Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
