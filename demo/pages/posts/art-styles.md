---
title: Art Styles
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - art
  - styling
duration: 2min
type: docs
lang: en
---

[[toc]]

# Art Styles{lang="en"}

::: en
This guide explains the different art styles available in the `valaxy-theme-antfu` theme and how to use them to enhance your pages.
:::

# 艺术风格{lang="zh-CN"}

::: zh-CN
本指南将解释 `valaxy-theme-antfu` 主题中可用的不同艺术风格，以及如何使用它们来增强您的页面。
:::

## What Are Art Styles?{lang="en"}

::: en
Art styles are decorative backgrounds that can be applied to the header section of your pages. They add visual interest and help differentiate between different sections of your site.
:::

## 什么是艺术风格？{lang="zh-CN"}

::: zh-CN
艺术风格是可以应用于页面标题部分的装饰性背景。它们增加视觉趣味，帮助区分网站的不同部分。
:::

## Available Art Styles{lang="en"}

::: en
The `valaxy-theme-antfu` theme includes several built-in art styles:
:::

## 可用艺术风格{lang="zh-CN"}

::: zh-CN
`valaxy-theme-antfu` 主题包含几种内置艺术风格：
:::

### Plum{lang="en"}

::: en
The `plum` art style displays an animated plum blossom pattern. It's elegant and subtle, making it suitable for most pages.
:::

### 梅花{lang="zh-CN"}

::: zh-CN
`plum` 艺术风格显示动画梅花图案。它优雅而微妙，适合大多数页面。
:::

```md
---
title: My Page
art: plum
---
```

### Dots{lang="en"}

::: en
The `dots` art style displays a pattern of dots. It's modern and minimalist, making it suitable for technical or feature-focused pages.
:::

### 点阵{lang="zh-CN"}

::: zh-CN
`dots` 艺术风格显示点阵图案。它现代而简约，适合技术或功能专注的页面。
:::

```md
---
title: My Page
art: dots
---
```

### Random{lang="en"}

::: en
The `random` art style randomly selects one of the available art styles each time the page is loaded. This adds variety to your site.
:::

### 随机{lang="zh-CN"}

::: zh-CN
`random` 艺术风格在每次加载页面时随机选择一种可用的艺术风格。这为您的网站增添了多样性。
:::

```md
---
title: My Page
art: random
---
```

## Using Art Styles{lang="en"}

::: en
To use an art style, add the `art` property to the frontmatter of your Markdown file:
:::

## 使用艺术风格{lang="zh-CN"}

::: zh-CN
要使用艺术风格，请将 `art` 属性添加到 Markdown 文件的前置元数据中：
:::

```md
---
title: My Page
art: plum
---
```

## Combining Art Styles with Other Options{lang="en"}

::: en
Art styles can be combined with other frontmatter options to create visually appealing pages:
:::

## 将艺术风格与其他选项结合{lang="zh-CN"}

::: zh-CN
艺术风格可以与其他前置元数据选项结合，创建视觉吸引力的页面：
:::

```md
---
title: My Feature Page
display: 'Features'
description: 'A showcase of our amazing features'
art: dots
wrapperClass: 'text-center'
---
```

## Art Styles for Different Page Types{lang="en"}

::: en
Different art styles work well for different types of pages:
:::

## 不同页面类型的艺术风格{lang="zh-CN"}

::: zh-CN
不同的艺术风格适用于不同类型的页面：
:::

### Home Page{lang="en"}

::: en
For the home page, the `plum` art style creates an elegant and welcoming impression:
:::

### 主页{lang="zh-CN"}

::: zh-CN
对于主页，`plum` 艺术风格创造优雅和欢迎的印象：
:::

```md
---
title: My Valaxy Site
description: A personal site built with Valaxy
art: plum
---
```

### Feature Pages{lang="en"}

::: en
For feature pages, the `dots` art style provides a modern and technical feel:
:::

### 功能页面{lang="zh-CN"}

::: zh-CN
对于功能页面，`dots` 艺术风格提供现代和技术感：
:::

```md
---
title: Features
display: 'Features'
description: 'A showcase of our amazing features'
art: dots
---
```

### Blog Posts{lang="en"}

::: en
For blog posts, you might want to use different art styles based on the content category:
:::

### 博客文章{lang="zh-CN"}

::: zh-CN
对于博客文章，您可能希望根据内容类别使用不同的艺术风格：
:::

```md
---
title: Technical Tutorial
date: 2023-01-01
categories: Technology
art: dots
---
```

```md
---
title: Personal Reflection
date: 2023-01-02
categories: Personal
art: plum
---
```

## Disabling Art Styles{lang="en"}

::: en
If you prefer not to use an art style on a particular page, simply omit the `art` property from the frontmatter:
:::

## 禁用艺术风格{lang="zh-CN"}

::: zh-CN
如果您不想在特定页面上使用艺术风格，只需从前置元数据中省略 `art` 属性：
:::

```md
---
title: My Page
---
```

## Conclusion{lang="en"}

::: en
Art styles are a simple way to add visual interest to your pages in the `valaxy-theme-antfu` theme. By choosing the right art style for each page, you can create a cohesive and engaging user experience.
:::

## 结论{lang="zh-CN"}

::: zh-CN
艺术风格是在 `valaxy-theme-antfu` 主题中为页面添加视觉趣味的简单方法。通过为每个页面选择合适的艺术风格，您可以创建一个连贯且吸引人的用户体验。
:::
