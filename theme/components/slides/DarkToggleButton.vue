<script setup lang="ts">
import { isDark, toggleDark } from '../../logics'
</script>

<template>
  <button
    class="rounded text-sm inline-block px-2 bg-[#42b883] border-b-2 border-green-900 text-white pt-1.5 pb-1 !outline-none hover:bg-opacity-85"
    @click="toggleDark"
  >
    <div class="flex">
      <div i-ri-sun-line dark:i-ri-moon-line />
      <span class="ml-2 mr-1">{{ isDark ? 'Dark' : 'Light' }}</span>
    </div>
  </button>
</template>
