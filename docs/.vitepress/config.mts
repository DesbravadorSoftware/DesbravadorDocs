import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import fs from 'fs'
import path from 'path'

const versoesDir = path.resolve(__dirname, '../versoes')

function getVersions(): { text: string; link: string }[] {
  if (!fs.existsSync(versoesDir)) return []

  const monthNames: Record<string, string> = {
    '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr',
    '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago',
    '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez',
  }

  return fs
    .readdirSync(versoesDir)
    .filter((d) => /^\d{4}-\d{2}$/.test(d))
    .sort()
    .reverse()
    .map((d) => {
      const [year, month] = d.split('-')
      return { text: `${monthNames[month]}/${year}`, link: `/versoes/${d}/` }
    })
}

const versions = getVersions()

function versionedSidebar() {
  if (!fs.existsSync(versoesDir)) return {}

  const result: Record<string, any[]> = {}

  fs.readdirSync(versoesDir)
    .filter((d) => /^\d{4}-\d{2}$/.test(d))
    .forEach((d) => {
      const [year, month] = d.split('-')
      const monthNames: Record<string, string> = {
        '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr',
        '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago',
        '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez',
      }
      const label = `${monthNames[month]}/${year}`

      result[`/versoes/${d}/`] = [
        {
          text: `Versão ${label}`,
          items: [
            { text: 'Índice da versão', link: `/versoes/${d}/` },
            {
              text: 'Desbravador 4.1 / 3.1 / 3.0 Smart',
              items: [
                { text: 'Requisitos de Hardware', link: `/versoes/${d}/desbravador-41/local/requisitos-hardware` },
                { text: 'Requisitos Cloud (AutoSky)', link: `/versoes/${d}/desbravador-41/cloud/requisitos-cloud` },
              ],
            },
            {
              text: 'Periféricos Homologados',
              items: [
                { text: 'Fechaduras', link: `/versoes/${d}/perifericos/fechaduras-homologadas` },
                { text: 'Impressoras', link: `/versoes/${d}/perifericos/impressoras-homologadas` },
                { text: 'Pinpads', link: `/versoes/${d}/perifericos/pinpads-homologados` },
              ],
            },
          ],
        },
      ]
    })

  return result
}

export default withMermaid(
  defineConfig({
    base: '/DesbravadorDocs/',
    title: 'Desbravador Docs',
    description: 'Documentação técnica dos sistemas Desbravador',
    lang: 'pt-BR',

    themeConfig: {
      logo: '/logo.png',
      siteTitle: 'Desbravador Docs',

      nav: [],

      sidebar: {
        '/exemplo-relatorio': [
          { text: 'Exemplo de Relatório', link: '/exemplo-relatorio' },
        ],
        '/desbravador-41/': [
          {
            text: 'Instalação Local',
            items: [
              { text: 'Requisitos de Hardware', link: '/desbravador-41/local/requisitos-hardware' },
            ],
          },
          {
            text: 'Cloud — AutoSky',
            items: [
              { text: 'Requisitos cloud', link: '/desbravador-41/cloud/requisitos-cloud' },
            ],
          },
        ],
        '/desbravador-posfast/': [
          {
            text: 'Instalação Local',
            items: [
              { text: 'Requisitos de Hardware', link: '/desbravador-posfast/local/requisitos-hardware' },
            ],
          },
        ],
        '/light-web/': [
          {
            text: 'SaaS / Online',
            items: [
              { text: 'Requisitos de hardware', link: '/light-web/local/requisitos-hardware' },
            ],
          },
        ],
        '/light-web-plus/': [
          {
            text: 'Instalação Local',
            items: [
              { text: 'Requisitos de hardware', link: '/light-web-plus/local/requisitos-hardware' },
            ],
          },
        ],
        '/gas-station/': [
          {
            text: 'Instalação Local',
            items: [
              { text: 'Requisitos de hardware', link: '/gas-station/local/requisitos-hardware' },
            ],
          },
        ],
        '/desbravador-enterprise/': [
          {
            text: 'Desbravador Enterprise / 4.0',
            items: [
              { text: 'Modalidades de implantação', link: '/desbravador-enterprise/' },
              {
                text: 'On-Premise — Local Total',
                items: [
                  { text: 'Requisitos de hardware', link: '/desbravador-enterprise/local/requisitos-hardware' },
                ],
              },
              {
                text: 'Híbrido — App local + BD nuvem',
                items: [
                  { text: 'Requisitos de hardware', link: '/desbravador-enterprise/hibrido/requisitos-hardware' },
                ],
              },
              {
                text: 'Cloud — AutoSky',
                items: [
                  { text: 'Requisitos de hardware', link: '/desbravador-enterprise/cloud/requisitos-hardware' },
                ],
              },
            ],
          },
          {
            text: 'Infraestrutura e Segurança',
            items: [
              { text: 'Portas e Firewall', link: '/infraestrutura/portas-e-firewall' },
            ],
          },
        ],
        '/perifericos/': [
          {
            text: 'Periféricos homologados',
            items: [
              { text: 'Fechaduras', link: '/perifericos/fechaduras-homologadas' },
              { text: 'Impressoras', link: '/perifericos/impressoras-homologadas' },
              { text: 'Pinpads', link: '/perifericos/pinpads-homologados' },
              { text: 'Sistemas de TEF', link: '/perifericos/tef-homologados' },
              { text: 'Dispositivos iPDV e PDV', link: '/perifericos/dispositivos-ipdv-pdv' },
            ],
          },
        ],
        '/infraestrutura/': [
          {
            text: 'Infraestrutura',
            items: [
              { text: 'Portas e Firewall', link: '/infraestrutura/portas-e-firewall' },
            ],
          },
        ],
        '/versoes/': [
          {
            text: 'Versões Anteriores',
            items: [
              { text: 'Índice de versões', link: '/versoes/' },
              ...versions,
            ],
          },
        ],
        ...versionedSidebar(),
      },

      search: { provider: 'local' },

      editLink: {
        pattern: 'https://github.com/desbravador/docs/edit/main/docs/:path',
        text: 'Editar esta página',
      },

      lastUpdated: { text: 'Atualizado em' },

      footer: {
        message: 'Desbravador Software Ltda.',
        copyright: 'www.desbravador.com.br',
      },

      docFooter: {
        prev: 'Anterior',
        next: 'Próximo',
      },

      outline: {
        label: 'Nesta página',
        level: [2, 3],
      },
    },

    mermaid: {
      theme: 'default',
    },
  })
)
