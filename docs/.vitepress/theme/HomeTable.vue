<template>
  <div class="home-table-wrapper">
    <table class="home-table">
      <thead>
        <tr>
          <th>Sistema</th>
          <th style="text-align:center">Instalação Local</th>
          <th style="text-align:center">Instalação Cloud</th>
          <th style="text-align:center">PDF</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.name">
          <td>
            <a :href="withBase(p.primaryLink)">{{ p.name }}</a>
          </td>
          <td style="text-align:center">{{ p.hasLocal ? '✅' : '—' }}</td>
          <td style="text-align:center">{{ p.hasCloud ? '✅' : '—' }}</td>
          <td style="text-align:center">
            <button
              class="pdf-btn"
              :disabled="printing === p.name"
              :title="`Gerar PDF de ${p.name}`"
              @click="printDoc(p)"
            >
              <span v-if="printing === p.name" class="pdf-btn-loading">⏳</span>
              <span v-else>🖨️ PDF</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'

const { site } = useData()

interface Product {
  name: string
  primaryLink: string
  docPages: string[]
  hasLocal: boolean
  hasCloud: boolean
}

const products: Product[] = [
  {
    name: 'Desbravador 4.1 / 3.1 / 3.0 Smart',
    primaryLink: '/desbravador-41/local/requisitos-hardware',
    docPages: [
      '/desbravador-41/local/requisitos-hardware',
      '/desbravador-41/cloud/requisitos-cloud',
    ],
    hasLocal: true,
    hasCloud: true,
  },
  {
    name: 'POS Fast by Desbravador',
    primaryLink: '/desbravador-posfast/local/requisitos-hardware',
    docPages: ['/desbravador-posfast/local/requisitos-hardware'],
    hasLocal: true,
    hasCloud: false,
  },
  {
    name: 'Light Web Plus / 3.0 Web Plus',
    primaryLink: '/light-web-plus/local/requisitos-hardware',
    docPages: ['/light-web-plus/local/requisitos-hardware'],
    hasLocal: true,
    hasCloud: true,
  },
  {
    name: 'Gas Station / Liquor Store',
    primaryLink: '/gas-station/local/requisitos-hardware',
    docPages: ['/gas-station/local/requisitos-hardware'],
    hasLocal: true,
    hasCloud: false,
  },
  {
    name: 'Easy Web / Light Web / 3.0 Web',
    primaryLink: '/light-web/local/requisitos-hardware',
    docPages: ['/light-web/local/requisitos-hardware'],
    hasLocal: false,
    hasCloud: true,
  },
  {
    name: 'Desbravador Enterprise / 4.0',
    primaryLink: '/desbravador-enterprise/',
    docPages: [
      '/desbravador-enterprise/',
      '/desbravador-enterprise/local/requisitos-hardware',
      '/desbravador-enterprise/hibrido/requisitos-hardware',
      '/desbravador-enterprise/cloud/requisitos-hardware',
    ],
    hasLocal: true,
    hasCloud: true,
  },
]

const peripheralPages = [
  { title: 'Fechaduras e Tarifadores Homologados', path: '/perifericos/fechaduras-homologadas' },
  { title: 'Impressoras Homologadas', path: '/perifericos/impressoras-homologadas' },
  { title: 'Pinpads Homologados', path: '/perifericos/pinpads-homologados' },
  { title: 'Sistemas de TEF Homologados', path: '/perifericos/tef-homologados' },
  { title: 'Dispositivos iPDV e PDV Homologados', path: '/perifericos/dispositivos-ipdv-pdv' },
  { title: 'SAT / MFE Homologados', path: '/perifericos/sat-mfe-homologados' },
]

const printing = ref<string | null>(null)

function buildUrl(path: string): string {
  const base = (site.value.base || '/').replace(/\/$/, '')
  return `${window.location.origin}${base}${path}`
}

async function fetchPageContent(path: string): Promise<string | null> {
  try {
    const resp = await fetch(buildUrl(path))
    if (!resp.ok) return null
    const html = await resp.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const vpDoc = doc.querySelector('.vp-doc')
    if (!vpDoc) return null

    // Remove heading anchor links (#) that look bad in print
    vpDoc.querySelectorAll('.header-anchor').forEach((el) => el.remove())

    // Remove tabindex attributes (not needed for print)
    vpDoc.querySelectorAll('[tabindex]').forEach((el) => el.removeAttribute('tabindex'))

    // Remove any embedded scripts
    vpDoc.querySelectorAll('script').forEach((el) => el.remove())

    // Make relative hrefs absolute
    const origin = window.location.origin
    const base = (site.value.base || '/').replace(/\/$/, '')
    vpDoc.querySelectorAll('a[href]').forEach((el) => {
      const href = el.getAttribute('href')
      if (href && href.startsWith('/')) {
        el.setAttribute('href', `${origin}${href}`)
      }
    })
    vpDoc.querySelectorAll('img[src]').forEach((el) => {
      const src = el.getAttribute('src')
      if (src && src.startsWith('/')) {
        el.setAttribute('src', `${origin}${src}`)
      }
    })

    return vpDoc.innerHTML
  } catch {
    return null
  }
}

