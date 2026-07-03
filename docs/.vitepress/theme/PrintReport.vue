<template>
  <div class="pr-root">

    <!-- Barra de controles (nunca aparece na impressão) -->
    <div class="pr-controls no-print">
      <slot name="controls">
        <button class="pr-btn-print" @click="handlePrint" :disabled="isPrinting">
          <svg v-if="!isPrinting" width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          <span v-if="isPrinting" class="pr-spinner" />
          {{ isPrinting ? 'Preparando...' : 'Imprimir / Salvar PDF' }}
        </button>
      </slot>
    </div>

    <!-- Conteúdo (renderizado na tela, capturado pelo print) -->
    <div ref="contentRef" class="pr-screen-content">
      <slot />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { buildReportCSS } from './print/styles'

// ── Props ──────────────────────────────────────────────────────────────
const props = withDefaults(
  defineProps<{
    /** Título do relatório */
    title: string
    /** Subtítulo */
    subtitle?: string
    /** Tipo / categoria do relatório (label acima do título) */
    reportLabel?: string
    /** URL do logo da empresa */
    logo?: string
    /** Nome da empresa */
    company?: string
    /** Nome do usuário responsável */
    printedBy?: string
    /** Período analisado */
    period?: string
    /** Texto de rodapé */
    footerText?: string
    /** Texto de confidencialidade no rodapé central */
    confidential?: string
    /** Exibir capa completa em página própria */
    showCover?: boolean
    /** Observações na capa */
    coverNotes?: string
    /** Orientação do papel */
    orientation?: 'portrait' | 'landscape'
    /** Tamanho do papel */
    paperSize?: 'A4' | 'A3' | 'letter'
    /** Nome da aplicação no cabeçalho/rodapé */
    appName?: string
  }>(),
  {
    orientation: 'portrait',
    paperSize: 'A4',
    showCover: false,
    appName: 'Desbravador Docs',
  }
)

const { site } = useData()
const contentRef = ref<HTMLElement | null>(null)
const isPrinting = ref(false)

// Congela a data no momento da montagem
const now = new Date()
const formattedDateTime = now.toLocaleString('pt-BR', {
  day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit',
})
const formattedDate = now.toLocaleDateString('pt-BR', {
  day: '2-digit', month: 'long', year: 'numeric',
})

function resolveLogoUrl(): string | null {
  if (props.logo) return props.logo
  const themeLogo = (site.value.themeConfig as any)?.logo
  if (!themeLogo) return null
  const base = (site.value.base || '/').replace(/\/$/, '')
  return typeof themeLogo === 'string' ? `${base}${themeLogo}` : null
}

// ── Captura do conteúdo ───────────────────────────────────────────────

function cloneAndCleanContent(source: HTMLElement): HTMLElement {
  const clone = source.cloneNode(true) as HTMLElement

  // Converter canvas → img (gráficos, ex. Chart.js)
  source.querySelectorAll('canvas').forEach((originalCanvas, i) => {
    const clonedCanvas = clone.querySelectorAll('canvas')[i]
    if (!clonedCanvas) return
    try {
      const img = document.createElement('img')
      img.src = originalCanvas.toDataURL('image/png', 1.0)
      img.style.maxWidth = '100%'
      img.style.height = 'auto'
      clonedCanvas.parentNode?.replaceChild(img, clonedCanvas)
    } catch { /* cross-origin: mantém canvas */ }
  })

  // Tornar imagens absolutas
  const base = (site.value.base || '/').replace(/\/$/, '')
  clone.querySelectorAll('img[src]').forEach((el) => {
    const src = el.getAttribute('src')
    if (src && src.startsWith('/')) {
      el.setAttribute('src', `${window.location.origin}${src}`)
    }
  })

  // Remover elementos interativos que não fazem sentido no PDF
  const interactiveSelectors = [
    'button', 'input', 'select', 'textarea',
    '.no-print', '[data-no-print]',
    '.VPBadge', '.header-anchor',
  ]
  clone.querySelectorAll(interactiveSelectors.join(',')).forEach((el) => el.remove())

  // Remover atributos Vue de scoped styles (data-v-xxxx)
  clone.querySelectorAll('*').forEach((el) => {
    Array.from(el.attributes).forEach((attr) => {
      if (attr.name.startsWith('data-v-')) el.removeAttribute(attr.name)
    })
  })

  return clone
}

