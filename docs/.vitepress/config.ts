import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'YI UI',
  titleTemplate: ':title - headlessui.dev',
  description: '一个用于在 Vue 中构建高质量、可访问的 Headless UI的组件库',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '文档', link: '/markdown-examples' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: 'https://github.com/jeddygong/yi-ui/releases',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '介绍', link: '/markdown-examples' },
          { text: '快速开始', link: '/api-examples' },
          { text: '无障碍', link: '/api-examples' },
          { text: '发布', link: '/api-examples' },
        ],
      },
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '贡献指南', link: '/api-examples' },
          { text: '参考指南', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jeddygong/yi-ui' },
    ],
  },
})
