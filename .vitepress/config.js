import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Desbravador Docs',
  description: 'Documentação técnica dos sistemas Desbravador',
  lang: 'pt-BR',

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Desbravador Docs',

    nav: [
      { text: '4.1 / 3.1 / 3.0 Smart', link: '/desbravador-41/local/requisitos-hardware' },
      { text: 'Light 3', link: '/' },
      { text: 'Light Easy', link: '/' },
      { text: 'Gas Station', link: '/' },
      { text: 'Periféricos', link: '/_shared/fechaduras-homologadas' },
    ],

    sidebar: {
      '/desbravador-41/': [
        {
          text: 'Instalação Local',
          items: [
            { text: 'Requisitos de hardware', link: '/desbravador-41/local/requisitos-hardware' },
          ]
        },
        {
          text: 'Cloud — AutoSky',
          items: [
            { text: 'Requisitos cloud', link: '/desbravador-41/cloud/requisitos-cloud' },
          ]
        },
      ],
      '/_shared/': [
        {
          text: 'Periféricos homologados',
          items: [
            { text: 'Fechaduras', link: '/_shared/fechaduras-homologadas' },
            { text: 'Impressoras', link: '/_shared/impressoras-homologadas' },
            { text: 'Pinpads', link: '/_shared/pinpads-homologados' },
          ]
        }
      ]
    },

    search: { provider: 'local' },

    editLink: {
      pattern: 'https://github.com/desbravador/docs/edit/main/docs/:path',
      text: 'Editar esta página'
    },

    lastUpdated: { text: 'Atualizado em' },

    footer: {
      message: 'Desbravador Software Ltda.',
      copyright: 'www.desbravador.com.br'
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    outline: {
      label: 'Nesta página',
      level: [2, 3]
    },
  }
})
