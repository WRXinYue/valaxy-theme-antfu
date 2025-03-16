<script setup lang='ts'>
import { useAppStore } from 'valaxy'
import { useThemeConfig } from '../composables'

const { toggleDarkWithTransition } = useAppStore()
const themeConfig = useThemeConfig()

// Check if theme toggle is enabled in the navigation controls configuration
// Default to true if not specified
const isThemeToggleEnabled = themeConfig.value.navControls?.themeToggle ?? true
</script>

<template>
  <a
    v-if="isThemeToggleEnabled"
    class="select-none"
    title="Toggle Color Scheme"
    @click="toggleDarkWithTransition"
  >
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
