import ejs_plugin from '../../src/markdown-plugin/ejs'

export default {

  lang: 'zh-CN',
  title: 'Rbook',
  description: 'Rbook -- online book of algorithm',
  appearance: true,

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    config: (md) => {
      md.use(ejs_plugin)
    }
  },


  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    sidebar: [
      {
        text:'Guide',
        items:[
          { text: 'link1', link: '/link1' },
          { text: 'link2', link: '/link2' }
        ]
      }
    ]
  }
}
