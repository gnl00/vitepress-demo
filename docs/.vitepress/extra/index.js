export const navbar =  [
  { text: 'Algorithm', link: '/posts/al/' },
  { text: 'Frontend', link: '/posts/fe/' },
  { text: 'Backend', link: '/posts/be/' },
  { text: 'Database', link: '/posts/db/' },
]

export const sidebar =  {
  '/guide': [
    {
      text: 'Introduction',
      link: '/guide/',
      children: [
        { text: 'AAA', link: '/guide/aaa' },
        { text: 'BBB', link: '/guide/bbb' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'DDD', link: '/guide/ddd' },
      ],
      sidebarDepth: 2
    },
    {
      text: 'Advance',
      children: [
        { text: 'AAA', link: '/guide/1' },
        { text: 'BBB', link: '/2' },
        { text: 'Configuration', link: '/guide/3' },
        { text: 'DDD', link: '/posts/4' },
      ]
    }
  ],
  '/posts/al': [],
  '/posts/fe': [],
  '/posts/be': [],
  '/posts/db': [],
}