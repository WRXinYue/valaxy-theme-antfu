<script setup lang="ts">
import { useRoute } from 'vue-router'
import { englishOnly } from '../logics'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'

const route = useRoute()
</script>

<template>
  <div class="m-auto mb-8 select-none prose animate-none! op100!">
    <button flex="~ gap1" mb2 items-center text-sm op30 @click="englishOnly = !englishOnly">
      <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
      English Only
    </button>

    <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <RouterLink to="/posts" class="!border-none" :class="route.path === '/posts' ? activeStyle : inactiveStyle">
        Blog
      </RouterLink>
      <RouterLink to="/talks" class="!border-none" :class="route.path === '/talks' ? activeStyle : inactiveStyle">
        Talks
      </RouterLink>
      <RouterLink to="/notes" class="!border-none" :class="route.path === '/notes' ? activeStyle : inactiveStyle">
        Notes
      </RouterLink>
      <RouterLink to="/docs" class="!border-none" :class="route.path === '/docs' ? activeStyle : inactiveStyle">
        Documentation
      </RouterLink>
    </div>
  </div>
</template>
