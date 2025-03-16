import { useStorage } from '@vueuse/core'
import { useThemeConfig } from './config'

/**
 * Composable for English Only mode
 * Uses theme configuration for default value
 */
export function useEnglishOnly() {
  const themeConfig = useThemeConfig()

  // Use the configuration default value or fall back to false if not configured
  const englishOnly = useStorage('antfu-english-only', themeConfig.value.englishOnly?.default ?? false)

  return {
    englishOnly,
  }
}
