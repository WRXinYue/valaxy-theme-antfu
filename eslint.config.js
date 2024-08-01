// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    ignores: ['**/dist', '**/public'],
    rules: {
      'ts/no-unused-expressions': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-template-shadow': 'off',
    },
  },
)
