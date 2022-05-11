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
    // 目录 options for markdown-it-toc
    // toc: require('markdown-it-toc'),
    config: (md) => {
      console.log(md)
      // 自定义外挂 use more markdown-it plugins
      // md.use(require('markdown-it-toc'));

      // 测试了一下 markdown-it-toc not work
    }
  }
});