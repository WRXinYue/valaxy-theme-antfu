---
title: Page Types
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - pages
  - structure
duration: 4min
type: docs
lang: en
top: 99
---

# Page Types{lang="en"}

::: en
This guide explains the different page types available in the `valaxy-theme-antfu` theme and how to create them.
:::

# 页面类型{lang="zh-CN"}

::: zh-CN
本指南将解释 `valaxy-theme-antfu` 主题中可用的不同页面类型以及如何创建它们。
:::

## Page Structure{lang="en"}

::: en
In Valaxy, pages are organized in the `pages` directory of your project. By default, a new Valaxy site doesn't have any pages except for the index page. You'll need to create the page structure yourself.
:::

## 页面结构{lang="zh-CN"}

::: zh-CN
在 Valaxy 中，页面被组织在项目的 `pages` 目录中。默认情况下，新的 Valaxy 站点除了索引页面外没有任何页面。您需要自己创建页面结构。
:::

### Basic Directory Structure{lang="en"}

::: en
Here's a typical directory structure for a Valaxy site using the `valaxy-theme-antfu` theme:
:::

### 基本目录结构{lang="zh-CN"}

::: zh-CN
以下是使用 `valaxy-theme-antfu` 主题的 Valaxy 站点的典型目录结构：
:::

```
pages/
├── index.md           # Home page
├── posts/             # Blog posts directory
│   ├── post1.md
│   └── post2.md
├── notes/             # Notes directory
│   ├── index.md       # Notes landing page
│   ├── note1.md
│   └── note2.md
├── demos/             # Demos directory
│   ├── index.md       # Demos landing page
│   └── demo1.md
├── talks.md           # Talks page
├── features.md        # Features page
├── notes.md           # Notes landing page
└── demos.md           # Demos landing page
```

## Home Page (index.md){lang="en"}

::: en
The home page is the main entry point of your site. It's defined in `pages/index.md`.
:::

## 主页 (index.md){lang="zh-CN"}

::: zh-CN
主页是您网站的主要入口点。它在 `pages/index.md` 中定义。
:::

### Example{lang="en"}

::: en
Here's an example of a home page:
:::

### 示例{lang="zh-CN"}

::: zh-CN
以下是主页的示例：
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

## Blog Posts{lang="en"}

::: en
Blog posts are stored in the `pages/posts` directory. Each post is a Markdown file with frontmatter.
:::

## 博客文章{lang="zh-CN"}

::: zh-CN
博客文章存储在 `pages/posts` 目录中。每篇文章都是一个带有前置元数据的 Markdown 文件。
:::

### Creating a Blog Post{lang="en"}

::: en
To create a blog post, add a new Markdown file to the `pages/posts` directory:
:::

### 创建博客文章{lang="zh-CN"}

::: zh-CN
要创建博客文章，请在 `pages/posts` 目录中添加一个新的 Markdown 文件：
:::

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

## Notes{lang="en"}

::: en
Notes are shorter, more concise pieces of content. They're stored in the `pages/notes` directory.
:::

## 笔记{lang="zh-CN"}

::: zh-CN
笔记是更短、更简洁的内容。它们存储在 `pages/notes` 目录中。
:::

### Notes Landing Page{lang="en"}

::: en
The notes landing page (`pages/notes.md`) serves as an entry point to your notes:
:::

### 笔记着陆页{lang="zh-CN"}

::: zh-CN
笔记着陆页（`pages/notes.md`）作为您笔记的入口点：
:::

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

### Creating Notes{lang="en"}

::: en
To create a note, add a new Markdown file to the `pages/notes` directory:
:::

### 创建笔记{lang="zh-CN"}

::: zh-CN
要创建笔记，请在 `pages/notes` 目录中添加一个新的 Markdown 文件：
:::

```md
---
title: Quick Tip
date: 2023-01-01
type: note
---

# Quick Tip

Here's a quick tip about something useful.
```

## Demos{lang="en"}

::: en
Demos showcase interactive components or features. They're stored in the `pages/demos` directory.
:::

## 演示{lang="zh-CN"}

::: zh-CN
演示展示交互式组件或功能。它们存储在 `pages/demos` 目录中。
:::

### Demos Landing Page{lang="en"}

::: en
The demos landing page (`pages/demos.md`) serves as an entry point to your demos:
:::

### 演示着陆页{lang="zh-CN"}

::: zh-CN
演示着陆页（`pages/demos.md`）作为您演示的入口点：
:::

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

### Creating Demos{lang="en"}

::: en
To create a demo, add a new Markdown file to the `pages/demos` directory:
:::

### 创建演示{lang="zh-CN"}

::: zh-CN
要创建演示，请在 `pages/demos` 目录中添加一个新的 Markdown 文件：
:::

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

## Features Page{lang="en"}

::: en
The features page (`pages/features.md`) showcases the features of your project or theme:
:::

## 功能页面{lang="zh-CN"}

::: zh-CN
功能页面（`pages/features.md`）展示您的项目或主题的功能：
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

## Talks Page{lang="en"}

::: en
The talks page (`pages/talks.md`) can be used to showcase presentations, talks, or other content:
:::

## 演讲页面{lang="zh-CN"}

::: zh-CN
演讲页面（`pages/talks.md`）可用于展示演示文稿、演讲或其他内容：
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

## Conclusion{lang="en"}

::: en
By creating these different page types, you can build a rich and diverse site using the `valaxy-theme-antfu` theme. Each page type serves a specific purpose and helps organize your content in a meaningful way.
:::

## 结论{lang="zh-CN"}

::: zh-CN
通过创建这些不同的页面类型，您可以使用 `valaxy-theme-antfu` 主题构建丰富多样的网站。每种页面类型都有特定的用途，有助于以有意义的方式组织您的内容。
:::
