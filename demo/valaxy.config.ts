import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line',
      },
      {
        text: 'Docs',
        link: '/docs',
        icon: 'i-ri-article-line',
      },
      {
        text: 'Talks',
        link: '/talks',
        icon: 'i-ri-lightbulb-line',
      },
      {
        text: 'Features',
        link: '/features',
        icon: 'i-ri-star-line',
      },
      {
        title: 'Collective Sponsor',
        link: '/collective-sponsor-onetime',
        icon: 'i-ri-heart-line',
      },
      {
        title: 'Demos',
        link: '/demos',
        icon: 'i-ri-screenshot-line',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/wrxinyue/valaxy-theme-antfu',
        icon: 'i-ri-github-fill',
      },
      {
        title: 'RSS',
        link: 'https://antfu.wrxinyue.org/feed.xml',
        icon: 'i-la-rss-square',
      },
    ],

    navControls: {
      localeToggle: true,
    },

    subNav: [
      {
        text: 'Documentation',
        link: '/docs',
      },
      {
        text: 'Talks',
        link: '/talks',
      },
    ],

    footer: {
      since: 2024,
    },
  },
})
