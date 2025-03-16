---
title: Site Structure
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - structure
  - setup
duration: 5min
type: docs
lang: en
---

[[toc]]

# Site Structure{lang="en"}

::: en
This guide explains how to set up a proper site structure for your Valaxy site using the `valaxy-theme-antfu` theme.
:::

# 站点结构{lang="zh-CN"}

::: zh-CN
本指南将解释如何使用 `valaxy-theme-antfu` 主题为您的 Valaxy 站点设置适当的站点结构。
:::

## Overview{lang="en"}

::: en
When you first create a Valaxy site, it only includes a basic structure with an index page. To take full advantage of the `valaxy-theme-antfu` theme, you'll need to create additional pages and directories.
:::

## 概述{lang="zh-CN"}

::: zh-CN
当您首次创建 Valaxy 站点时，它只包含带有索引页面的基本结构。要充分利用 `valaxy-theme-antfu` 主题，您需要创建额外的页面和目录。
:::

## Basic Directory Structure{lang="en"}

::: en
Here's the recommended directory structure for a Valaxy site using the `valaxy-theme-antfu` theme:
:::

## 基本目录结构{lang="zh-CN"}

::: zh-CN
以下是使用 `valaxy-theme-antfu` 主题的 Valaxy 站点的推荐目录结构：
:::

```
your-valaxy-site/
├── pages/
│   ├── index.md           # Home page
│   ├── posts/             # Blog posts directory
│   │   ├── post1.md
│   │   └── post2.md
│   ├── notes/             # Notes directory
│   │   ├── index.md       # Notes landing page
│   │   ├── note1.md
│   │   └── note2.md
│   ├── demos/             # Demos directory
│   │   ├── index.md       # Demos landing page
│   │   └── demo1.md
│   ├── talks.md           # Talks page
│   ├── features.md        # Features page
│   ├── notes.md           # Notes landing page
│   └── demos.md           # Demos landing page
├── public/                # Static assets
├── components/            # Custom components
├── styles/                # Custom styles
├── valaxy.config.ts       # Valaxy configuration
└── site.config.ts         # Site configuration
```

## Setting Up Your Site{lang="en"}

::: en
Follow these steps to set up a proper site structure:
:::

## 设置您的站点{lang="zh-CN"}

::: zh-CN
按照以下步骤设置适当的站点结构：
:::

### 1. Create the Home Page{lang="en"}

::: en
Start by creating or updating your home page at `pages/index.md`:
:::

### 1. 创建主页{lang="zh-CN"}

::: zh-CN
首先创建或更新位于 `pages/index.md` 的主页：
:::

```md
---
title: My Valaxy Site
description: A personal site built with Valaxy
image: https://example.com/og.png
art: plum
---

<AntfuSubNav />

## About Me

Hello! I'm a developer passionate about web technologies.

## My Projects

<div grid="~ cols-[max-content_1fr] gap-1">
  <div text-right pr2 op50 font-bold>Project 1</div>
  <AntfuTextCopy>My awesome project</AntfuTextCopy>

  <div text-right pr2 op50 font-bold>Project 2</div>
  <AntfuTextCopy>Another great project</AntfuTextCopy>
</div>
```

### 2. Create the Posts Directory{lang="en"}

::: en
Create a directory for your blog posts:
:::

### 2. 创建文章目录{lang="zh-CN"}

::: zh-CN
为您的博客文章创建一个目录：
:::

```bash
mkdir -p pages/posts
```

Add some blog posts to this directory:

```md
---
title: My First Blog Post
date: 2023-01-01
categories: Technology
tags:
  - web
  - javascript
duration: 5min
---

# My First Blog Post

This is the content of my first blog post.
```

### 3. Create the Notes Structure{lang="en"}

::: en
Set up the notes structure:
:::

### 3. 创建笔记结构{lang="zh-CN"}

::: zh-CN
设置笔记结构：
:::

```bash
mkdir -p pages/notes
```

Create a notes landing page at `pages/notes.md`:

```md
---
title: My Notes
art: plum
display: 'Notes'
---

<AntfuSubNav />

<div class="prose m-auto mb-8 mt-6">
  <p>
    A collection of my notes on various topics.
  </p>
</div>

<AntfuListPosts only-date type="note" />
```

Add some notes to the `pages/notes` directory:

```md
---
title: Quick Tip
date: 2023-01-01
type: note
---

# Quick Tip

Here's a quick tip about something useful.
```

### 4. Create the Demos Structure{lang="en"}

::: en
Set up the demos structure:
:::

### 4. 创建演示结构{lang="zh-CN"}

::: zh-CN
设置演示结构：
:::

```bash
mkdir -p pages/demos
```

Create a demos landing page at `pages/demos.md`:

