---
title: Theme Configuration
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - theme
  - configuration
duration: 5min
type: docs
lang: en
---

[[toc]]

# Theme Configuration{lang="en"}

::: en
This guide explains how to configure the `valaxy-theme-antfu` theme to customize your Valaxy site.
:::

# 主题配置{lang="zh-CN"}

::: zh-CN
本指南将解释如何配置 `valaxy-theme-antfu` 主题来自定义您的 Valaxy 网站。
:::

## Basic Configuration{lang="en"}

::: en
The theme configuration is defined in your project's `valaxy.config.ts` file. After [installing the theme](/posts/install), you need to configure it to match your preferences.
:::

## 基本配置{lang="zh-CN"}

::: zh-CN
主题配置在项目的 `valaxy.config.ts` 文件中定义。在[安装主题](/posts/install)后，您需要根据自己的偏好进行配置。
:::

::: en
Here's a basic example of the theme configuration:
:::

::: zh-CN
以下是主题配置的基本示例：
:::

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    // Your theme configuration goes here
    colors: {
      primary: '#0078E7',
    },

    // Other configuration options...
  },
})
```

## Available Configuration Options{lang="en"}

::: en
Below are the available configuration options for the theme.
:::

## 可用配置选项{lang="zh-CN"}

::: zh-CN
以下是主题的可用配置选项。
:::

### Colors{lang="en"}

::: en
You can customize the primary color of the theme:
:::

### 颜色{lang="zh-CN"}

::: zh-CN
您可以自定义主题的主要颜色：
:::

```ts
themeConfig: {
  colors: {
    primary: '#0078E7' // Change to your preferred color
  }
}
```

### Logo{lang="en"}

::: en
Configure the logo display:
:::

### 徽标{lang="zh-CN"}

::: zh-CN
配置徽标显示：
:::

```ts
themeConfig: {
  logo: {
    enable: true, // Whether to show the logo
    component: 'Logo', // Component name to use as logo
    image: '/path/to/logo.png', // Optional: Image URL to use as logo
    svg: '<svg>...</svg>' // Optional: SVG content to use as logo
  }
}
```

### English Only Mode{lang="en"}

::: en
Enable or disable the English-only toggle feature:
:::

### 仅英文模式{lang="zh-CN"}

::: zh-CN
启用或禁用仅英文切换功能：
:::

```ts
themeConfig: {
  englishOnly: {
    enable: true, // Whether to enable the English Only toggle feature
    default: false // Default value for English Only mode
  }
}
```

### Navigation Bar{lang="en"}

::: en
Configure the main navigation menu:
:::

### 导航栏{lang="zh-CN"}

::: zh-CN
配置主导航菜单：
:::

```ts
themeConfig: {
  nav: [
    {
      text: 'Home',
      link: '/',
      icon: 'i-ri-home-line'
    },
    {
      text: 'Docs',
      link: '/docs',
      icon: 'i-ri-article-line'
    }
    // Add more navigation items as needed
  ]
}
```

::: en
Each navigation item can have the following properties:

- `text`: The display text
- `link`: The URL to navigate to
- `icon`: Optional icon (using Iconify format)
- `title`: Optional title attribute for the link
  :::

::: zh-CN
每个导航项可以具有以下属性：

- `text`：显示文本
- `link`：导航到的 URL
- `icon`：可选图标（使用 Iconify 格式）
- `title`：链接的可选标题属性
  :::

### Navigation Controls{lang="en"}

::: en
Configure the controls in the navigation bar:
:::

### 导航控件{lang="zh-CN"}

::: zh-CN
配置导航栏中的控件：
:::

```ts
themeConfig: {
  navControls: {
    localeToggle: true, // Whether to enable the locale toggle
    themeToggle: true // Whether to enable the theme toggle (light/dark mode)
  }
}
```

### Sub Navigation{lang="en"}

::: en
Configure the sub-navigation menu:
:::

### 子导航{lang="zh-CN"}

::: zh-CN
配置子导航菜单：
:::

```ts
themeConfig: {
  subNav: [
    {
      text: 'Documentation',
      link: '/docs'
    },
    {
      text: 'Talks',
      link: '/talks'
    }
    // Add more sub-navigation items as needed
  ]
}
```

### Footer{lang="en"}

::: en
Configure the footer section:
:::

### 页脚{lang="zh-CN"}

::: zh-CN
配置页脚部分：
:::

```ts
themeConfig: {
  footer: {
    since: 2022, // The year your site was established
    icon: {
      name: 'i-ri-cloud-line', // Icon name (Iconify format)
      animated: true, // Whether the icon should be animated
      color: 'var(--va-c-primary)', // Icon color
      url: 'https://example.com', // URL to navigate to when clicking the icon
      title: 'Icon Title' // Title attribute for the icon
    },
    powered: true, // Whether to show "Powered by Valaxy & valaxy-theme-antfu"
    beian: {
      enable: false, // Whether to enable beian information (for Chinese websites)
      icp: '' // ICP registration number
    }
  }
}
```

## Complete Configuration Example{lang="en"}

::: en
Here's a complete example of the theme configuration:
:::

## 完整配置示例{lang="zh-CN"}

::: zh-CN
以下是主题配置的完整示例：
:::

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  themeConfig: {
    colors: {
      primary: '#0078E7'
    },

    logo: {
      enable: true,
      component: 'Logo'
    },

    englishOnly: {
      enable: true,
      default: false
    },

    navControls: {
      localeToggle: true,
      themeToggle: true
    },

    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-ri-home-line'
      },
      {
        text: 'Docs',
        link: '/docs',
        icon: 'i-ri-article-line'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/username/repo',
        icon: 'i-ri-github-fill'
      }
    ],

    subNav: [
      {
        text: 'Documentation',
        link: '/docs'
      },
      {
        text: 'Blog',
        link: '/posts'
      }
    ],

    footer: {
      since: 2022,
      icon: {
        name: 'i-ri-cloud-line',
        animated: true,
        color: 'var(--va-c-primary)',
        url: 'https://example.com',
        title: 'Visit Example'
      },
      powered: true,
      beian: {
        enable: false,
        icp: ''
      }
    }
  }
})
```

## TypeScript Support{lang="en"}

::: en
The theme provides TypeScript type definitions to help you configure your theme with proper type checking and autocompletion. Make sure to import the correct types:
:::

## TypeScript 支持{lang="zh-CN"}

::: zh-CN
该主题提供 TypeScript 类型定义，以帮助您使用适当的类型检查和自动完成功能配置主题。确保导入正确的类型：
:::

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
```

::: en

> [!TIP]
> Using TypeScript types will give you autocompletion and type checking in your IDE, making it easier to configure the theme correctly.
> :::

::: zh-CN

> [!TIP]
> 使用 TypeScript 类型将在您的 IDE 中提供自动完成和类型检查功能，使您更容易正确配置主题。
> :::

## Advanced Configuration{lang="en"}

::: en
For more advanced configuration options, please refer to the [Valaxy documentation](https://valaxy.site/guide/config) and the [theme source code](https://github.com/wrxinyue/valaxy-theme-antfu).
:::

## 高级配置{lang="zh-CN"}

::: zh-CN
有关更高级的配置选项，请参阅 [Valaxy 文档](https://valaxy.site/guide/config) 和[主题源代码](https://github.com/wrxinyue/valaxy-theme-antfu)。
:::

::: en

> [!NOTE]
> This theme is built on top of Valaxy, so all Valaxy configuration options are also available.
> :::

::: zh-CN

> [!NOTE]
> 此主题是基于 Valaxy 构建的，因此所有 Valaxy 配置选项也可用。
> :::
