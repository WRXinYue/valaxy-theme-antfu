<script setup lang='ts'>
import { useAppStore } from 'valaxy'

const { toggleDarkWithTransition } = useAppStore()
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDarkWithTransition">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
