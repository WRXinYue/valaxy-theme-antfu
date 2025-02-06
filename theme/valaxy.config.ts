// import TOC from 'markdown-it-table-of-contents'
import type { ThemeConfig } from './types'
import process from 'node:process'
import Shiki from '@shikijs/markdown-it'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import anchor from 'markdown-it-anchor'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
// @ts-expect-error missing types
import LinkAttributes from 'markdown-it-link-attributes'
import Icons from 'unplugin-icons/vite'
import { defineTheme } from 'valaxy'
import Inspect from 'vite-plugin-inspect'
import SVG from 'vite-svg-loader'
import { defaultThemeConfig, generateSafelist, themePlugin, ValaxyBlogPlugin } from './node'
import { slugify } from './scripts/slugify'

const promises: Promise<any>[] = []

export default defineTheme<ThemeConfig>((options) => {
  return {
    themeConfig: defaultThemeConfig,
    vite: {
      plugins: [
        cwdPlugin(),

        themePlugin(options),

        Inspect(),

        Icons({
          defaultClass: 'inline',
          defaultStyle: 'vertical-align: sub;',
        }),

        SVG({
          svgo: false,
          defaultImport: 'url',
        }),

        {
          name: 'await',
          async closeBundle() {
            await Promise.all(promises)
          },
        },

        ValaxyBlogPlugin(),
      ],
      resolve: {
        alias: {

        },
      },
    },
    markdown: {
      // Waiting for Valaxy support
      // theme: {
      //   light: 'vitesse-light',
      //   dark: 'vitesse-dark',
      // },
      // codeTransformers: [
      //   transformerTwoslash({
      //     explicitTrigger: true,
      //     renderer: rendererRich(),
      //   }),
      // ],
      wrapperClasses: (id, code) => code.includes('@layout-full-width')
        ? ''
        : 'prose m-auto slide-enter-content',
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      // md.use(anchor
      anchor: {
        slugify,
        permalink: anchor.permalink.linkInsideHeader({
          symbol: '#',
          renderAttrs: () => ({ 'aria-hidden': 'true' }),
        }),
      },
      // md.use(TOC
      toc: {
        includeLevel: [1, 2, 3, 4],
        slugify,
        containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
      },
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
      },
    },
    unocss: {
      safelist: generateSafelist(options.config.themeConfig as ThemeConfig),
    },
    unocssPresets: {
      icons: {
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      },
    },
  }
})

function cwdPlugin() {
  return {
    name: 'vite-plugin-cwd',
    config() {
      return {
        define: {
          __cwd__: JSON.stringify(process.cwd()),
        },
      }
    },
  }
}
