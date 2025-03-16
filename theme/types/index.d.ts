import type { DefaultTheme } from 'valaxy'

export namespace StarterTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

/**
 * Theme Config
 */
export interface ThemeConfig extends DefaultTheme.Config {
  colors: {
    /**
     * primary color
     * @default '#0078E7'
     */
    primary: string
  }

  /**
   * Logo configuration
   */
  logo?: {
    /**
     * Whether to show the logo
     * @default true
     */
    enable?: boolean

    /**
     * Component name to use as logo
     * @default 'Logo'
     */
    component?: string

    /**
     * Image URL to use as logo
     */
    image?: string

    /**
     * SVG content to use as logo
     */
    svg?: string
  }

  /**
   * English Only feature configuration
   */
  englishOnly?: {
    /**
     * Whether to enable the English Only toggle feature
     * @default true
     */
    enable: boolean

    /**
     * Default value for English Only mode
     * @default false
     */
    default: boolean
  }

  /**
   * navbar
   */
  nav: NavItem[]

  /**
   * Navigation bar controls configuration
   */
  navControls?: {
    /**
     * Whether to enable the locale toggle in navigation bar
     * @default true
     */
    localeToggle?: boolean

    /**
     * Whether to enable the theme toggle in navigation bar
     * @default true
     */
    themeToggle?: boolean
  }

  subNav: {
    text?: string
    link: string
  }[]

  /**
   * footer
   */
  footer: Partial<{
    /**
     * 建站于
     */
    since: number

    /**
     * Icon between year and copyright info.
     */
    icon: {
      /**
       * icon name, i-xxx
       */
      name: string
      animated: boolean
      color: string
      url: string
      title: string
    }

    /**
     * Powered by valaxy & valaxy-theme-${name}, default is yun
     */
    powered: boolean

    /**
     * Chinese Users | 中国用户
     * 备案 ICP
     * 国内用户需要在网站页脚展示备案 ICP 号
     * https://beian.miit.gov.cn/
     */
    beian: {
      enable: boolean
      /**
       * 苏ICP备xxxxxxxx号
       */
      icp: string
    }
  }>
}

export interface NavItem {
  text?: string
  link: string
  icon?: string
  title?: string
}

export interface Post {
  path: string
  title: string
  place?: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}

export interface Talk {
  title: string
  description?: string
  series?: string
  lang?: string
  presentations: TalkPresentation[]
}

export interface TalkPresentation {
  lang?: string
  date: string
  location?: string
  conference: string
  conferenceUrl: string
  recording?: string
  transcript?: string
  pdf?: string
  spa?: string
}

export interface UpcomingTalk {
  title: string
  date: string
  platform: string
  url: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
