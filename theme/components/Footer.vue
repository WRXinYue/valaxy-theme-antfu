<script setup lang="ts">
import { useSiteConfig } from 'valaxy'
import { useThemeConfig } from '../composables'

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()
</script>

<template>
  <div class="slide-enter mb-6 flex prose m-auto mt-10 animate-delay-1200!">
    <span class="text-sm op50"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:inherit">CC BY-NC-SA 4.0</a> {{ themeConfig.footer.since }}-PRESENT © {{ siteConfig.author.name }}</span>
    <div class="flex-auto" />
  </div>
</template>
