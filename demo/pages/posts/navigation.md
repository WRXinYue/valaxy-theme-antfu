---
title: Navigation Configuration
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - navigation
  - configuration
duration: 3min
type: docs
lang: en
---

[[toc]]

# Navigation Configuration{lang="en"}

::: en
This guide explains how to configure the navigation for your Valaxy site using the `valaxy-theme-antfu` theme.
:::

# 导航配置{lang="zh-CN"}

::: zh-CN
本指南将解释如何使用 `valaxy-theme-antfu` 主题配置 Valaxy 站点的导航。
:::

## Main Navigation{lang="en"}

::: en
The main navigation menu appears at the top of your site. You can configure it in your `valaxy.config.ts` file:
:::

## 主导航{lang="zh-CN"}

::: zh-CN
主导航菜单出现在您网站的顶部。您可以在 `valaxy.config.ts` 文件中配置它：
:::

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line'
      },
      {
        text: 'Posts',
        link: '/posts',
        icon: 'i-ri-article-line'
      },
      {
        text: 'Notes',
        link: '/notes',
        icon: 'i-ri-sticky-note-line'
      },
      {
        text: 'Demos',
        link: '/demos',
        icon: 'i-ri-code-box-line'
      },
      {
        text: 'Talks',
        link: '/talks',
        icon: 'i-ri-presentation-line'
      },
      {
        text: 'Features',
        link: '/features',
        icon: 'i-ri-function-line'
      }
    ],

    // Other configuration options...
  }
})
```

### Navigation Item Properties{lang="en"}

::: en
Each navigation item can have the following properties:
:::

### 导航项属性{lang="zh-CN"}

::: zh-CN
每个导航项可以具有以下属性：
:::

- `text`: The display text for the navigation item
- `link`: The URL to navigate to when the item is clicked
- `icon`: An optional icon to display next to the text (using Iconify format)
- `title`: An optional title attribute for the link
- `target`: An optional target attribute for the link (e.g., `_blank` to open in a new tab)
- `rel`: An optional rel attribute for the link
- `items`: An optional array of sub-items for dropdown menus

### Using Icons{lang="en"}

::: en
The `valaxy-theme-antfu` theme uses [Iconify](https://iconify.design/) for icons. You can use any icon from the Iconify collection by prefixing it with `i-`.
:::

### 使用图标{lang="zh-CN"}

::: zh-CN
`valaxy-theme-antfu` 主题使用 [Iconify](https://iconify.design/) 作为图标。您可以通过在图标前加上 `i-` 前缀来使用 Iconify 集合中的任何图标。
:::

Common icon sets include:

- `ri`: [Remix Icon](https://remixicon.com/)
- `carbon`: [Carbon Icons](https://carbondesignsystem.com/guidelines/icons/library/)
- `mdi`: [Material Design Icons](https://materialdesignicons.com/)

For example:

- `i-ri-home-line`: Home icon from Remix Icon
- `i-carbon-document`: Document icon from Carbon Icons
- `i-mdi-github`: GitHub icon from Material Design Icons

### Dropdown Menus{lang="en"}

::: en
You can create dropdown menus by adding an `items` array to a navigation item:
:::

### 下拉菜单{lang="zh-CN"}

::: zh-CN
您可以通过向导航项添加 `items` 数组来创建下拉菜单：
:::

```ts
nav: [
  // ... other items
  {
    text: 'Resources',
    icon: 'i-ri-book-line',
    items: [
      {
        text: 'Documentation',
        link: '/docs'
      },
      {
        text: 'API Reference',
        link: '/api'
      },
      {
        text: 'Examples',
        link: '/examples'
      }
    ]
  }
]
```

## Sub Navigation{lang="en"}

::: en
The sub-navigation menu appears below the main navigation on certain pages. You can configure it in your `valaxy.config.ts` file:
:::

## 子导航{lang="zh-CN"}

::: zh-CN
子导航菜单出现在某些页面的主导航下方。您可以在 `valaxy.config.ts` 文件中配置它：
:::

```ts
themeConfig: {
  subNav: [
    {
      text: 'Posts',
      link: '/posts'
    },
    {
      text: 'Notes',
      link: '/notes'
    },
    {
      text: 'Demos',
      link: '/demos'
    },
    {
      text: 'Talks',
      link: '/talks'
    },
    {
      text: 'Features',
      link: '/features'
    }
  ]
}
```

### Using the Sub Navigation Component{lang="en"}

::: en
To display the sub-navigation menu on a page, add the `<AntfuSubNav />` component to your Markdown file:
:::

### 使用子导航组件{lang="zh-CN"}

::: zh-CN
要在页面上显示子导航菜单，请将 `<AntfuSubNav />` 组件添加到您的 Markdown 文件中：
:::

```md
---
title: My Page
---

