<template>
  <div class="pr-kpi-grid" :data-cols="cols">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ cols?: 2 | 3 | 4 }>(), { cols: 4 })
</script>

<style scoped>
.pr-kpi-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.pr-kpi-grid[data-cols="2"] { grid-template-columns: repeat(2, 1fr); }
.pr-kpi-grid[data-cols="3"] { grid-template-columns: repeat(3, 1fr); }
.pr-kpi-grid[data-cols="4"] { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .pr-kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
</style>
