<script lang="ts" setup>
import { useLocale } from 'valaxy'
import { useI18n } from 'vue-i18n'
import { useThemeConfig } from '../composables'

const { t, locale } = useI18n()
const { toggleLocales } = useLocale()
const themeConfig = useThemeConfig()

// Check if locale toggle is enabled in the navigation controls configuration
// Default to true if not specified
const isLocaleToggleEnabled = themeConfig.value.navControls?.localeToggle ?? true
</script>

<template>
  <a
    v-if="isLocaleToggleEnabled"
    class="select-none"
    :title="t('button.toggle_langs')"
    @click="toggleLocales"
  >
    <div i-ri-translate class="transition transform" :class="locale === 'en' ? 'rotate-y-180' : ''" />
  </a>
</template>
