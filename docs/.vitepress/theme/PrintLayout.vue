<template>
  <div class="pl-root">

    <!-- ── Controles (apenas na tela, nunca imprime) ── -->
    <div v-if="showPrintButton" class="pl-controls no-print" aria-hidden="true">
      <slot name="controls">
        <button class="pl-print-btn" @click="handlePrint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Imprimir / Salvar PDF
        </button>
      </slot>
    </div>

    <!-- ── Documento imprimível ── -->
    <div
      class="pl-document"
      :class="[`pl-paper-${paperSize.toLowerCase()}`, `pl-orient-${orientation}`]"
    >

      <!-- Cabeçalho fixo (repete em todas as páginas via position:fixed no print) -->
      <header class="pl-page-header">
        <slot name="header">
          <div class="pl-header-inner">
            <div class="pl-header-left">
              <img v-if="resolvedLogo" :src="resolvedLogo" class="pl-header-logo" :alt="appName" />
              <span v-else class="pl-header-logo-text">{{ appName }}</span>
            </div>
            <div class="pl-header-right">{{ appName }}</div>
          </div>
          <div class="pl-header-rule" />
        </slot>
      </header>

      <!-- Corpo principal (tem padding para não sobrepor header/footer fixos) -->
      <div class="pl-body">

        <!-- Bloco de título e metadados -->
        <div class="pl-title-block">
          <h1 class="pl-title">{{ title }}</h1>
          <p v-if="subtitle" class="pl-subtitle">{{ subtitle }}</p>

          <dl v-if="hasMeta" class="pl-meta">
            <template v-if="showDateTime">
              <dt>Data:</dt>
              <dd>{{ formattedDate }}</dd>
            </template>
            <template v-if="printedBy">
              <dt>Usuário:</dt>
              <dd>{{ printedBy }}</dd>
            </template>
            <template v-for="f in filters" :key="f.label">
              <dt>{{ f.label }}:</dt>
              <dd>{{ f.value }}</dd>
            </template>
            <slot name="meta" />
          </dl>
        </div>

        <hr class="pl-divider" />

        <!-- Conteúdo do usuário -->
        <main class="pl-content">
          <slot />
        </main>
      </div>

      <!-- Rodapé fixo (repete em todas as páginas via position:fixed no print) -->
      <footer class="pl-page-footer">
        <slot name="footer">
          <div class="pl-footer-inner">
            <span class="pl-footer-app">{{ resolvedFooter }}</span>
            <span class="pl-footer-page">
              <!-- Página X de Y via CSS counters (Chrome/Edge) -->
            </span>
            <span class="pl-footer-date">Gerado em {{ formattedDate }}</span>
          </div>
          <div class="pl-footer-rule" />
        </slot>
      </footer>

    </div><!-- /pl-document -->
  </div><!-- /pl-root -->
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

export interface PrintFilter {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    /** Título principal do documento */
    title: string
    /** Subtítulo opcional */
    subtitle?: string
    /** URL do logo (padrão: logo do site VitePress) */
    logo?: string
    /** Nome de quem gerou o documento */
    printedBy?: string
    /** Texto customizado no rodapé esquerdo */
    footerText?: string
    /** portrait (padrão) ou landscape */
    orientation?: 'portrait' | 'landscape'
    /** Tamanho do papel (padrão: A4) */
    paperSize?: 'A4' | 'A3' | 'letter'
    /** Lista de filtros / parâmetros usados */
    filters?: PrintFilter[]
    /** Exibir data e hora (padrão: true) */
    showDateTime?: boolean
    /** Nome da aplicação exibido no cabeçalho e rodapé */
    appName?: string
    /** Exibir botão de impressão (padrão: true) */
    showPrintButton?: boolean
  }>(),
  {
    orientation: 'portrait',
    paperSize: 'A4',
    showDateTime: true,
    appName: 'Desbravador Docs',
    showPrintButton: true,
    filters: () => [],
  }
)

