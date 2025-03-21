<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()

// Get logo configuration from themeConfig with defaults
const logoConfig = themeConfig.value.logo || { enable: true, component: 'Logo' }
</script>

<template>
  <header class="header z-40">
    <RouterLink
      v-if="logoConfig.enable"
      class="absolute select-none m-5 h-12 w-12 outline-none xl:fixed"
      to="/"
      focusable="false"
    >
      <component :is="logoConfig.component" v-if="logoConfig.component && !logoConfig.image && !logoConfig.svg" />
      <img v-else-if="logoConfig.image" :src="logoConfig.image" alt="Logo">
      <div v-else-if="logoConfig.svg" v-html="logoConfig.svg" />
    </RouterLink>
    <button
      title="Scroll to top"

      fixed hover:op100 bottom-3 right-3 z-100 h-10 w-10 rounded-full transition duration-300 print:hidden hover-bg-hex-8883
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <AppLink v-for="nav in themeConfig.nav" :key="nav.link" :to="nav.link" :title="nav.title ?? nav.text">
          <span class="lt-md:hidden">{{ nav.text }}</span>
          <div v-if="nav.icon" :class="[nav.icon, !nav.title && 'md:hidden']" />
        </AppLink>
        <AntfuToggleLocale />
        <AntfuToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
