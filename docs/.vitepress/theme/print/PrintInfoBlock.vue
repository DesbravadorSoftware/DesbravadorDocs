<template>
  <div class="pr-info-block" :class="`pr-info-${variant}`">
    <div v-if="title" class="pr-info-title">{{ title }}</div>
    <div class="pr-info-body"><slot /></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    variant?: 'default' | 'success' | 'warning' | 'error'
  }>(),
  { variant: 'default' }
)
</script>

<style scoped>
.pr-info-block {
  border-left: 3px solid var(--vp-c-brand-1);
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 0 6px 6px 0;
}
.pr-info-block.pr-info-success { border-left-color: #059669; background: #f0fdf4; }
.pr-info-block.pr-info-warning { border-left-color: #d97706; background: #fffbeb; }
.pr-info-block.pr-info-error   { border-left-color: #dc2626; background: #fef2f2; }
.pr-info-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.35rem;
}
.pr-info-body { font-size: 0.875rem; color: var(--vp-c-text-1); line-height: 1.6; }
</style>
