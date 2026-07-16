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
import { buildReportCSS } from './print/styles'

const { site } = useData()

interface Product {
  name: string
  primaryLink: string
  docPages: Array<{ path: string; label: string }>
  hasLocal: boolean
  hasCloud: boolean
}

const products: Product[] = [
  {
    name: 'Desbravador 4.1 / 3.1 / 3.0 Smart',
    primaryLink: '/desbravador-41/local/requisitos-hardware',
    docPages: [
      { path: '/desbravador-41/local/requisitos-hardware', label: 'Instalação Local' },
      { path: '/desbravador-41/cloud/requisitos-cloud',    label: 'Cloud — AutoSky'  },
    ],
    hasLocal: true,
    hasCloud: true,
  },
  {
    name: 'POS Fast by Desbravador',
    primaryLink: '/desbravador-posfast/local/requisitos-hardware',
    docPages: [
      { path: '/desbravador-posfast/local/requisitos-hardware', label: 'Instalação Local' },
    ],
    hasLocal: true,
    hasCloud: false,
  },
  {
    name: 'Light Web Plus / 3.0 Web Plus',
    primaryLink: '/light-web-plus/local/requisitos-hardware',
    docPages: [
      { path: '/light-web-plus/local/requisitos-hardware', label: 'Instalação Local' },
    ],
    hasLocal: true,
    hasCloud: true,
  },
  {
    name: 'Gas Station / Liquor Store',
    primaryLink: '/gas-station/local/requisitos-hardware',
    docPages: [
      { path: '/gas-station/local/requisitos-hardware', label: 'Instalação Local' },
    ],
    hasLocal: true,
    hasCloud: false,
  },
  {
    name: 'Easy Web / Light Web / 3.0 Web',
    primaryLink: '/light-web/local/requisitos-hardware',
    docPages: [
      { path: '/light-web/local/requisitos-hardware', label: 'Requisitos' },
    ],
    hasLocal: false,
    hasCloud: true,
  },
  {
    name: 'Desbravador Enterprise / 4.0',
    primaryLink: '/desbravador-enterprise/',
    docPages: [
      { path: '/desbravador-enterprise/',                          label: 'Visão Geral'            },
      { path: '/desbravador-enterprise/local/requisitos-hardware', label: 'On-Premise'             },
      { path: '/desbravador-enterprise/hibrido/requisitos-hardware', label: 'Híbrido'             },
      { path: '/desbravador-enterprise/cloud/requisitos-hardware', label: 'Cloud — AutoSky'       },
    ],
    hasLocal: true,
    hasCloud: true,
  },
]

const peripheralPages = [
  { path: '/perifericos/fechaduras-homologadas',  label: 'Fechaduras e Tarifadores Homologados' },
  { path: '/perifericos/impressoras-homologadas', label: 'Impressoras Homologadas'              },
  { path: '/perifericos/pinpads-homologados',     label: 'Pinpads Homologados'                 },
  { path: '/perifericos/tef-homologados',         label: 'Sistemas de TEF Homologados'         },
  { path: '/perifericos/dispositivos-ipdv-pdv',   label: 'Dispositivos iPDV e PDV Homologados' },
  { path: '/perifericos/sat-mfe-homologados',     label: 'SAT / MFE Homologados'               },
  { path: '/perifericos/kds-desbravador',         label: 'Desbravador KDS'                     },
]

const printing = ref<string | null>(null)

// ── Fetch ─────────────────────────────────────────────────────────────

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

    // Limpar elementos que não fazem sentido no PDF
    vpDoc.querySelectorAll('.header-anchor, [tabindex], script').forEach((el) => {
      if (el.tagName === 'A' && el.classList.contains('header-anchor')) el.remove()
      else if (el.tagName === 'SCRIPT') el.remove()
      else el.removeAttribute('tabindex')
    })

    // Tornar links e imagens absolutos
    const origin = window.location.origin
    vpDoc.querySelectorAll('a[href]').forEach((el) => {
      const href = el.getAttribute('href')
      if (href?.startsWith('/')) el.setAttribute('href', `${origin}${href}`)
    })
    vpDoc.querySelectorAll('img[src]').forEach((el) => {
      const src = el.getAttribute('src')
      if (src?.startsWith('/')) el.setAttribute('src', `${origin}${src}`)
    })

    return vpDoc.innerHTML
  } catch {
    return null
  }
}

// ── Construção do HTML profissional ───────────────────────────────────

function buildHeaderHTML(product: Product, logoUrl: string | null, dateStr: string): string {
  const logoEl = logoUrl
    ? `<img class="pr-hdr-logo" src="${logoUrl}" alt="Desbravador" /><div class="pr-hdr-sep"></div>`
    : ''
  return `
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${logoEl}
    <span class="pr-hdr-title">${product.name}</span>
    <span class="pr-hdr-period">Documentação Técnica</span>
  </div>
  <div class="pr-hdr-right">Desbravador Software Ltda.<br>${dateStr}</div>
</header>`
}

