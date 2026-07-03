export function buildReportCSS(
  orientation: 'portrait' | 'landscape' = 'portrait',
  paperSize: 'A4' | 'A3' | 'letter' = 'A4',
): string {
  return `
/* ================================================================
   PRINT REPORT — Professional Corporate PDF
   Renderizado em janela própria. Não herda estilos do navegador.
   ================================================================ */

@page {
  size: ${paperSize} ${orientation};
  margin: 0;
}

@page :first {
  margin: 0;
}

/* Numeração de página via Chromium margin boxes */
@page {
  @bottom-right-corner {
    content: "";
  }
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --navy:    #0b2545;
  --blue:    #1a5fa8;
  --blue-lt: #e8f0fb;
  --text:    #111827;
  --sub:     #4b5563;
  --muted:   #9ca3af;
  --border:  #e2e8f0;
  --row-alt: #f8fafc;
  --row-tot: #e8f0fb;
  --green:   #059669;
  --red:     #dc2626;
  --amber:   #d97706;
}

html {
  background: #fff;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
               'Helvetica Neue', Arial, sans-serif;
  font-size: 9pt;
  line-height: 1.6;
  color: var(--text);
  background: #fff;
  /* Espaço para header fixo (16mm) + footer fixo (12mm) */
  padding: 22mm 20mm 18mm;
}

/* ── Cabeçalho fixo (repete em todas as páginas) ─────────────── */
.pr-page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 16mm;
  padding: 4mm 20mm 0;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pr-page-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20mm;
  right: 20mm;
  height: 1.5px;
  background: linear-gradient(to right, var(--navy), var(--blue), transparent);
}

.pr-hdr-left {
  display: flex;
  align-items: center;
  gap: 4mm;
}

.pr-hdr-logo {
  height: 18px;
  width: auto;
  object-fit: contain;
  object-position: left center;
}

.pr-hdr-sep {
  width: 1px;
  height: 10px;
  background: var(--border);
}

.pr-hdr-title {
  font-size: 8pt;
  font-weight: 700;
  color: var(--navy);
  max-width: 90mm;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pr-hdr-period {
  font-size: 7pt;
  color: var(--muted);
  margin-left: 3mm;
}

.pr-hdr-right {
  text-align: right;
  font-size: 7pt;
  color: var(--muted);
  line-height: 1.4;
}

/* ── Rodapé fixo ─────────────────────────────────────────────── */
.pr-page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12mm;
  padding: 0 20mm;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pr-page-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20mm;
  right: 20mm;
  height: 1px;
  background: var(--border);
}

.pr-ftr-company {
  font-size: 7pt;
  color: var(--muted);
  font-weight: 500;
}

.pr-ftr-confidential {
  font-size: 6.5pt;
  color: #d1d5db;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pr-ftr-page {
  font-size: 7pt;
  color: var(--muted);
  text-align: right;
  counter-increment: page;
}

.pr-ftr-page::after {
  content: "Página " counter(page);
}

/* ══════════════════════════════════════════════════════════════
   CAPA
   ══════════════════════════════════════════════════════════════ */
.pr-cover {
  position: relative;
  width: 100%;
  min-height: calc(297mm - 40mm); /* descontando padding do body */
  display: flex;
  flex-direction: column;
  page-break-after: always;
  break-after: page;
  overflow: hidden;
  margin: -22mm -20mm 0; /* neutraliza padding do body só na capa */
  width: calc(100% + 40mm);
  padding: 0;
}

/* Barra lateral esquerda */
.pr-cover::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6mm;
  background: var(--navy);
}

/* Acento direito */
.pr-cover::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2.5mm;
  background: var(--blue);
}

.pr-cover-top {
  background: var(--navy);
  padding: 14mm 18mm 10mm 14mm;
  display: flex;
  align-items: flex-start;
  gap: 6mm;
}

.pr-cover-logo-wrap {
  flex-shrink: 0;
}

.pr-cover-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.pr-cover-logo-name {
  font-size: 11pt;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin-left: 2mm;
}

.pr-cover-body {
  flex: 1;
  padding: 20mm 18mm 18mm 14mm;
  display: flex;
  flex-direction: column;
}

.pr-cover-label {
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 5mm;
}

.pr-cover-title {
  font-size: 28pt;
  font-weight: 800;
  color: var(--navy);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 4mm;
}

.pr-cover-subtitle {
  font-size: 12pt;
  font-weight: 400;
  color: var(--sub);
  line-height: 1.45;
  margin-bottom: 10mm;
  max-width: 140mm;
}

.pr-cover-accent-bar {
  width: 16mm;
  height: 3px;
  background: var(--blue);
  margin-bottom: 12mm;
  border-radius: 2px;
}

.pr-cover-meta {
  margin-top: auto;
  border-top: 1px solid var(--border);
  padding-top: 8mm;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm 12mm;
}

.pr-cover-meta-item {}

.pr-cover-meta-label {
  display: block;
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-bottom: 1mm;
}

.pr-cover-meta-value {
  font-size: 9pt;
  font-weight: 600;
  color: var(--text);
}

.pr-cover-notes {
  margin-top: 8mm;
  padding: 4mm 5mm;
  background: #f8fafc;
  border-left: 3px solid var(--blue);
  border-radius: 0 3px 3px 0;
  font-size: 8pt;
  color: var(--sub);
  line-height: 1.55;
}

/* ══════════════════════════════════════════════════════════════
   SEÇÕES
   ══════════════════════════════════════════════════════════════ */
.pr-section {
  margin-bottom: 10mm;
}

.pr-section + .pr-section {
  padding-top: 2mm;
}

.pr-section-hdr {
  display: flex;
  align-items: baseline;
  gap: 4mm;
  margin-bottom: 5mm;
  padding-bottom: 2.5mm;
  border-bottom: 1.5px solid var(--border);
}

.pr-section-eyebrow {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--blue);
  white-space: nowrap;
}

.pr-section-title {
  font-size: 13pt;
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
}

.pr-section-desc {
  font-size: 8pt;
  color: var(--muted);
  margin-top: 1.5mm;
  line-height: 1.5;
}

/* Forçar quebra de página antes de uma seção */
.pr-section.pr-page-break {
  break-before: page;
  page-break-before: always;
}

/* ══════════════════════════════════════════════════════════════
   RESUMO EXECUTIVO
   ══════════════════════════════════════════════════════════════ */
.pr-summary {
  break-inside: avoid;
  page-break-inside: avoid;
  background: linear-gradient(135deg, #f0f5ff 0%, var(--blue-lt) 100%);
  border: 1px solid #c7d9f5;
  border-left: 4px solid var(--blue);
  border-radius: 0 5px 5px 0;
  padding: 6mm 7mm;
  margin-bottom: 6mm;
}

.pr-summary-label {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--blue);
  margin-bottom: 3mm;
}

.pr-summary-body {
  font-size: 9.5pt;
  color: var(--text);
  line-height: 1.7;
}

.pr-summary-body p + p { margin-top: 2mm; }

/* ══════════════════════════════════════════════════════════════
   KPI CARDS
   ══════════════════════════════════════════════════════════════ */
.pr-kpi-grid {
  display: grid;
  gap: 4mm;
  margin-bottom: 6mm;
}

.pr-kpi-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-kpi-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pr-kpi-grid[data-cols="4"] { grid-template-columns: repeat(4, 1fr); }

.pr-kpi-card {
  break-inside: avoid;
  page-break-inside: avoid;
  position: relative;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 5mm 5mm 4mm;
  background: #fff;
  overflow: hidden;
}

/* Topo colorido */
.pr-kpi-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2.5px;
  background: var(--blue);
}

.pr-kpi-card[data-trend="up"]::before    { background: var(--green); }
.pr-kpi-card[data-trend="down"]::before  { background: var(--red); }
.pr-kpi-card[data-trend="warn"]::before  { background: var(--amber); }

/* Fundo sutil */
.pr-kpi-card::after {
  content: '';
  position: absolute;
  bottom: 0; right: 0;
  width: 20mm;
  height: 20mm;
  background: radial-gradient(circle at bottom right, rgba(26,95,168,0.04) 0%, transparent 70%);
}

.pr-kpi-label {
  font-size: 6.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--muted);
  margin-bottom: 2.5mm;
}

.pr-kpi-value {
  font-size: 20pt;
  font-weight: 800;
  color: var(--navy);
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  margin-bottom: 2.5mm;
}

.pr-kpi-change {
  display: inline-flex;
  align-items: center;
  gap: 1mm;
  font-size: 8pt;
  font-weight: 600;
  color: var(--muted);
}

.pr-kpi-change[data-dir="up"]   { color: var(--green); }
.pr-kpi-change[data-dir="down"] { color: var(--red); }

.pr-kpi-note {
  font-size: 7pt;
  color: var(--muted);
  margin-top: 2mm;
  line-height: 1.4;
}

/* ══════════════════════════════════════════════════════════════
   TABELA DE DADOS
   ══════════════════════════════════════════════════════════════ */
.pr-table-wrap {
  margin-bottom: 6mm;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #dce5ef;
}

.pr-table-title {
  padding: 3mm 4mm;
  background: #f8fafc;
  border-bottom: 1px solid var(--border);
  font-size: 8pt;
  font-weight: 700;
  color: var(--navy);
}

table.pr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8.5pt;
}

table.pr-table thead {
  display: table-header-group; /* repete em cada página */
}

table.pr-table thead th {
  background: var(--navy);
  color: #fff;
  font-weight: 600;
  font-size: 7.5pt;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  padding: 3mm 4mm;
  text-align: left;
  border: none;
  white-space: nowrap;
  vertical-align: middle;
}

table.pr-table thead th.th-right  { text-align: right; }
table.pr-table thead th.th-center { text-align: center; }

table.pr-table tbody tr {
  break-inside: avoid;
  page-break-inside: avoid;
}

table.pr-table tbody tr:nth-child(even) td {
  background: var(--row-alt);
}

table.pr-table tbody tr.tr-total td {
  background: var(--row-tot) !important;
  font-weight: 700;
  color: var(--navy);
  border-top: 1.5px solid var(--blue);
  border-bottom: none;
}

table.pr-table tbody tr.tr-subtotal td {
  background: #f1f5f9 !important;
  font-weight: 600;
  color: var(--sub);
  font-style: italic;
}

table.pr-table tbody td {
  padding: 2.8mm 4mm;
  border-bottom: 1px solid #eef2f7;
  color: var(--text);
  vertical-align: middle;
  line-height: 1.4;
}

table.pr-table tbody td.td-right   { text-align: right; font-variant-numeric: tabular-nums; }
table.pr-table tbody td.td-center  { text-align: center; }
table.pr-table tbody td.td-muted   { color: var(--muted); }
table.pr-table tbody td.td-bold    { font-weight: 700; }
table.pr-table tbody td.td-mono    { font-family: 'SFMono-Regular', Consolas, monospace; font-size: 8pt; }

/* Modo compacto */
.pr-table-compact table.pr-table thead th { padding: 2mm 3mm; font-size: 7pt; }
.pr-table-compact table.pr-table tbody td { padding: 1.8mm 3mm; font-size: 8pt; }

/* ══════════════════════════════════════════════════════════════
   BLOCO DE GRÁFICO
   ══════════════════════════════════════════════════════════════ */
.pr-chart-block {
  break-inside: avoid;
  page-break-inside: avoid;
  border: 1px solid var(--border);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 6mm;
}

.pr-chart-hdr {
  padding: 4mm 5mm 3mm;
  border-bottom: 1px solid var(--border);
  background: #f8fafc;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 4mm;
}

.pr-chart-title {
  font-size: 9.5pt;
  font-weight: 700;
  color: var(--navy);
}

.pr-chart-desc {
  font-size: 7.5pt;
  color: var(--muted);
}

.pr-chart-canvas {
  padding: 5mm;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55mm;
}

.pr-chart-canvas svg,
.pr-chart-canvas canvas,
.pr-chart-canvas img {
  max-width: 100%;
  max-height: 80mm;
  height: auto;
  width: auto;
}

.pr-chart-footer {
  padding: 2.5mm 5mm;
  border-top: 1px solid var(--border);
  background: #f8fafc;
  font-size: 7pt;
  color: var(--muted);
}

/* ══════════════════════════════════════════════════════════════
   BLOCO DE INFORMAÇÃO
   ══════════════════════════════════════════════════════════════ */
.pr-info-block {
  break-inside: avoid;
  page-break-inside: avoid;
  border-left: 3.5px solid var(--blue);
  border-radius: 0 4px 4px 0;
  padding: 4mm 5mm;
  margin-bottom: 4mm;
  background: #f8fafc;
  border: 1px solid #dbeafe;
  border-left-width: 3.5px;
  border-left-color: var(--blue);
}

.pr-info-block.pr-info-success {
  border-left-color: var(--green);
  background: #f0fdf4;
  border-color: #d1fae5;
  border-left-color: var(--green);
}

.pr-info-block.pr-info-warning {
  border-left-color: var(--amber);
  background: #fffbeb;
  border-color: #fde68a;
  border-left-color: var(--amber);
}

.pr-info-block.pr-info-error {
  border-left-color: var(--red);
  background: #fef2f2;
  border-color: #fecaca;
  border-left-color: var(--red);
}

.pr-info-title {
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2mm;
}

.pr-info-body {
  font-size: 8.5pt;
  color: var(--sub);
  line-height: 1.6;
}

/* ══════════════════════════════════════════════════════════════
   BLOCO DE ASSINATURAS
   ══════════════════════════════════════════════════════════════ */
.pr-signature-block {
  break-inside: avoid;
  page-break-inside: avoid;
  margin-top: 12mm;
}

.pr-signature-place-date {
  font-size: 8.5pt;
  color: var(--sub);
  margin-bottom: 10mm;
}

.pr-signature-grid {
  display: grid;
  gap: 12mm;
  margin-bottom: 4mm;
}

.pr-signature-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-signature-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }

.pr-signature-item { text-align: center; }

.pr-signature-line {
  border-top: 1px solid #374151;
  margin-bottom: 2.5mm;
  padding-top: 0;
}

.pr-signature-name {
  font-size: 8.5pt;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1mm;
}

.pr-signature-role {
  font-size: 7.5pt;
  color: var(--muted);
}

/* ══════════════════════════════════════════════════════════════
   UTILITÁRIOS GERAIS
   ══════════════════════════════════════════════════════════════ */
.pr-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 5mm 0;
}

.pr-spacer-sm { height: 4mm; }
.pr-spacer-md { height: 8mm; }
.pr-spacer-lg { height: 14mm; }

.pr-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6mm;
}

.pr-three-col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5mm;
}

.pr-text-right  { text-align: right; }
.pr-text-center { text-align: center; }
.pr-text-muted  { color: var(--muted); }
.pr-text-small  { font-size: 7.5pt; }
.pr-text-bold   { font-weight: 700; }

.pr-badge {
  display: inline-block;
  padding: 0.5mm 2.5mm;
  border-radius: 3px;
  font-size: 7pt;
  font-weight: 600;
  vertical-align: middle;
}

.pr-badge-blue   { background: #dbeafe; color: var(--blue); }
.pr-badge-green  { background: #d1fae5; color: var(--green); }
.pr-badge-red    { background: #fee2e2; color: var(--red); }
.pr-badge-amber  { background: #fef3c7; color: var(--amber); }
.pr-badge-gray   { background: #f3f4f6; color: var(--muted); }

/* Tipografia de conteúdo geral */
p   { margin-bottom: 2mm; }
ul, ol { padding-left: 5mm; margin-bottom: 2mm; }
li  { margin-bottom: 1mm; }
strong { font-weight: 700; }
em     { font-style: italic; }

a { color: var(--blue); text-decoration: none; }

h1 { font-size: 16pt; font-weight: 700; color: var(--navy); margin: 0 0 4mm; page-break-after: avoid; }
h2 { font-size: 12pt; font-weight: 700; color: var(--navy); margin: 0 0 3mm; page-break-after: avoid; }
h3 { font-size: 10pt; font-weight: 700; color: var(--sub);  margin: 0 0 2mm; page-break-after: avoid; }

@media print {
  body { padding: 22mm 20mm 18mm; }

  .pr-page-header,
  .pr-page-footer { display: flex; }

  table.pr-table thead { display: table-header-group; }

  .pr-kpi-card,
  .pr-chart-block,
  .pr-info-block,
  .pr-summary,
  .pr-signature-block {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  h1, h2, h3, h4 {
    break-after: avoid;
    page-break-after: avoid;
  }
}
`
}
