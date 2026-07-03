<template>
  <div class="pr-chart-block">
    <div class="pr-chart-hdr">
      <div>
        <div class="pr-chart-title">{{ title }}</div>
        <div v-if="description" class="pr-chart-desc">{{ description }}</div>
      </div>
    </div>
    <div class="pr-chart-canvas" ref="canvasWrap">
      <slot />
    </div>
    <div v-if="$slots.footer" class="pr-chart-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<style scoped>
.pr-chart-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.pr-chart-hdr {
  padding: 0.75rem 1rem 0.6rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.pr-chart-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.pr-chart-desc {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  margin-top: 0.2rem;
}
.pr-chart-canvas {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
.pr-chart-canvas :deep(svg),
.pr-chart-canvas :deep(canvas),
.pr-chart-canvas :deep(img) {
  max-width: 100%;
  height: auto;
}
.pr-chart-footer {
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
