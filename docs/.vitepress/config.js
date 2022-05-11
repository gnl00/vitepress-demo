import { defineConfig } from 'vitepress'
import { navbar, sidebar } from './extra'

export default defineConfig ({
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: './img/logo.jpeg' }]
  ],
  // base: '/blog/',
  title: 'Gnl',
  description: 'Gnl\'s blog, power by vitepress.', //  This will render as a <meta> tag in the page HTML.
  lastUpdated: true,

  themeConfig: {
    logo: './img/logo.jpeg',
    lastUpdated: 'Last Updated',

    // 顶部导航
    nav: navbar,
    // 导航栏
    sidebar: sidebar,
  },
  markdown: {
    // VitePress uses markdown-it as the Markdown renderer

    lineNumbers: true,
    // options for markdown-it-table-of-contents
    // npm i markdown-it-table-of-contents
    // toc: { includeLevel: [1, 2] },
    config: (md) => {
      console.log(md)
      // 自定义外挂 use more markdown-it plugins
      // md.use(require("markdown-it-table-of-contents"));
    }
  }
});