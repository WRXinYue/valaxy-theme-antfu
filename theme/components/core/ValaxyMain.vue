<script lang="ts" setup>
import type { PageData, Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'

defineProps<{
  frontmatter: Post
  data?: PageData
}>()
const siteConfig = useSiteConfig()
</script>

<template>
  <slot name="main">
    <slot name="main-header" />

    <slot name="main-header-after" />

    <slot name="main-content">
      <ValaxyMd :frontmatter="frontmatter">
        <slot name="main-content-md" />
        <slot />
      </ValaxyMd>
      <slot name="main-content-after" />
    </slot>

    <slot name="main-nav-before" />

    <slot name="main-nav" />

    <slot name="main-nav-after" />

    <slot v-if="siteConfig.comment.enable && frontmatter.comment !== false" name="comment" />

    <slot name="footer" />
  </slot>
</template>
