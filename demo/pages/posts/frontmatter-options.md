---
title: Frontmatter Options
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - frontmatter
  - configuration
duration: 3min
type: docs
lang: en
top: 98
---

[[toc]]

# Frontmatter Options{lang="en"}

::: en
This guide explains the various frontmatter options available in the `valaxy-theme-antfu` theme and how to use them to customize your pages.
:::

# 前置元数据选项{lang="zh-CN"}

::: zh-CN
本指南将解释 `valaxy-theme-antfu` 主题中可用的各种前置元数据选项，以及如何使用它们来自定义您的页面。
:::

## What is Frontmatter?{lang="en"}

::: en
Frontmatter is the metadata section at the beginning of a Markdown file, enclosed by triple dashes (`---`). It contains information about the page, such as its title, date, tags, and other properties.
:::

## 什么是前置元数据？{lang="zh-CN"}

::: zh-CN
前置元数据是 Markdown 文件开头的元数据部分，由三个破折号（`---`）包围。它包含有关页面的信息，如标题、日期、标签和其他属性。
:::

```md
---
title: My Page Title
date: 2023-01-01
---
```

## Common Frontmatter Options{lang="en"}

::: en
Here are the common frontmatter options used in the `valaxy-theme-antfu` theme:
:::

## 常用前置元数据选项{lang="zh-CN"}

::: zh-CN
以下是 `valaxy-theme-antfu` 主题中使用的常用前置元数据选项：
:::

### title{lang="en"}

::: en
The `title` option sets the title of the page. It's used in the browser tab, meta tags, and typically as the main heading of the page.
:::

### title{lang="zh-CN"}

::: zh-CN
`title` 选项设置页面的标题。它用于浏览器标签、元标签，通常作为页面的主标题。
:::

```md
---
title: My Page Title
---
```

### display{lang="en"}

::: en
The `display` option allows you to set a different display name for the page in navigation menus, while keeping the original title for SEO and other purposes.
:::

### display{lang="zh-CN"}

::: zh-CN
`display` 选项允许您在导航菜单中为页面设置不同的显示名称，同时保留原始标题用于 SEO 和其他目的。
:::

```md
---
title: My Comprehensive Guide to Web Development
display: 'Web Dev Guide'
---
```

### subtitle{lang="en"}

::: en
The `subtitle` option adds a subtitle to the page, which is displayed below the main title in some layouts.
:::

### subtitle{lang="zh-CN"}

::: zh-CN
`subtitle` 选项为页面添加副标题，在某些布局中显示在主标题下方。
:::

```md
---
title: My Project
subtitle: A detailed overview of my latest work
---
```

### description{lang="en"}

::: en
The `description` option provides a brief description of the page content. It's used in meta tags for SEO and may be displayed in some layouts.
:::

### description{lang="zh-CN"}

::: zh-CN
`description` 选项提供页面内容的简短描述。它用于 SEO 的元标签，可能在某些布局中显示。
:::

```md
---
title: My Blog Post
description: In this post, I discuss the latest trends in web development and how they affect modern applications.
---
```

### date{lang="en"}

::: en
The `date` option specifies when the page was created or published. It's used for sorting posts and displaying the publication date.
:::

### date{lang="zh-CN"}

::: zh-CN
`date` 选项指定页面创建或发布的时间。它用于对文章进行排序和显示发布日期。
:::

```md
---
title: My Blog Post
date: 2023-01-01
---
```

### categories{lang="en"}

::: en
The `categories` option assigns the page to one or more categories. This helps organize your content and can be used for filtering.
:::

### categories{lang="zh-CN"}

::: zh-CN
`categories` 选项将页面分配到一个或多个类别。这有助于组织您的内容，可用于过滤。
:::

```md
---
title: My Blog Post
categories: Technology
---
```

Or multiple categories:

```md
---
title: My Blog Post
categories:
  - Technology
  - Web Development
---
```

### tags{lang="en"}

::: en
The `tags` option assigns tags to the page. Tags are similar to categories but are typically more specific and can be used for more granular organization.
:::

### tags{lang="zh-CN"}

::: zh-CN
`tags` 选项为页面分配标签。标签类似于类别，但通常更具体，可用于更精细的组织。
:::

```md
---
title: My Blog Post
tags:
  - javascript
  - react
  - web development
---
```

### type{lang="en"}

::: en
The `type` option specifies the type of content. This is used to categorize content for different purposes, such as distinguishing between blog posts, notes, demos, etc.
:::

### type{lang="zh-CN"}

::: zh-CN
`type` 选项指定内容的类型。这用于为不同目的对内容进行分类，例如区分博客文章、笔记、演示等。
:::

```md
---
title: Quick Tip
type: note
---
```

Common types include:

- `post` - Blog posts
- `note` - Short notes or tips
- `demo` - Interactive demonstrations
- `docs` - Documentation pages
- `talk` - Presentations or talks

