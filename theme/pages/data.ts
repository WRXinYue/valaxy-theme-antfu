import { usePageList } from 'valaxy'
import { computed } from 'vue'

const pageList = usePageList()
// const video = import.meta.glob(`/pages/demos/*.mp4`, { eager: true, query: '?url', import: 'default' })

const posts = computed(() => pageList.value.filter(i =>
  i.path?.startsWith('/demos')
  && i.path !== '/demos'
  && !i.path?.endsWith('.html')
  && i.date
  && (!i.hide || i.hide === 'index'),
))

export const demoItems = await Promise.all(
  posts.value.map(async post => ({
    title: post.title,
    link: post.link,
    date: post.path,
    excerpt: post.excerpt,
    src: (await import(/* @vite-ignore */ `${__cwd__}/pages/${post.path}.mp4?url`)).default,
  })),
).then(items =>
  items
    .filter(item => item.date !== 'index')
    .sort((a, b) => b.date!.localeCompare(a.date!)),
)
