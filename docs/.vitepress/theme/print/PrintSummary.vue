<template>
  <div class="pr-summary">
    <div class="pr-summary-label">{{ label ?? 'Resumo Executivo' }}</div>
    <div class="pr-summary-body"><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<style scoped>
.pr-summary {
  background: linear-gradient(135deg, #f0f5ff 0%, #e8f0fb 100%);
  border: 1px solid #c7d9f5;
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 0 8px 8px 0;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
}
.pr-summary-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.6rem;
}
.pr-summary-body {
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  line-height: 1.7;
}
.pr-summary-body :deep(p + p) { margin-top: 0.5rem; }
</style>