### duration{lang="en"}

::: en
The `duration` option indicates how long it takes to read the content. This helps readers decide if they have time to read the article.
:::

### duration{lang="zh-CN"}

::: zh-CN
`duration` 选项表示阅读内容需要多长时间。这有助于读者决定是否有时间阅读文章。
:::

```md
---
title: My Blog Post
duration: 5min
---
```

### image{lang="en"}

::: en
The `image` option specifies an image associated with the page. This is often used for social media previews and featured images.
:::

### image{lang="zh-CN"}

::: zh-CN
`image` 选项指定与页面关联的图像。这通常用于社交媒体预览和特色图像。
:::

```md
---
title: My Blog Post
image: /path/to/image.jpg
---
```

## Visual Customization Options{lang="en"}

::: en
The `valaxy-theme-antfu` theme provides several options for visual customization:
:::

## 视觉自定义选项{lang="zh-CN"}

::: zh-CN
`valaxy-theme-antfu` 主题提供了几个视觉自定义选项：
:::

### art{lang="en"}

::: en
The `art` option adds a decorative background to the page header. The theme includes several built-in art styles.
:::

### art{lang="zh-CN"}

::: zh-CN
`art` 选项为页面标题添加装饰性背景。主题包含几种内置艺术风格。
:::

```md
---
title: My Page
art: plum
---
```

Available art styles:

- `plum` - A plum blossom pattern
- `dots` - A pattern of dots
- `random` - A randomly selected art style

### wrapperClass{lang="en"}

::: en
The `wrapperClass` option allows you to add custom CSS classes to the page wrapper element, giving you more control over the page's appearance.
:::

### wrapperClass{lang="zh-CN"}

::: zh-CN
`wrapperClass` 选项允许您向页面包装元素添加自定义 CSS 类，使您能够更好地控制页面的外观。
:::

```md
---
title: My Page
wrapperClass: 'text-center bg-gray-100'
---
```

## 布局选项{lang="zh-CN"}

::: zh-CN
您可以使用特殊注释或前置元数据选项自定义页面的布局：
:::

## Advanced Options{lang="en"}

::: en
Here are some advanced frontmatter options for specific use cases:
:::

## 高级选项{lang="zh-CN"}

::: zh-CN
以下是一些用于特定用例的高级前置元数据选项：
:::

### layout{lang="en"}

::: en
The `layout` option specifies the page layout. For detailed information about layouts, please see the [Layout Options](/posts/layout-options) guide.
:::

### layout{lang="zh-CN"}

::: zh-CN
`layout` 选项指定页面布局。有关布局的详细信息，请参阅[布局选项](/posts/layout-options)指南。
:::

```md
---
title: My Page
layout: full-width
---
```

### lang{lang="en"}

::: en
The `lang` option specifies the language of the page. This is used for internationalization and can affect how certain elements are displayed.
:::

### lang{lang="zh-CN"}

::: zh-CN
`lang` 选项指定页面的语言。这用于国际化，可能会影响某些元素的显示方式。
:::

```md
---
title: My Page
lang: en
---
```

### projects{lang="en"}

::: en
The `projects` option is used on the features page to define a list of projects or features to display:
:::

### projects{lang="zh-CN"}

::: zh-CN
`projects` 选项用于功能页面，定义要显示的项目或功能列表：
:::

```md
---
title: Features
projects:
  Group 1:
    - name: 'Feature 1'
      link: '/feature1'
      desc: 'Description of feature 1'
      icon: 'i-carbon-rocket'
    - name: 'Feature 2'
      link: '/feature2'
      desc: 'Description of feature 2'
      icon: 'i-carbon-document'
  Group 2:
    - name: 'Feature 3'
      link: '/feature3'
      desc: 'Description of feature 3'
      icon: 'i-carbon-code'
---

<AntfuListProjects :projects="frontmatter.projects" />
```

### items{lang="en"}

::: en
The `items` option is used to define additional items to display in list components:
:::

### items{lang="zh-CN"}

::: zh-CN
`items` 选项用于定义要在列表组件中显示的其他项目：
:::

```md
---
title: Talks
items:
  - title: 'Upcoming Talk'
    date: '2023-06-01'
    desc: 'A talk about web development'
    link: 'https://example.com'
---

<AntfuListPosts type="talk" :extra="frontmatter.items" />
```

## Conclusion{lang="en"}

::: en
By using these frontmatter options, you can customize the appearance and behavior of your pages in the `valaxy-theme-antfu` theme. Experiment with different combinations to create a unique and engaging site.
:::

## 结论{lang="zh-CN"}

::: zh-CN
通过使用这些前置元数据选项，您可以在 `valaxy-theme-antfu` 主题中自定义页面的外观和行为。尝试不同的组合，创建独特且吸引人的网站。
:::
