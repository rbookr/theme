import ejs_plugin from '../../src/markdown-plugin/ejs'
//import anchor from 'markdown-it-anchor'


export default {

  lang: 'zh-CN',
  title: 'Rbook',
  description: 'Rbook -- online book of algorithm',
  appearance: true,

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,

    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    //anchor: {
      //permalink: anchor.permalink.headerLink()
    //},

    // options for markdown-it-toc-done-right
    toc: { level: [1, 2,3] },
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
        collapsible: true,
        collapsed: true,
        items:[
          { text: 'link1', link: '/link1' },
          { text: 'link2', link: '/link2' }
        ]
      }
    ]
  }
}
