import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-antfu'
import MarkdownItMagicLink from 'markdown-it-magic-link'
// @ts-expect-error missing types
import LinkAttributes from 'markdown-it-link-attributes'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import Shiki from '@shikijs/markdown-it'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/posts',
        icon: 'i-ri-article-line',
      },
      {
        text: 'Projects',
        link: '/projects',
        icon: 'i-ri-lightbulb-line',
      },
      {
        text: 'Talks',
        link: '/talks',
      },
      {
        title: 'Sponsors',
        link: '/sponsors-list',
        icon: 'i-ri-heart-line',
      },
      {
        title: 'Podcasts',
        link: '/podcasts',
        icon: 'i-ri-mic-line',
      },
      {
        title: 'Demos',
        link: '/demos',
        icon: 'i-ri-screenshot-line',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/antfu',
        icon: 'i-ri-github-fill',
      },
      {
        title: 'RSS',
        link: '/feed.xml',
        icon: 'i-la-rss-square',
      },
    ],

    footer: {
      since: 2024,
    },
  },

  markdown: {
    config: async (md) => {
      md.use(await Shiki({
        themes: {
          dark: 'vitesse-dark',
          light: 'vitesse-light',
        },
        defaultColor: false,
        cssVariablePrefix: '--s-',
        transformers: [
          transformerTwoslash({
            explicitTrigger: true,
            renderer: rendererRich(),
          }),
        ],
      }))

      md.use(LinkAttributes, {
        matcher: (link: string) => /^https?:\/\//.test(link),
        attrs: {
          target: '_blank',
          rel: 'noopener',
        },
      })

      md.use(MarkdownItGitHubAlerts)

      md.use(MarkdownItMagicLink, {
        linksMap: {
          'NuxtLabs': 'https://nuxtlabs.com',
          'Vitest': 'https://github.com/vitest-dev/vitest',
          'Slidev': 'https://github.com/slidevjs/slidev',
          'VueUse': 'https://github.com/vueuse/vueuse',
          'UnoCSS': 'https://github.com/unocss/unocss',
          'Elk': 'https://github.com/elk-zone/elk',
          'Type Challenges': 'https://github.com/type-challenges/type-challenges',
          'Vue': 'https://github.com/vuejs/core',
          'Nuxt': 'https://github.com/nuxt/nuxt',
          'Vite': 'https://github.com/vitejs/vite',
          'Shiki': 'https://github.com/shikijs/shiki',
          'Twoslash': 'https://github.com/twoslashes/twoslash',
          'ESLint Stylistic': 'https://github.com/eslint-stylistic/eslint-stylistic',
          'Unplugin': 'https://github.com/unplugin',
          'Nuxt DevTools': 'https://github.com/nuxt/devtools',
          'Vite PWA': 'https://github.com/vite-pwa',
          'i18n Ally': 'https://github.com/lokalise/i18n-ally',
          'ESLint': 'https://github.com/eslint/eslint',
          'Astro': 'https://github.com/withastro/astro',
          'TwoSlash': 'https://github.com/twoslashes/twoslash',
          'Anthony Fu Collective': { link: 'https://opencollective.com/antfu', imageUrl: 'https://github.com/antfu-collective.png' },
          'Netlify': { link: 'https://netlify.com', imageUrl: 'https://github.com/netlify.png' },
          'Stackblitz': { link: 'https://stackblitz.com', imageUrl: 'https://github.com/stackblitz.png' },
          'Vercel': { link: 'https://vercel.com', imageUrl: 'https://github.com/vercel.png' },
        },
        imageOverrides: [
          ['https://github.com/vuejs/core', 'https://vuejs.org/logo.svg'],
          ['https://github.com/nuxt/nuxt', 'https://nuxt.com/assets/design-kit/icon-green.svg'],
          ['https://github.com/vitejs/vite', 'https://vitejs.dev/logo.svg'],
          ['https://github.com/sponsors', 'https://github.com/github.png'],
          ['https://github.com/sponsors/antfu', 'https://github.com/github.png'],
          ['https://nuxtlabs.com', 'https://github.com/nuxtlabs.png'],
          [/opencollective\.com\/vite/, 'https://github.com/vitejs.png'],
          [/opencollective\.com\/elk/, 'https://github.com/elk-zone.png'],
        ],
      })
    },
  },
})