const { site } = useData()

// Congela a data no momento em que o componente é montado
const now = new Date()
const formattedDate = now.toLocaleString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
})

const resolvedLogo = computed<string | null>(() => {
  if (props.logo) return props.logo
  const themeLogo = (site.value.themeConfig as any)?.logo
  if (!themeLogo) return null
  const base = (site.value.base || '/').replace(/\/$/, '')
  return typeof themeLogo === 'string' ? `${base}${themeLogo}` : null
})

const resolvedFooter = computed(() => props.footerText || props.appName)

const hasMeta = computed(
  () => props.showDateTime || !!props.printedBy || (props.filters?.length ?? 0) > 0
)

// ── Estilos globais de impressão ────────────────────────────────────────────
// Injetados via JS para que o @page e as regras de ocultação de UI
// do VitePress sejam removidos quando o componente é desmontado.

function buildPrintCSS(orientation: string, paperSize: string): string {
  return `
/* PrintLayout — estilos globais de impressão */

@page {
  size: ${paperSize} ${orientation};
  margin: 20mm 22mm 24mm 22mm;
}

/* Página inicial: margem superior menor (cabeçalho cobre) */
@page :first {
  margin-top: 20mm;
}

/* Numeração de página no rodapé (Chromium) */
@page {
  @bottom-center {
    content: "Página " counter(page) " de " counter(pages);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 8pt;
    color: #6b7280;
  }
}

@media print {
  /* ── Ocultar chrome do VitePress ── */
  .VPNav,
  .VPLocalNav,
  .VPSidebar,
  .VPDocAside,
  .VPDocFooter,
  .VPFooter,
  .VPBadge,
  .no-print,
  .pl-controls {
    display: none !important;
  }

  /* ── Expandir área de conteúdo ── */
  html, body { background: #fff !important; }

  .VPContent,
  .VPDoc,
  .VPDoc > .container,
  .VPDoc .content,
  .VPDoc .content-container {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* ── Cabeçalho fixo em todas as páginas ── */
  .pl-page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    padding: 8mm 22mm 3mm;
    box-sizing: border-box;
  }

  /* ── Rodapé fixo em todas as páginas ── */
  .pl-page-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #fff;
    padding: 3mm 22mm 6mm;
    box-sizing: border-box;
  }

  /* ── Espaçamento do corpo para não sobrepor header/footer ── */
  .pl-body {
    margin-top: 28mm !important;
    margin-bottom: 20mm !important;
  }

  /* ── Tipografia base ── */
  .pl-document {
    font-size: 12px !important;
    line-height: 1.6 !important;
    color: #111827 !important;
  }

  /* ── Preservar cores de fundo em tabelas ── */
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* ── Tabelas ── */
  table { break-inside: auto; }
  thead { display: table-header-group; } /* repete cabeçalho em cada página */
  tfoot { display: table-footer-group; }
  tr    { break-inside: avoid; page-break-inside: avoid; }

  /* ── Não quebrar cards e blocos importantes ── */
  .print-card,
  .pl-title-block,
  blockquote,
  pre,
  figure,
  .custom-block {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* ── Headings nunca ficam órfãos ── */
  h1, h2, h3, h4, h5, h6 {
    break-after: avoid;
    page-break-after: avoid;
  }

  /* ── Forçar quebra de página ── */
  .print-page-break {
    break-before: page;
    page-break-before: always;
  }
}
`
}

let styleEl: HTMLStyleElement | null = null

onMounted(() => {
  styleEl = document.createElement('style')
  styleEl.id = 'pl-global-print-styles'
  styleEl.textContent = buildPrintCSS(props.orientation, props.paperSize)
  document.head.appendChild(styleEl)
})

onUnmounted(() => {
  styleEl?.remove()
  styleEl = null
})

