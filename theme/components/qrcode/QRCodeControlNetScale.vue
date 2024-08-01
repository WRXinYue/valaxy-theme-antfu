<script setup lang="ts">
defineProps<{
  start: number
  end: number
  weight: number
}>()
</script>

<template>
  <div border="t base" relative h-5px>
    <div
      absolute top-0 bottom-0 bg-yellow
      :style="{
        left: `${+start * 100}%`,
        right: `${(1 - end) * 100}%`,
        opacity: weight / 2 + 0.2,
      }"
    />
  </div>
</template>