function buildFooterHTML(): string {
  return `
<footer class="pr-page-footer">
  <span class="pr-ftr-company">Desbravador Software Ltda.</span>
  <span class="pr-ftr-confidential">Uso Técnico</span>
  <span class="pr-ftr-page"></span>
</footer>`
}

function buildCoverHTML(product: Product, logoUrl: string | null, dateStr: string): string {
  const logoEl = logoUrl
    ? `<img class="pr-cover-logo" src="${logoUrl}" alt="Desbravador" />`
    : `<span class="pr-cover-logo-name">Desbravador</span>`

  return `
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${logoEl}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">Documentação Técnica</div>
    <h1 class="pr-cover-title">${product.name}</h1>
    <p class="pr-cover-subtitle">Requisitos de hardware, software e configuração.<br>
    Inclui periféricos homologados como anexo.</p>
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Modalidades</span>
        <span class="pr-cover-meta-value">${
          product.docPages.map((p) => p.label).join(' · ')
        }</span>
      </div>
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Data de Geração</span>
        <span class="pr-cover-meta-value">${dateStr}</span>
      </div>
      <div class="pr-cover-meta-item">
        <span class="pr-cover-meta-label">Empresa</span>
        <span class="pr-cover-meta-value">Desbravador Software Ltda.</span>
      </div>
    </div>
    <div class="pr-cover-notes">
      Este documento é gerado automaticamente a partir da documentação técnica oficial.
      Para a versão mais atualizada, acesse docs.desbravador.com.br.
    </div>
  </div>
</div>`
}

function buildAppendixDividerHTML(): string {
  return `
<div class="pr-section pr-page-break appendix-divider-wrap">
  <div class="appendix-divider-box">
    <p class="pr-section-eyebrow">Anexo</p>
    <h2 class="pr-section-title" style="font-size:20pt;margin:0 0 3mm;">Periféricos Homologados</h2>
    <p style="font-size:9pt;color:#6b7280;margin:0;">
      Relação de periféricos homologados para uso com os sistemas Desbravador.
    </p>
  </div>
</div>`
}

function buildSectionHTML(label: string, content: string, isFirst: boolean): string {
  const breakClass = isFirst ? '' : 'pr-page-break'
  return `
<div class="pr-section doc-section ${breakClass}">
  ${label ? `<div class="pr-section-hdr"><span class="pr-section-eyebrow">Documentação</span><h2 class="pr-section-title">${label}</h2></div>` : ''}
  <div class="pr-section-body doc-content">${content}</div>
</div>`
}

