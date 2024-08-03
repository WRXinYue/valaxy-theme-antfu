import { usePageList } from 'valaxy'
import { computed } from 'vue'

const pageList = usePageList()
const video = import.meta.glob(`@valaxy-blog/pages/demos/*.mp4`, { eager: true, query: '?url', import: 'default' })

// HACK: There should be a better way to do this, or it should be encapsulated...
const baseUrl = Object.keys(video)[0].match(/^.*(?=\/demos)/)![0]

const posts = computed(() => pageList.value.filter(i =>
  i.path?.startsWith('/demos')
  && i.path !== '/demos'
  && !i.path?.endsWith('.html')
  && i.date
  && (!i.hide || i.hide === 'index'),
))

export const demoItems = posts.value.map(post => ({
  title: post.title,
  link: post.link ?? post.path,
  date: post.date,
  excerpt: post.excerpt,
  // https://github.com/vitejs/vite/issues/14102
  // src: (await import(/* @vite-ignore */ `/pages${post.path}.mp4?url`)).default as unknown,
  src: video[`${baseUrl}${post.path}.mp4`] as string,
}))
  .filter(item => item.date !== 'index')
  // .sort((a, b) => b.date!.localeCompare(a.date!))
  .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
