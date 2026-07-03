<template>
  <div class="pr-table-wrap" :class="{ 'pr-table-compact': compact }">
    <div v-if="title" class="pr-table-title">{{ title }}</div>
    <table class="pr-table">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            :class="colHeaderClass(col)"
            :style="col.width ? `width:${col.width}` : ''"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in rows"
          :key="i"
          :class="{
            'tr-total':    row._total,
            'tr-subtotal': row._subtotal,
          }"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            :class="colCellClass(col, row)"
          >
            <slot :name="`cell-${col.key}`" :value="row[col.key]" :row="row">
              {{ row[col.key] ?? '—' }}
            </slot>
          </td>
        </tr>
        <tr v-if="rows.length === 0">
          <td :colspan="columns.length" class="td-center td-muted">
            Nenhum registro encontrado.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface TableColumn {
  key: string
  label: string
  align?: 'left' | 'right' | 'center'
  type?: 'currency' | 'date' | 'number' | 'text' | 'badge' | 'mono'
  width?: string
  bold?: boolean
  muted?: boolean
}

export interface TableRow {
  [key: string]: any
  _total?: boolean
  _subtotal?: boolean
}

const props = withDefaults(
  defineProps<{
    title?: string
    columns: TableColumn[]
    rows: TableRow[]
    compact?: boolean
  }>(),
  { compact: false }
)

function colHeaderClass(col: TableColumn): string {
  const align = col.align ?? (col.type === 'currency' || col.type === 'number' ? 'right' : col.type === 'date' ? 'center' : 'left')
  return align === 'right' ? 'th-right' : align === 'center' ? 'th-center' : ''
}

function colCellClass(col: TableColumn, row: TableRow): string {
  const classes: string[] = []
  const align = col.align ?? (col.type === 'currency' || col.type === 'number' ? 'right' : col.type === 'date' ? 'center' : 'left')
  if (align === 'right')  classes.push('td-right')
  if (align === 'center') classes.push('td-center')
  if (col.bold || row._total) classes.push('td-bold')
  if (col.muted) classes.push('td-muted')
  if (col.type === 'mono') classes.push('td-mono')
  return classes.join(' ')
}
</script>

<style scoped>
.pr-table-wrap {
  margin-bottom: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}
.pr-table-title {
  padding: 0.6rem 1rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
table.pr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
table.pr-table thead th {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  text-align: left;
  border-bottom: 2px solid var(--vp-c-divider);
  white-space: nowrap;
}
table.pr-table thead th.th-right  { text-align: right; }
table.pr-table thead th.th-center { text-align: center; }
table.pr-table tbody td {
  padding: 0.55rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  vertical-align: middle;
}
table.pr-table tbody tr:hover td { background: var(--vp-c-bg-soft); }
table.pr-table tbody tr.tr-total td  { font-weight: 700; background: var(--vp-c-bg-soft); }
table.pr-table tbody td.td-right  { text-align: right; font-variant-numeric: tabular-nums; }
table.pr-table tbody td.td-center { text-align: center; }
table.pr-table tbody td.td-muted  { color: var(--vp-c-text-2); }
table.pr-table tbody td.td-bold   { font-weight: 700; }
table.pr-table tbody td.td-mono   { font-family: monospace; font-size: 0.8rem; }
</style>
