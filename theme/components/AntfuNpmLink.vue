<script setup lang="ts">
defineProps<{
  package: string
  name?: string
}>()
</script>

<template>
  <span ws-nowrap>
    <slot name="icon">
      <span class="inline inline-block" i-ri:npmjs-fill />
    </slot>
    <a
      class="opacity-70 ml-1 font-mono"
      :href="`https://www.npmjs.com/package/${package}`"
      target="_blank"
    >{{ name || package }}</a>
  </span>
</template>
