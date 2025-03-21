import { useDark } from '@vueuse/core'
import { format, isThisYear, parseISO } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'
import { nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

export const isDark = useDark()

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleDark(event: MouseEvent) {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
}

export function formatDate(d: string | number | Date, onlyDate = true) {
  const { locale } = useI18n()

  try {
    const date = typeof d === 'string' || typeof d === 'number' ? parseISO(String(d)) : d
    if (onlyDate || isThisYear(date))
      return format(date, 'MMM d', { locale: (locale.value === 'en' ? enUS : zhCN) })
    return format(date, 'MMM d, yyyy', { locale: locale.value === 'en' ? enUS : zhCN })
  }
  catch (error) {
    console.error('Date:', d)
    console.error('Error formatting date:', error)
  }
}