function handlePrint() {
  window.print()
}
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════
   Estilos de TELA — pré-visualização do documento imprimível
   ═══════════════════════════════════════════════════════════ */

/* Botão de impressão */
.pl-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.25rem;
}

.pl-print-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: #1a5fa8;
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.pl-print-btn:hover { background: #174e8f; }
.pl-print-btn svg { flex-shrink: 0; }

/* Moldura do documento na tela */
.pl-document {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  line-height: 1.65;
  color: #111827;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

/* ── Cabeçalho ── */
.pl-page-header {
  padding: 1.25rem 2rem 0.75rem;
}
.pl-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.pl-header-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
}
.pl-header-logo-text {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a5fa8;
  letter-spacing: 0.03em;
}
.pl-header-right {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}
.pl-header-rule {
  height: 2px;
  background: linear-gradient(to right, #1a5fa8, #93c5fd);
  margin-top: 0.75rem;
  border-radius: 1px;
}

/* ── Corpo ── */
.pl-body {
  padding: 1.75rem 2rem 1.5rem;
}

/* ── Título e metadados ── */
.pl-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
  margin: 0 0 0.35rem;
  border: none;
  padding: 0;
}
.pl-subtitle {
  font-size: 1rem;
  color: #4b5563;
  margin: 0 0 1rem;
}
.pl-meta {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.2rem 0.75rem;
  font-size: 0.875rem;
  margin-top: 0.85rem;
  color: #374151;
}
.pl-meta dt {
  font-weight: 600;
  color: #6b7280;
  white-space: nowrap;
}
.pl-meta dd { margin: 0; }

.pl-divider {
  border: none;
  border-top: 1.5px solid #e5e7eb;
  margin: 1.25rem 0;
}

/* ── Conteúdo principal ── */
.pl-content { min-height: 4rem; }

/* ── Rodapé ── */
.pl-page-footer {
  padding: 0.75rem 2rem 1.25rem;
}
.pl-footer-rule {
  height: 1.5px;
  background: #e5e7eb;
  margin-bottom: 0.6rem;
  border-radius: 1px;
}
.pl-footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: #9ca3af;
}
.pl-footer-page {
  font-weight: 500;
  color: #6b7280;
}
.pl-footer-app { font-weight: 600; }

/* ── Variantes de tamanho de papel (simulação na tela) ── */
.pl-paper-a4  { max-width: 794px;  margin: 0 auto; }
.pl-paper-a3  { max-width: 1123px; margin: 0 auto; }
.pl-paper-letter { max-width: 816px; margin: 0 auto; }
</style>

<style>
/* ═══════════════════════════════════════════════════════════════════════
   Classes utilitárias — disponíveis globalmente para uso no conteúdo
   ═══════════════════════════════════════════════════════════════════════ */

/* Card que nunca quebra entre páginas */
.print-card {
  break-inside: avoid;
  page-break-inside: avoid;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  background: #fff;
}

/* Grid de cards (2 colunas) */
.print-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

/* Forçar quebra de página antes do elemento */
.print-page-break {
  break-before: page;
  page-break-before: always;
}

/* Ocultar na impressão */
.no-print { }

/* Tabela com estilo padrão de impressão */
.print-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9.5pt;
  margin: 0.75rem 0;
}
.print-table thead th {
  background: #1a5fa8 !important;
  color: #fff !important;
  padding: 0.45rem 0.7rem;
  text-align: left;
  font-weight: 600;
  font-size: 9pt;
  border: 1px solid #1a5fa8;
}
.print-table tbody td {
  padding: 0.38rem 0.7rem;
  border: 1px solid #d1d5db;
  vertical-align: top;
}
.print-table tbody tr:nth-child(even) td {
  background: #f9fafb !important;
}
/* Alinhamentos semânticos */
.print-table .col-currency { text-align: right; font-variant-numeric: tabular-nums; }
.print-table .col-date     { text-align: center; }
.print-table .col-center   { text-align: center; }
</style>
