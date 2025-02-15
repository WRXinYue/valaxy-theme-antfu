<script setup lang="ts">
import { onKeyStroke, useEventListener } from '@vueuse/core'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const imageModel = ref<HTMLImageElement>()

useEventListener('click', async (e) => {
  const path = Array.from(e.composedPath())
  const first = path[0]
  if (!(first instanceof HTMLElement))
    return
  if (first.tagName !== 'IMG')
    return
  if (first.classList.contains('no-preview'))
    return
  if (path.some(el => el instanceof HTMLElement && ['A', 'BUTTON'].includes(el.tagName)))
    return
  if (!path.some(el => el instanceof HTMLElement && el.classList.contains('prose')))
    return

  // Do not open image when they are moving. Mainly for mobile to avoid conflict with hovering behavior.
  const pos = first.getBoundingClientRect()
  await new Promise(resolve => setTimeout(resolve, 50))
  const newPos = first.getBoundingClientRect()
  if (pos.left !== newPos.left || pos.top !== newPos.top)
    return

  imageModel.value = first as HTMLImageElement
})

onKeyStroke('Escape', (e) => {
  if (imageModel.value) {
    imageModel.value = undefined
    e.preventDefault()
  }
})
</script>

<template>
  <AntfuNavBar />
  <main class="py-10 of-x-hidden px-7">
    <RouterView />
    <AntfuFooter :key="route.path" />
  </main>
  <Transition name="fade">
    <div v-if="imageModel" fixed bottom-0 left-0 right-0 top-0 z-500 backdrop-blur-7 @click="imageModel = undefined">
      <div absolute bottom-0 left-0 right-0 top-0 z--1 bg-black:30 />
      <img :src="imageModel.src" :alt="imageModel.alt" :class="imageModel.className" w-full h-full max-h-screen max-w-screen object-contain>
    </div>
  </Transition>
</template>
