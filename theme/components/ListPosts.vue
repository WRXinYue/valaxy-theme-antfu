<script setup lang="ts">
// import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { usePostList } from 'valaxy'
import type { Post } from 'valaxy'
import { englishOnly, formatDate } from '../logics'

const props = defineProps<{
  type?: string
  posts?: Post[]
  extra?: Post[]
}>()

// const router = useRouter()
// const routes: Post[] = router.getRoutes()
//   .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.meta.frontmatter.draft)
//   .filter(i => !i.path.endsWith('.html') && (i.meta.frontmatter.type || 'blog').split('+').includes(props.type))
//   .map(i => ({
//     path: i.meta.frontmatter.redirect || i.path,
//     title: i.meta.frontmatter.title,
//     date: i.meta.frontmatter.date,
//     lang: i.meta.frontmatter.lang,
//     duration: i.meta.frontmatter.duration,
//     recording: i.meta.frontmatter.recording,
//     upcoming: i.meta.frontmatter.upcoming,
//     redirect: i.meta.frontmatter.redirect,
//     place: i.meta.frontmatter.place,
//   }))

// const routes = usePostList({ type: props.type || '' })
const routes = usePostList({ type: props.type })

// const posts = computed(() => props.posts || routes.value)

const posts = computed(() =>
  [...(props.posts || routes.value), ...props.extra || []]
    .sort((a, b) => {
      const dateA = typeof a.date === 'string' || typeof a.date === 'number' ? new Date(a.date) : new Date()
      const dateB = typeof b.date === 'string' || typeof b.date === 'number' ? new Date(b.date) : new Date()
      return +dateB - +dateA
    })
    .filter(i => !englishOnly.value || i.lang !== 'zh'),
)

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: Post, b?: Post) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
  if (isFuture(p.date))
    return 'Upcoming'
  return getYear(p.date!)
}
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <div op50 py2>
        { nothing here yet }
      </div>
    </template>

    <template v-for="route, idx in posts" :key="route.path">
      <div
        v-if="!isSameGroup(route, posts[idx - 1])" slide-enter select-none pointer-events-none relative h20 :style="{
          '--enter-stage': idx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span

          absolute font-bold color-transparent text-stroke-hex-aaa text-8em left--3rem top--2rem text-stroke-2 op10
        >{{ getGroupName(route) }}</span>
      </div>
      <div
        class="slide-enter" :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms',
        }"
      >
        <component
          :is="route.path?.includes('://') ? 'a' : 'RouterLink'" v-bind="route.path?.includes('://') ? {
            href: route.path,
            target: '_blank',
            rel: 'noopener noreferrer',
          } : {
            to: route.path,
          }
          " class="mb-6 item block font-normal mt-2 no-underline"
        >
          <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
            <div class="text-lg title leading-1.2em" flex="~ gap-2 wrap">
              <span
                v-if="route.lang === 'zh'" flex-none align-middle
                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 ml--12 mr2 my-auto hidden md:block"
              >中文</span>
              <span align-middle>{{ route.title }}</span>
            </div>

            <div flex="~ gap-2 items-center">
              <span
                v-if="route.redirect" align-middle op50 flex-none text-xs ml--1 mt--1 i-carbon-arrow-up-right
                title="External"
              />
              <span v-if="route.inperson" align-middle op50 flex-none i-ri:group-2-line title="In person" />
              <span
                v-if="route.recording || route.video" align-middle op50 flex-none i-ri:film-line
                title="Provided in video"
              />
              <span v-if="route.radio" align-middle op50 flex-none i-ri:radio-line title="Provided in radio" />

              <span text-sm op50 ws-nowrap>
                {{ formatDate(route.date, true) }}
              </span>
              <span v-if="route.duration" text-sm ws-nowrap op40>· {{ route.duration }}</span>
              <span v-if="route.platform" text-sm op40 ws-nowrap>· {{ route.platform }}</span>
              <span v-if="route.place" text-sm op40 ws-nowrap md:hidden>· {{ route.place }}</span>
              <span
                v-if="route.lang === 'zh'" align-middle flex-none
                class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"
              >中文</span>
            </div>
          </li>
          <div v-if="route.place" op50 text-sm hidden md:block mt--2>
            {{ route.place }}
          </div>
        </component>
      </div>
    </template>
  </ul>
</template>
