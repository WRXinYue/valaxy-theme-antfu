<script setup lang="ts">
defineProps<{
  repo: string
  name?: string
}>()
</script>

<template>
  <span ws-nowrap>
    <slot name="icon">
      <span class="inline-block inline" i-ri:github-fill />
    </slot>
    <a
      class="opacity-70 ml-1 font-mono"
      :href="`https://github.com/${repo}`"
      target="_blank"
    >{{ name || (repo.includes('/') ? repo.split('/').slice(1).join('/') : repo) }}</a>
  </span>
</template>
