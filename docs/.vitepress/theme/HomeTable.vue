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

    // Make relative links absolute so they appear correctly in the print window
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

    docSections.forEach((content) => {
      if (content) {
        body += `<section class="doc-section">${content}</section>`
      }
    })

    const hasPeripherals = peripheralSections.some((s) => s !== null)
    if (hasPeripherals) {
      body += `<section class="doc-section appendix-cover">
        <h1>Anexo — Periféricos Homologados</h1>
        <p>Relação de periféricos homologados para uso com os sistemas Desbravador.</p>
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

    printWindow.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.name} — Documentação Técnica Desbravador</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #1a1a1a;
      background: #fff;
    }

    .cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      padding: 4rem 3rem;
      border-bottom: 3px solid #1e6ec8;
      page-break-after: always;
    }
    .cover-logo { font-size: 0.9rem; color: #666; margin-bottom: 3rem; text-transform: uppercase; letter-spacing: 0.05em; }
    .cover h1 { font-size: 2.4rem; color: #1e6ec8; line-height: 1.2; margin-bottom: 1rem; }
    .cover p { font-size: 1rem; color: #555; }
    .cover-date { margin-top: 4rem; font-size: 0.85rem; color: #999; }

    .doc-section {
      padding: 2rem 3rem;
      page-break-before: always;
    }
    .doc-section:first-of-type { page-break-before: avoid; }

    .appendix-cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 40vh;
      border-top: 2px solid #e5e7eb;
      border-bottom: 2px solid #e5e7eb;
    }
    .appendix-cover h1 { font-size: 2rem; color: #333; margin-bottom: 0.75rem; }
    .appendix-cover p { color: #666; }

    h1 { font-size: 1.8rem; color: #1a1a1a; margin: 1.5rem 0 0.75rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.5rem; }
    h2 { font-size: 1.4rem; color: #1a1a1a; margin: 1.25rem 0 0.5rem; }
    h3 { font-size: 1.15rem; color: #333; margin: 1rem 0 0.4rem; }
    h4 { font-size: 1rem; color: #444; margin: 0.75rem 0 0.3rem; }

    p { margin: 0.6rem 0; }
    ul, ol { padding-left: 1.5rem; margin: 0.5rem 0; }
    li { margin: 0.25rem 0; }

    table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 11pt; }
    th { background: #1e6ec8; color: #fff; padding: 0.5rem 0.75rem; text-align: left; }
    td { padding: 0.45rem 0.75rem; border: 1px solid #d1d5db; vertical-align: top; }
    tr:nth-child(even) td { background: #f9fafb; }

    code {
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 10pt;
      background: #f3f4f6;
      padding: 0.15em 0.4em;
      border-radius: 3px;
    }
    pre {
      background: #f3f4f6;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      margin: 0.75rem 0;
      font-size: 10pt;
    }
    pre code { background: none; padding: 0; }

    blockquote {
      border-left: 4px solid #f59e0b;
      padding: 0.5rem 1rem;
      margin: 0.75rem 0;
      color: #555;
      background: #fffbeb;
    }
    blockquote p { margin: 0; }

    a { color: #1e6ec8; text-decoration: none; }

    .custom-block {
      padding: 0.75rem 1rem;
      border-radius: 4px;
      margin: 0.75rem 0;
      border-left: 4px solid;
    }
    .custom-block.warning { border-color: #f59e0b; background: #fffbeb; }
    .custom-block.info, .custom-block.tip { border-color: #3b82f6; background: #eff6ff; }
    .custom-block.danger { border-color: #ef4444; background: #fef2f2; }

    @media print {
      body { font-size: 11pt; }
      .cover { page-break-after: always; }
      .doc-section { page-break-before: always; }
      .doc-section:first-of-type { page-break-before: avoid; }
      a::after { content: none; }
    }
  </style>
</head>
<body>
  <div class="cover">
    <div class="cover-logo">Desbravador Software Ltda. — Documentação Técnica</div>
    <h1>${product.name}</h1>
    <p>Requisitos de hardware, software e configuração.</p>
    <p>Inclui periféricos homologados como anexo.</p>
    <div class="cover-date">Gerado em ${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
  </div>
  ${body}
  <script>
    window.onload = function () {
      setTimeout(function () { window.print(); }, 400)
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
