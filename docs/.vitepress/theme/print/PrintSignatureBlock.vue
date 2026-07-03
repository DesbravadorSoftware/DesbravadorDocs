<template>
  <div class="pr-signature-block">
    <p v-if="placeDate" class="pr-signature-place-date">{{ placeDate }}</p>
    <div class="pr-signature-grid" :data-cols="signatures.length <= 2 ? signatures.length : 3">
      <div v-for="sig in signatures" :key="sig.name" class="pr-signature-item">
        <div class="pr-signature-line"></div>
        <div class="pr-signature-name">{{ sig.name }}</div>
        <div v-if="sig.role" class="pr-signature-role">{{ sig.role }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Signature {
  name: string
  role?: string
}

defineProps<{
  signatures: Signature[]
  placeDate?: string
}>()
</script>

<style scoped>
.pr-signature-block { margin-top: 2.5rem; }
.pr-signature-place-date {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}
.pr-signature-grid {
  display: grid;
  gap: 2rem;
}
.pr-signature-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-signature-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pr-signature-item { text-align: center; }
.pr-signature-line {
  border-top: 1px solid var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}
.pr-signature-name { font-size: 0.875rem; font-weight: 700; }
.pr-signature-role { font-size: 0.8rem; color: var(--vp-c-text-2); margin-top: 0.2rem; }
</style>
