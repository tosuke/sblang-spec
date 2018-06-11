module.exports = {
  title: 'SmileBasic Spec',
  description: 'SmileBasicの言語仕様',
  serviceWorker: true,
  themeConfig: {
    repo: 'Tosuke/sblang-spec',
    docsDir: 'docs',
    editLinkText: 'GitHub上でこのページを編集する',
    sidebar: [
      {
        title: '文字・語句',
        children: [
          '/lexical/characters',
          '/lexical/tokens'
        ]
      }
    ]
  }
}