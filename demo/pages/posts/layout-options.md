---
title: Layout Options
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - layout
  - configuration
duration: 2min
type: docs
lang: en
---

# Layout Options{lang="en"}

::: en
This guide explains the various layout options available in the `valaxy-theme-antfu` theme and how to use them to customize your pages.
:::

# 布局选项{lang="zh-CN"}

::: zh-CN
本指南将解释 `valaxy-theme-antfu` 主题中可用的各种布局选项，以及如何使用它们来自定义您的页面。
:::

## Using Layout Comments{lang="en"}

::: en
You can specify a layout using a special HTML comment:
:::

## 使用布局注释{lang="zh-CN"}

::: zh-CN
您可以使用特殊的 HTML 注释指定布局：
:::

```md
---
title: My Page
---

<!-- @layout-full-width -->

Content here will use the full-width layout.
```

Available layouts:

- `@layout-full-width` - Uses the full width of the screen
- `@layout-center` - Centers the content (default)

## Layout in Frontmatter{lang="en"}

::: en
Alternatively, you can specify the layout directly in the frontmatter:
:::

## 在前置元数据中指定布局{lang="zh-CN"}

::: zh-CN
或者，您可以直接在前置元数据中指定布局：
:::

```md
---
title: My Page
layout: full-width
---

Content here will use the full-width layout.
```

Available layout values:

- `full-width` - Uses the full width of the screen
- `center` - Centers the content (default)

## Custom Layouts{lang="en"}

::: en
If you need more customization, you can create custom layouts in your Valaxy project.
:::

## 自定义布局{lang="zh-CN"}

::: zh-CN
如果您需要更多自定义，可以在您的 Valaxy 项目中创建自定义布局。
:::

## Combining with Wrapper Classes{lang="en"}

::: en
For even more control over your layout, you can combine layout options with wrapper classes:
:::

## 与包装类结合{lang="zh-CN"}

::: zh-CN
为了对布局有更多控制，您可以将布局选项与包装类结合：
:::

```md
---
title: My Page
layout: full-width
wrapperClass: 'prose-lg mx-auto px-4'
---
```

This gives you fine-grained control over the appearance of your pages while maintaining the overall theme structure.
