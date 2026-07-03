<template>
  <div class="pr-kpi-card" :data-trend="trend">
    <div class="pr-kpi-label">{{ label }}</div>
    <div class="pr-kpi-value">{{ value }}</div>
    <div v-if="change" class="pr-kpi-change" :data-dir="changeDir">
      {{ changeDir === 'up' ? '▲' : changeDir === 'down' ? '▼' : '' }} {{ change }}
    </div>
    <div v-if="note" class="pr-kpi-note">{{ note }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  change?: string
  changeDir?: 'up' | 'down' | 'neutral'
  note?: string
  trend?: 'up' | 'down' | 'warn' | 'neutral'
}>()
</script>

<style scoped>
.pr-kpi-card {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem 1.1rem 0.9rem;
  background: var(--vp-c-bg);
  overflow: hidden;
}
.pr-kpi-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--vp-c-brand-1);
  border-radius: 8px 8px 0 0;
}
.pr-kpi-card[data-trend="up"]::before   { background: #059669; }
.pr-kpi-card[data-trend="down"]::before { background: #dc2626; }
.pr-kpi-card[data-trend="warn"]::before { background: #d97706; }

.pr-kpi-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.4rem;
}
.pr-kpi-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}
.pr-kpi-change {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.pr-kpi-change[data-dir="up"]   { color: #059669; }
.pr-kpi-change[data-dir="down"] { color: #dc2626; }
.pr-kpi-note {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  margin-top: 0.35rem;
}
</style>
