<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="max-w-300 mx-auto">
    <div
      v-for="key, cidx in Object.keys(projects)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        slide-enter select-none relative h20 pointer-events-none
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span color-transparent absolute font-bold text-stroke-hex-aaa text-5em left--1rem top-0rem leading-1em text-stroke-1.5 op35 dark:op20>{{ key }}</span>
      </div>
      <!-- <h4 :id="slug(key)" class="mt-15 mb-2 font-bold text-center op75">
        {{ key }}
      </h4> -->
      <div
        class="mx-auto project-grid py-2 max-w-500 w-max"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
        :class="projects[key].length === 1 ? 'flex' : projects[key].length > 2 ? 'lg:grid-cols-3' : ''"
      >
        <a
          v-for="item, idx in projects[key]"
          :key="idx"
          class="relative flex item items-center color-inherit"
          :href="item.link"
          target="_blank"
          :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
          :title="item.name"
        >
          <div v-if="item.icon" class="pt-2 pr-5">
            <div class="opacity-50 text-3xl" :class="item.icon || 'i-carbon-unknown'" />
          </div>
          <div class="flex-auto">
            <div class="text-normal">{{ item.name }}</div>
            <div class="text-sm opacity-50 font-normal desc" v-html="item.desc" />
          </div>
        </a>
      </div>
    </div>
    <!-- <div class="mx-auto prose text-center pb5 mt10">
      <div block mt-5>
        <a href="https://antfu.me/stars-rank" target="_blank" op50>All projects sort by Stars</a>
      </div>
      <hr>
      <SponsorButtons />
    </div>  -->
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.project-grid a.item:hover {
  background: #88888811;
}
</style>
