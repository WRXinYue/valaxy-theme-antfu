<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useFrontmatter, usePostList } from 'valaxy'

const frontmatter = useFrontmatter()

const route = useRoute()
const posts = usePostList()

function findCurrentIndex() {
  return posts.value.findIndex(p => p.path === route.path)
}

const nextPost = computed(() => posts.value[findCurrentIndex() - 1])
const prevPost = computed(() => posts.value[findCurrentIndex() + 1])
</script>

<template>
  <article class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header class="text-center pt-6 space-y-1 xl:pb-10">
      <StarterDate :date="frontmatter.date" />
      <h1
        class="text-3xl st-text font-extrabold leading-9 tracking-tight sm:text-4xl md:leading-14 sm:leading-10 md:text-5xl"
      >
        {{ frontmatter.title }}
      </h1>
    </header>

    <div
      class="xl:grid xl:grid-cols-4 pb-16 xl:gap-x-10 divide-y divide-gray-200 xl:pb-20 xl:divide-y-0 dark:divide-gray-700"
      style="grid-template-rows: auto 1fr"
    >
      <StarterAuthor v-if="frontmatter.author" :frontmatter="frontmatter" />
      <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <slot />
      </div>

      <footer
        class="text-sm divide-y divide-gray-200 dark:divide-gray-700 font-medium leading-5 xl:col-start-1 xl:row-start-2"
      >
        <div v-if="nextPost && nextPost.path" class="py-8">
          <h2 class="text-xs text-gray-500 tracking-wide uppercase">
            Next Article
          </h2>
          <div class="link">
            <RouterLink :to="nextPost.path">
              {{ nextPost.title }}
            </RouterLink>
          </div>
        </div>
        <div v-if="prevPost && prevPost.path" class="py-8">
          <h2 class="text-xs text-gray-500 tracking-wide uppercase">
            Previous Article
          </h2>
          <div class="link">
            <RouterLink :to="prevPost.path">
              {{ prevPost.title }}
            </RouterLink>
          </div>
        </div>
        <div class="pt-8">
          <RouterLink class="link" to="/">
            ← Back to the blog
          </RouterLink>
        </div>
      </footer>
    </div>
  </article>
</template>
