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
                { text: 'Fechaduras', link: `/versoes/${d}/_shared/fechaduras-homologadas` },
                { text: 'Impressoras', link: `/versoes/${d}/_shared/impressoras-homologadas` },
                { text: 'Pinpads', link: `/versoes/${d}/_shared/pinpads-homologados` },
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
    title: 'Desbravador — Documentação Técnica',
    description: 'Requisitos de hardware, software e configuração dos sistemas Desbravador',
    lang: 'pt-BR',

    themeConfig: {
      logo: '/logo.png',
      siteTitle: false,

      nav: [
        { text: 'Início', link: '/' },
        {
          text: '⚡ Versão Atual',
          items: [
            { text: '⚡ Atual (Mai/2026)', link: '/desbravador-41/local/requisitos-hardware' },
            { text: '─────────────', link: '/versoes/' },
            { text: '📁 Versões Anteriores', link: '/versoes/' },
            ...versions,
          ],
        },
      ],

      sidebar: {
        '/desbravador-41/': [
          {
            text: 'Desbravador 4.1 / 3.1 / 3.0 Smart',
            items: [
              {
                text: 'Instalação Local',
                items: [
                  { text: 'Requisitos de Hardware', link: '/desbravador-41/local/requisitos-hardware' },
                ],
              },
              {
                text: 'Instalação Cloud',
                items: [
                  { text: 'Requisitos Cloud (AutoSky)', link: '/desbravador-41/cloud/requisitos-cloud' },
                ],
              },
            ],
          },
          {
            text: 'Periféricos Homologados',
            items: [
              { text: 'Fechaduras', link: '/_shared/fechaduras-homologadas' },
              { text: 'Impressoras', link: '/_shared/impressoras-homologadas' },
              { text: 'Pinpads', link: '/_shared/pinpads-homologados' },
            ],
          },
        ],
        '/_shared/': [
          {
            text: 'Periféricos Homologados',
            items: [
              { text: 'Fechaduras', link: '/_shared/fechaduras-homologadas' },
              { text: 'Impressoras', link: '/_shared/impressoras-homologadas' },
              { text: 'Pinpads', link: '/_shared/pinpads-homologados' },
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
    },

    mermaid: {
      theme: 'default',
    },
  })
)
