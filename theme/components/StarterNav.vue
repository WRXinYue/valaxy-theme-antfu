<script lang="ts" setup>
import { useAppStore, useSiteConfig } from 'valaxy'

// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

// const route = useRoute()
// const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

const appStore = useAppStore()

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()
</script>

<template>
  <nav w="full" class="flex items-center font-bold justify-between py-10">
    <RouterLink class="text-xl" to="/" :aria-label="siteConfig.title">
      <img
        class="inline-block mr-2"
        style="width: 50px; height: 35px"
        alt="logo"
        :src="siteConfig.favicon"
      >
      <span class="hidden md:inline">{{ siteConfig.title }}</span>
    </RouterLink>
    <div class="text-sm text-gray-500 leading-5">
      <template v-for="(item, i) in themeConfig.nav" :key="i">
        <AppLink
          :to="item.link"
          rel="noopener"
        >
          {{ item.text }}
        </AppLink>
        <span v-if="i !== themeConfig.nav.length - 1" class="mr-2 ml-2">·</span>
      </template>
    </div>

    <button type="button" aria-label="Toggle Dark Mode" @click="appStore.toggleDarkWithTransition">
      <div v-if="!appStore.isDark" i-ri-sun-line />
      <div v-else i-ri-moon-line />
    </button>
  </nav>
</template>