// CSS extra para o conteúdo .vp-doc dentro do layout profissional
const DOC_CONTENT_CSS = `
/* ── Conteúdo extraído do .vp-doc ── */

.doc-content h1 {
  font-size: 16pt; font-weight: 700; color: #0b2545;
  margin: 0 0 5mm; padding-bottom: 3mm;
  border-bottom: 1.5px solid #e2e8f0;
  break-after: avoid; page-break-after: avoid;
}
.doc-content h2 {
  font-size: 12pt; font-weight: 700; color: #1f2937;
  margin: 6mm 0 3mm; break-after: avoid; page-break-after: avoid;
}
.doc-content h3 {
  font-size: 10pt; font-weight: 700; color: #374151;
  margin: 4mm 0 2mm; break-after: avoid; page-break-after: avoid;
}
.doc-content h4 {
  font-size: 9.5pt; font-weight: 600; color: #4b5563;
  margin: 3mm 0 1.5mm; break-after: avoid; page-break-after: avoid;
}

.doc-content p  { margin: 0 0 2.5mm; font-size: 9pt; line-height: 1.65; }
.doc-content ul, .doc-content ol { padding-left: 5mm; margin: 0 0 3mm; }
.doc-content li { margin-bottom: 1.2mm; font-size: 9pt; }
.doc-content strong { font-weight: 700; }
.doc-content em     { font-style: italic; }

.doc-content hr {
  border: none; border-top: 1px solid #e2e8f0; margin: 4mm 0;
}

/* Tabelas nativas do VitePress */
.doc-content table {
  width: 100%; border-collapse: collapse;
  margin: 3mm 0 5mm; font-size: 8.5pt;
  break-inside: auto; page-break-inside: auto;
}
.doc-content table thead { display: table-header-group; }
.doc-content table thead th {
  background: #0b2545; color: #fff;
  font-weight: 600; font-size: 7.5pt;
  text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3mm 4mm; text-align: left; border: none;
}
.doc-content table tbody tr { break-inside: avoid; page-break-inside: avoid; }
.doc-content table tbody tr:nth-child(even) td { background: #f8fafc; }
.doc-content table tbody td {
  padding: 2.5mm 4mm; border-bottom: 1px solid #eef2f7;
  color: #1f2937; vertical-align: middle; line-height: 1.4;
}

/* Código */
.doc-content code {
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 8.5pt; background: #f3f4f6; color: #1f2937;
  padding: 0.1em 0.35em; border-radius: 3px;
  border: 1px solid #e5e7eb;
}
.doc-content pre {
  background: #f8f9fa; border: 1px solid #e5e7eb;
  border-radius: 4px; padding: 3mm 4mm; margin: 3mm 0;
  font-size: 8.5pt; white-space: pre-wrap; word-break: break-word;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content pre code {
  background: none; border: none; padding: 0;
}

/* Blockquotes (⚠️ / ℹ️) */
.doc-content blockquote {
  border-left: 4px solid #f59e0b; background: #fffbeb;
  padding: 3mm 4mm; margin: 3mm 0;
  border-radius: 0 4px 4px 0;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content blockquote p { margin: 0; color: #78350f; }

/* Custom blocks VitePress */
.doc-content .custom-block {
  padding: 3mm 4mm; border-radius: 4px;
  margin: 3mm 0; border-left: 4px solid;
  break-inside: avoid; page-break-inside: avoid;
}
.doc-content .custom-block-title {
  font-weight: 700; font-size: 8.5pt; margin-bottom: 1.5mm;
}
.doc-content .custom-block.tip    { border-color: #10b981; background: #ecfdf5; }
.doc-content .custom-block.tip    .custom-block-title { color: #065f46; }
.doc-content .custom-block.info   { border-color: #3b82f6; background: #eff6ff; }
.doc-content .custom-block.info   .custom-block-title { color: #1e40af; }
.doc-content .custom-block.warning { border-color: #f59e0b; background: #fffbeb; }
.doc-content .custom-block.warning .custom-block-title { color: #92400e; }
.doc-content .custom-block.danger  { border-color: #ef4444; background: #fef2f2; }
.doc-content .custom-block.danger  .custom-block-title { color: #991b1b; }

/* SVG / Mermaid */
.doc-content svg { max-width: 100%; height: auto; display: block; margin: 3mm auto; }

/* Divisor do Anexo */
.appendix-divider-wrap {
  display: flex; align-items: center; min-height: 40mm;
}
.appendix-divider-box {
  border-left: 5px solid #1a5fa8; padding: 4mm 6mm;
}
`

// ── Print ─────────────────────────────────────────────────────────────

async function printDoc(product: Product) {
  printing.value = product.name
  try {
    const [docSections, peripheralSections] = await Promise.all([
      Promise.all(product.docPages.map((p) => fetchPageContent(p.path))),
      Promise.all(peripheralPages.map((p) => fetchPageContent(p.path))),
    ])

    // Cabeçalho e rodapé
    const logoUrl = (() => {
      const themeLogo = (site.value.themeConfig as any)?.logo
      if (!themeLogo) return null
      const base = (site.value.base || '/').replace(/\/$/, '')
      return typeof themeLogo === 'string' ? `${window.location.origin}${base}${themeLogo}` : null
    })()

    const dateStr = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit', month: 'long', year: 'numeric',
    })
    const dateTimeStr = new Date().toLocaleString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    // Seções da documentação
    let bodyHTML = ''
    let isFirst = true
    docSections.forEach((content, i) => {
      if (!content) return
      bodyHTML += buildSectionHTML(product.docPages[i].label, content, isFirst)
      isFirst = false
    })

    // Anexo de periféricos
    const hasPeripherals = peripheralSections.some(Boolean)
    if (hasPeripherals) {
      bodyHTML += buildAppendixDividerHTML()
      peripheralSections.forEach((content, i) => {
        if (!content) return
        bodyHTML += buildSectionHTML(peripheralPages[i].label, content, false)
      })
    }

    const win = window.open('', '_blank', 'width=960,height=720')
    if (!win) { alert('Permita pop-ups neste site para gerar o PDF.'); return }

    const css = buildReportCSS('portrait', 'A4') + DOC_CONTENT_CSS

    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${product.name} — Documentação Técnica Desbravador</title>
  <style>${css}</style>
</head>
<body>
  ${buildHeaderHTML(product, logoUrl, dateTimeStr)}
  ${buildFooterHTML()}
  ${buildCoverHTML(product, logoUrl, dateStr)}
  <div class="pr-body">
    ${bodyHTML}
  </div>
  <script>
    window.addEventListener('load', function () {
      setTimeout(function () { window.print() }, 600)
    })
  <\/script>
</body>
</html>`)
    win.document.close()
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
