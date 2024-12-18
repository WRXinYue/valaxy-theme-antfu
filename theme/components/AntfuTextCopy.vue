<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const { copy: _copy, copied } = useClipboard()
const el = ref<HTMLElement | null>(null)

function copy() {
  _copy((el.value?.textContent || '').trim())
}
</script>

<template>
  <div ref="el" class="items-center gap-1">
    <slot />
    <button
      title="Copy" ml2 hover:op100 text-sm transition op30 inline
      :class="copied ? 'i-carbon-checkmark text-green' : 'i-carbon-copy'" @click="copy()"
    />
  </div>
</template>
