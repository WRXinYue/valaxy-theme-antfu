<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="px-2 py-2 flex block items-center -mx-2 mt-4 gap2">
    <img src="https://vueuse.org/favicon.svg" class="flex-none h-1.5rem !w-1.5rem !my-0">
    <span class="opacity-75">Avaliable in VueUse: </span><a class="ml-2 font-mono opacity-75 hover:opacity-100" :href="`https://vueuse.org/${name}`">{{ name }}</a>
  </div>
</template>
