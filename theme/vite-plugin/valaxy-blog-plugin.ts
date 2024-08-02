import { promises as fs } from 'node:fs'
import path, { basename } from 'node:path'
import type { Plugin } from 'vite'

/**
 * @see https://github.com/vitejs/vite/issues/14102
 *
 * Since `import.meta.glob` does not support dynamic imports, this plugin is created to generate a list of dynamic imports
 * and inject them into the code. This is used to load user resource files, such as using `import.meta.glob('@valaxy-blog/pages/demos/*.mp4', { eager: true, query: '?url', import: 'default' })`
 * to access user files in themes.
 * Reference https://github.com/vitejs/vite/issues/2351
 */
function ValaxyBlogPlugin({ prefix = '@valaxy-blog/' }: { prefix?: string } = {}): Plugin {
  const sourceFromId = (id: string) => id.slice(prefix.length)
  return {
    name: `ValaxyBlogPlugin`,
    enforce: 'pre',

    async resolveId(id: string): Promise<any> {
      if (id.startsWith(prefix)) {
        return path.resolve(sourceFromId(id))
      }
    },

    async load(id: string): Promise<any> {
      if (id.startsWith(prefix)) {
        const source = sourceFromId(id)
        const data = await fs.readFile(source, 'utf8')

        this.addWatchFile(source)
        const emitted = this.emitFile({
          name: basename(source),
          source: `${data}`,
          type: 'asset',
        })

        return `
        export default import.meta.ROLLUP_FILE_URL_${emitted}
        `
      }
    },
  }
}

export default ValaxyBlogPlugin