async function printDoc(product: Product) {
  printing.value = product.name

  try {
    const [docSections, peripheralSections] = await Promise.all([
      Promise.all(product.docPages.map((p) => fetchPageContent(p))),
      Promise.all(peripheralPages.map((p) => fetchPageContent(p.path))),
    ])

    let body = ''
    let isFirstSection = true

    docSections.forEach((content) => {
      if (content) {
        const cls = isFirstSection ? 'doc-section first-section' : 'doc-section'
        body += `<section class="${cls}">${content}</section>`
        isFirstSection = false
      }
    })

    const hasPeripherals = peripheralSections.some((s) => s !== null)
    if (hasPeripherals) {
      body += `<section class="doc-section appendix-divider">
        <div class="appendix-divider-inner">
          <p class="appendix-label">Anexo</p>
          <h1>Periféricos Homologados</h1>
          <p>Relação de periféricos homologados para uso com os sistemas Desbravador.</p>
        </div>
      </section>`
      peripheralSections.forEach((content) => {
        if (content) {
          body += `<section class="doc-section">${content}</section>`
        }
      })
    }

    const printWindow = window.open('', '_blank', 'width=900,height=700')
    if (!printWindow) {
      alert('Permita pop-ups neste site para gerar o PDF.')
      return
    }

    const dateStr = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })

    printWindow.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.name} — Documentação Técnica Desbravador</title>
  <style>
    @page {
      size: A4;
      margin: 2cm 2.5cm 2.5cm 2.5cm;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.65;
      color: #1c1c1c;
      background: #fff;
    }

    /* ── Capa ── */
    .cover {
      padding: 6rem 0 4rem;
      border-bottom: 4px solid #1a5fa8;
      margin-bottom: 0;
      break-after: page;
      page-break-after: always;
    }
    .cover-eyebrow {
      font-size: 8.5pt;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 2.5rem;
    }
    .cover-title {
      font-size: 26pt;
      font-weight: 700;
      color: #1a5fa8;
      line-height: 1.15;
      margin-bottom: 1rem;
    }
    .cover-subtitle {
      font-size: 11pt;
      color: #4b5563;
      margin-bottom: 0.4rem;
    }
    .cover-date {
      margin-top: 3rem;
      font-size: 8.5pt;
      color: #9ca3af;
    }

    /* ── Seções de conteúdo ── */
    .doc-section {
      break-before: page;
      page-break-before: always;
      padding-top: 0.5rem;
    }
    .first-section {
      break-before: auto;
      page-break-before: auto;
    }

    /* ── Divisor do Anexo ── */
    .appendix-divider {
      display: flex;
      align-items: center;
      min-height: 60mm;
    }
    .appendix-divider-inner {
      border-left: 5px solid #1a5fa8;
      padding: 1.5rem 2rem;
    }
    .appendix-label {
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #1a5fa8;
      margin-bottom: 0.5rem;
    }
    .appendix-divider-inner h1 {
      font-size: 20pt;
      color: #111827;
      border: none;
      padding: 0;
      margin: 0 0 0.5rem;
    }
    .appendix-divider-inner p {
      color: #6b7280;
      font-size: 10pt;
      margin: 0;
    }

    /* ── Tipografia ── */
    h1 {
      font-size: 16pt;
      font-weight: 700;
      color: #111827;
      margin: 1.6rem 0 0.6rem;
      padding-bottom: 0.4rem;
      border-bottom: 1.5px solid #e5e7eb;
      break-after: avoid;
      page-break-after: avoid;
    }
    h2 {
      font-size: 13pt;
      font-weight: 700;
      color: #1f2937;
      margin: 1.3rem 0 0.5rem;
      break-after: avoid;
      page-break-after: avoid;
    }
    h3 {
      font-size: 11pt;
      font-weight: 700;
      color: #374151;
      margin: 1rem 0 0.35rem;
      break-after: avoid;
      page-break-after: avoid;
    }
    h4 {
      font-size: 10.5pt;
      font-weight: 600;
      color: #4b5563;
      margin: 0.8rem 0 0.3rem;
      break-after: avoid;
      page-break-after: avoid;
    }

    p { margin: 0.5rem 0; }

    ul, ol { padding-left: 1.4rem; margin: 0.4rem 0; }
    li { margin: 0.2rem 0; }
    li > ul, li > ol { margin: 0.2rem 0; }

    strong { font-weight: 700; }
    em { font-style: italic; }

    hr {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 1.2rem 0;
    }

    /* ── Tabelas ── */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0.8rem 0 1rem;
      font-size: 9.5pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    thead { break-inside: avoid; page-break-inside: avoid; }
    th {
      background: #1a5fa8;
      color: #fff;
      padding: 0.45rem 0.65rem;
      text-align: left;
      font-weight: 600;
      font-size: 9pt;
      border: 1px solid #1a5fa8;
    }
    td {
      padding: 0.4rem 0.65rem;
      border: 1px solid #d1d5db;
      vertical-align: top;
      line-height: 1.5;
    }
    tr { break-inside: avoid; page-break-inside: avoid; }
    tr:nth-child(even) td { background: #f9fafb; }
    tr:hover td { background: inherit; }

    /* ── Código ── */
    code {
      font-family: 'SFMono-Regular', 'Cascadia Code', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 9pt;
      background: #f3f4f6;
      color: #1f2937;
      padding: 0.1em 0.35em;
      border-radius: 3px;
      border: 1px solid #e5e7eb;
    }
    pre {
      background: #f8f9fa;
      border: 1px solid #e5e7eb;
      border-radius: 5px;
      padding: 0.85rem 1rem;
      margin: 0.75rem 0;
      font-size: 9pt;
      white-space: pre-wrap;
      word-break: break-word;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    pre code {
      background: none;
      border: none;
      padding: 0;
      font-size: inherit;
    }

    /* ── Blockquotes (⚠️ / ℹ️) ── */
    blockquote {
      border-left: 4px solid #f59e0b;
      background: #fffbeb;
      padding: 0.6rem 1rem;
      margin: 0.75rem 0;
      border-radius: 0 4px 4px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    blockquote p { margin: 0; color: #78350f; }

    /* ── Custom blocks VitePress ── */
    .custom-block {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      margin: 0.75rem 0;
      border-left: 4px solid;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .custom-block-title {
      font-weight: 700;
      font-size: 9.5pt;
      margin-bottom: 0.3rem;
    }
    .custom-block.tip    { border-color: #10b981; background: #ecfdf5; }
    .custom-block.tip    .custom-block-title { color: #065f46; }
    .custom-block.info   { border-color: #3b82f6; background: #eff6ff; }
    .custom-block.info   .custom-block-title { color: #1e40af; }
    .custom-block.warning { border-color: #f59e0b; background: #fffbeb; }
    .custom-block.warning .custom-block-title { color: #92400e; }
    .custom-block.danger  { border-color: #ef4444; background: #fef2f2; }
    .custom-block.danger  .custom-block-title { color: #991b1b; }

    /* ── Links ── */
    a { color: #1a5fa8; text-decoration: none; }

    /* ── SVG / Mermaid ── */
    svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0.75rem auto;
    }
    .mermaid { text-align: center; }

    /* ── Ocultar no print: links de âncora, botão editar ── */
    @media print {
      .header-anchor { display: none; }
      a[href]::after { content: none !important; }
      .doc-section { break-before: page; page-break-before: always; }
      .first-section { break-before: auto; page-break-before: auto; }
      h1, h2, h3, h4 { break-after: avoid; page-break-after: avoid; }
      table, pre, blockquote, .custom-block {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="cover">
    <p class="cover-eyebrow">Desbravador Software Ltda. — Documentação Técnica</p>
    <h1 class="cover-title">${product.name}</h1>
    <p class="cover-subtitle">Requisitos de hardware, software e configuração</p>
    <p class="cover-subtitle">Inclui periféricos homologados como anexo</p>
    <p class="cover-date">Gerado em ${dateStr}</p>
  </div>
  ${body}
  <script>
    window.onload = function () {
      setTimeout(function () { window.print(); }, 500)
    }
  <\/script>
</body>
</html>`)
    printWindow.document.close()
  } finally {
    printing.value = null
  }
}
</script>

<style scoped>
.home-table-wrapper {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.home-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.home-table th,
.home-table td {
  padding: 0.65rem 1rem;
  border: 1px solid var(--vp-c-divider);
  vertical-align: middle;
}

.home-table th {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.home-table tr:hover td {
  background: var(--vp-c-bg-soft);
}

.pdf-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.pdf-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.pdf-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.pdf-btn-loading {
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