<AntfuSubNav />

# My Page Content

Content goes here...
```

## Navigation Controls{lang="en"}

::: en
You can configure additional controls in the navigation bar, such as the locale toggle and theme toggle:
:::

## 导航控件{lang="zh-CN"}

::: zh-CN
您可以在导航栏中配置其他控件，例如语言切换和主题切换：
:::

```ts
themeConfig: {
  navControls: {
    localeToggle: true, // Whether to enable the locale toggle
    themeToggle: true // Whether to enable the theme toggle (light/dark mode)
  }
}
```

## Mobile Navigation{lang="en"}

::: en
The `valaxy-theme-antfu` theme automatically adapts the navigation menu for mobile devices. On smaller screens, the navigation menu collapses into a hamburger menu.
:::

## 移动导航{lang="zh-CN"}

::: zh-CN
`valaxy-theme-antfu` 主题自动适应移动设备的导航菜单。在较小的屏幕上，导航菜单会折叠成汉堡菜单。
:::

## Social Links{lang="en"}

::: en
You can add social links to your navigation by including them in the `nav` array:
:::

## 社交链接{lang="zh-CN"}

::: zh-CN
您可以通过将社交链接包含在 `nav` 数组中来将其添加到导航中：
:::

```ts
nav: [
  // ... other items
  {
    text: 'GitHub',
    link: 'https://github.com/username/repo',
    icon: 'i-ri-github-fill',
    target: '_blank'
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/username',
    icon: 'i-ri-twitter-fill',
    target: '_blank'
  }
]
```

## Complete Example{lang="en"}

::: en
Here's a complete example of navigation configuration:
:::

## 完整示例{lang="zh-CN"}

::: zh-CN
以下是导航配置的完整示例：
:::

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line'
      },
      {
        text: 'Posts',
        link: '/posts',
        icon: 'i-ri-article-line'
      },
      {
        text: 'Notes',
        link: '/notes',
        icon: 'i-ri-sticky-note-line'
      },
      {
        text: 'Demos',
        link: '/demos',
        icon: 'i-ri-code-box-line'
      },
      {
        text: 'Talks',
        link: '/talks',
        icon: 'i-ri-presentation-line'
      },
      {
        text: 'Features',
        link: '/features',
        icon: 'i-ri-function-line'
      },
      {
        text: 'Resources',
        icon: 'i-ri-book-line',
        items: [
          {
            text: 'Documentation',
            link: '/docs'
          },
          {
            text: 'API Reference',
            link: '/api'
          },
          {
            text: 'Examples',
            link: '/examples'
          }
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/username/repo',
        icon: 'i-ri-github-fill',
        target: '_blank'
      }
    ],

    subNav: [
      {
        text: 'Posts',
        link: '/posts'
      },
      {
        text: 'Notes',
        link: '/notes'
      },
      {
        text: 'Demos',
        link: '/demos'
      },
      {
        text: 'Talks',
        link: '/talks'
      },
      {
        text: 'Features',
        link: '/features'
      }
    ],

    navControls: {
      localeToggle: true,
      themeToggle: true
    }
  }
})
```

## Conclusion{lang="en"}

::: en
By configuring the navigation for your Valaxy site, you can create a user-friendly interface that makes it easy for visitors to find and explore your content.
:::

## 结论{lang="zh-CN"}

::: zh-CN
通过为您的 Valaxy 站点配置导航，您可以创建一个用户友好的界面，使访问者能够轻松找到和浏览您的内容。
:::
