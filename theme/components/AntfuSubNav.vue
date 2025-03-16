<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useEnglishOnly, useThemeConfig } from '../composables'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
const themeConfig = useThemeConfig()
const { englishOnly } = useEnglishOnly()

// Check if English Only feature is enabled in the theme configuration
const isEnglishOnlyEnabled = themeConfig.value.englishOnly?.enable ?? true
</script>

<template>
  <div class="m-auto select-none prose mb-8 animate-none! op100!">
    <button
      v-if="isEnglishOnlyEnabled"
      flex="~ gap1"
      items-center
      text-sm
      op30
      mb2
      @click="englishOnly = !englishOnly"
    >
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button>

    <div flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl mb-0>
      <RouterLink v-for="{ link, text } in themeConfig.subNav" :key="link" :to="link" class="!border-none" :class="route.path === link ? activeStyle : inactiveStyle">
        {{ text }}
      </RouterLink>
    </div>
  </div>
</template>