```md
---
title: Demos
display: Components
subtitle: Interactive demonstrations
description: Interactive demonstrations of theme components
art: dots
---

<!-- @layout-full-width -->

<AntfuListDemos />
```

Add some demos to the `pages/demos` directory:

```md
---
title: Button Demo
date: 2023-01-01
type: demo
---

# Button Demo

<div class="flex gap-2">
  <button class="btn">Default</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

### 5. Create a Features Page{lang="en"}

::: en
Create a features page at `pages/features.md`:
:::

### 5. 创建功能页面{lang="zh-CN"}

::: zh-CN
在 `pages/features.md` 创建功能页面：
:::

```md
---
title: Features
display: Features
description: List of features available
wrapperClass: 'text-center'
art: dots
projects:
  Core Features:
    - name: 'Feature 1'
      link: '/docs/feature1'
      desc: 'Description of feature 1'
      icon: 'i-carbon-rocket'
    - name: 'Feature 2'
      link: '/docs/feature2'
      desc: 'Description of feature 2'
      icon: 'i-carbon-document'
---

<!-- @layout-full-width -->

<AntfuListProjects :projects="frontmatter.projects" />
```

### 6. Create a Talks Page{lang="en"}

::: en
Create a talks page at `pages/talks.md`:
:::

### 6. 创建演讲页面{lang="zh-CN"}

::: zh-CN
在 `pages/talks.md` 创建演讲页面：
:::

```md
---
title: Talks
display: 'Talks'
art: plum
---

<AntfuSubNav />

<div pt-5 />

# My Talks

| Talk             | Event        | Date       | Links                  |
| ---------------- | ------------ | ---------- | ---------------------- |
| **Talk Title 1** | Conference 1 | 2023-01-01 | [Slides](#) [Video](#) |
| **Talk Title 2** | Conference 2 | 2023-02-01 | [Slides](#) [Video](#) |

<h1 important="mb--4 mt-15">Upcoming Talks</h1>

<AntfuListPosts type="talk" :extra="frontmatter.items" />
```

## Configuring Navigation{lang="en"}

::: en
After creating your pages, you'll need to update your theme configuration to include them in the navigation menu. Edit your `valaxy.config.ts` file:
:::

## 配置导航{lang="zh-CN"}

::: zh-CN
创建页面后，您需要更新主题配置以将它们包含在导航菜单中。编辑您的 `valaxy.config.ts` 文件：
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

## Adding Custom Components{lang="en"}

::: en
You can create custom components to enhance your site. Place them in the `components` directory:
:::

## 添加自定义组件{lang="zh-CN"}

::: zh-CN
您可以创建自定义组件来增强您的网站。将它们放在 `components` 目录中：
:::

```bash
mkdir -p components
```

For example, create a custom button component at `components/MyButton.vue`:

```vue
<script setup>
defineProps({
  primary: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="my-button" :class="{ 'is-primary': primary }">
    <slot />
  </button>
</template>

<style scoped>
.my-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  cursor: pointer;
}

.my-button.is-primary {
  background-color: var(--va-c-primary);
  color: white;
  border: 1px solid var(--va-c-primary-dark);
}
</style>
```

Then use it in your Markdown files:

```md
<MyButton>Click Me</MyButton>
<MyButton primary>Primary Button</MyButton>
```

## Adding Custom Styles{lang="en"}

::: en
You can add custom styles to customize the appearance of your site. Create a `styles` directory:
:::

## 添加自定义样式{lang="zh-CN"}

::: zh-CN
您可以添加自定义样式来自定义网站的外观。创建一个 `styles` 目录：
:::

```bash
mkdir -p styles
```

Create a custom CSS file at `styles/custom.css`:

```css
/* Custom styles */
.prose h1 {
  color: var(--va-c-primary);
}

.custom-container {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
}
```

Then import it in your `valaxy.config.ts` file:

```ts
import type { ThemeConfig } from 'valaxy-theme-antfu'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'antfu',

  // Import custom styles
  unocss: {
    safelist: [
      'i-ri-home-line',
      'i-ri-article-line',
      'i-ri-sticky-note-line',
      'i-ri-code-box-line',
      'i-ri-presentation-line',
      'i-ri-function-line'
    ]
  },

  // Other configuration options...
})
```

## Conclusion{lang="en"}

::: en
By following this guide, you've set up a proper site structure for your Valaxy site using the `valaxy-theme-antfu` theme. This structure provides a solid foundation for your content and makes it easy to navigate and maintain.
:::

## 结论{lang="zh-CN"}

::: zh-CN
通过遵循本指南，您已经使用 `valaxy-theme-antfu` 主题为您的 Valaxy 站点设置了适当的站点结构。这种结构为您的内容提供了坚实的基础，使其易于导航和维护。
:::
