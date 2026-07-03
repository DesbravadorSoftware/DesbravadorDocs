<template>
  <div class="pr-section" :class="{ 'pr-page-break': pageBreak }">
    <div v-if="title" class="pr-section-hdr">
      <span v-if="eyebrow" class="pr-section-eyebrow">{{ eyebrow }}</span>
      <h2 class="pr-section-title">{{ title }}</h2>
    </div>
    <p v-if="description" class="pr-section-desc">{{ description }}</p>
    <div class="pr-section-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  eyebrow?: string
  description?: string
  pageBreak?: boolean
}>()
</script>

<style scoped>
/* Estilos de tela — versão simplificada para pré-visualização */
.pr-section { margin-bottom: 2rem; }
.pr-section-hdr {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid var(--vp-c-divider);
}
.pr-section-eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-brand-1);
}
.pr-section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border: none;
  margin: 0;
  padding: 0;
}
.pr-section-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}
</style>