// ── Construção do HTML da capa ────────────────────────────────────────

function buildCoverHTML(logoUrl: string | null): string {
  if (!props.showCover) return ''

  const logoImg = logoUrl
    ? `<img class="pr-cover-logo" src="${logoUrl}" alt="${props.company ?? props.appName}" />`
    : `<span class="pr-cover-logo-name">${props.company ?? props.appName ?? ''}</span>`

  const metaItems = [
    props.period    ? `<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Período</span><span class="pr-cover-meta-value">${props.period}</span></div>` : '',
    props.printedBy ? `<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Responsável</span><span class="pr-cover-meta-value">${props.printedBy}</span></div>` : '',
    `<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Data de Geração</span><span class="pr-cover-meta-value">${formattedDate}</span></div>`,
    props.company   ? `<div class="pr-cover-meta-item"><span class="pr-cover-meta-label">Empresa</span><span class="pr-cover-meta-value">${props.company}</span></div>` : '',
  ].filter(Boolean).join('')

  const notesBlock = props.coverNotes
    ? `<div class="pr-cover-notes">${props.coverNotes}</div>`
    : ''

  return `
<div class="pr-cover">
  <div class="pr-cover-top">
    <div class="pr-cover-logo-wrap">${logoImg}</div>
  </div>
  <div class="pr-cover-body">
    <div class="pr-cover-label">${props.reportLabel ?? 'Relatório'}</div>
    <h1 class="pr-cover-title">${props.title}</h1>
    ${props.subtitle ? `<p class="pr-cover-subtitle">${props.subtitle}</p>` : ''}
    <div class="pr-cover-accent-bar"></div>
    <div class="pr-cover-meta">${metaItems}</div>
    ${notesBlock}
  </div>
</div>`
}

// ── Construção do cabeçalho e rodapé ─────────────────────────────────

function buildHeaderHTML(logoUrl: string | null): string {
  const logoEl = logoUrl
    ? `<img class="pr-hdr-logo" src="${logoUrl}" alt="" /><div class="pr-hdr-sep"></div>`
    : ''
  const periodEl = props.period
    ? `<span class="pr-hdr-period">| ${props.period}</span>`
    : ''

  return `
<header class="pr-page-header">
  <div class="pr-hdr-left">
    ${logoEl}
    <span class="pr-hdr-title">${props.title}</span>
    ${periodEl}
  </div>
  <div class="pr-hdr-right">
    ${props.appName ?? ''}<br>${formattedDateTime}
  </div>
</header>`
}

function buildFooterHTML(): string {
  return `
<footer class="pr-page-footer">
  <span class="pr-ftr-company">${props.footerText ?? props.company ?? props.appName ?? ''}</span>
  <span class="pr-ftr-confidential">${props.confidential ?? ''}</span>
  <span class="pr-ftr-page"></span>
</footer>`
}

// ── Print ─────────────────────────────────────────────────────────────

async function handlePrint() {
  if (!contentRef.value || isPrinting.value) return
  isPrinting.value = true

  await new Promise((r) => setTimeout(r, 50)) // aguarda re-render

  try {
    const logoUrl = resolveLogoUrl()
    const cleanedContent = cloneAndCleanContent(contentRef.value)

    const coverHTML  = buildCoverHTML(logoUrl)
    const headerHTML = buildHeaderHTML(logoUrl)
    const footerHTML = buildFooterHTML()
    const css        = buildReportCSS(props.orientation, props.paperSize)

    const win = window.open('', '_blank', 'width=960,height=720')
    if (!win) { alert('Permita pop-ups neste site para gerar o PDF.'); return }

    win.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${props.title} — ${props.appName ?? 'Relatório'}</title>
  <style>${css}</style>
</head>
<body>
  ${headerHTML}
  ${footerHTML}
  ${coverHTML}
  <div class="pr-body">
    ${cleanedContent.innerHTML}
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
    isPrinting.value = false
  }
}
</script>

<style scoped>
.pr-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.pr-btn-print {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  background: #0b2545;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  letter-spacing: 0.01em;
}

.pr-btn-print:hover:not(:disabled) {
  background: #1a5fa8;
  transform: translateY(-1px);
}

.pr-btn-print:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.pr-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
