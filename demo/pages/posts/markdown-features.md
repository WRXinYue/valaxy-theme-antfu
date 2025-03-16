---
title: Markdown Features
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - markdown
  - toc
duration: 3min
type: docs
lang: en
---

[[toc]]

# Markdown Features{lang="en"}

::: en
This guide explains how to use various Markdown features in the `valaxy-theme-antfu` theme, including table of contents, admonitions, and more.
:::

# Markdown 功能{lang="zh-CN"}

::: zh-CN
本指南将解释如何在 `valaxy-theme-antfu` 主题中使用各种 Markdown 功能，包括目录、提示框等。
:::

## Table of Contents{lang="en"}

::: en
You can easily add a table of contents to your Markdown files using the `[[toc]]` directive. This will automatically generate a table of contents based on the headings in your document.
:::

## 目录{lang="zh-CN"}

::: zh-CN
您可以使用 `[[toc]]` 指令轻松地向 Markdown 文件添加目录。这将根据文档中的标题自动生成目录。
:::

### Usage{lang="en"}

::: en
Simply add `[[toc]]` at the beginning of your Markdown file or wherever you want the table of contents to appear:
:::

### 使用方法{lang="zh-CN"}

::: zh-CN
只需在 Markdown 文件的开头或您希望目录出现的位置添加 `[[toc]]`：
:::

```md
---
title: My Document
---

[[toc]]

# Introduction

Content here...

# Section 1

More content...

## Subsection 1.1

Even more content...
```

::: en
This will generate a nested list of links to all headings in your document, making it easy for readers to navigate through longer content.
:::

::: zh-CN
这将生成一个包含文档中所有标题链接的嵌套列表，使读者能够轻松浏览较长的内容。
:::

### Customization{lang="en"}

::: en
The table of contents is automatically styled to match the theme. It will display all heading levels by default.
:::

### 自定义{lang="zh-CN"}

::: zh-CN
目录会自动采用与主题匹配的样式。默认情况下，它将显示所有标题级别。
:::

## Code Blocks{lang="en"}

::: en
The theme supports syntax highlighting for code blocks. You can specify the language after the opening triple backticks:
:::

## 代码块{lang="zh-CN"}

::: zh-CN
主题支持代码块的语法高亮。您可以在开头的三个反引号后指定语言：
:::

```js
// JavaScript code with syntax highlighting
function greeting(name) {
  return `Hello, ${name}!`
}
```

```css
/* CSS code with syntax highlighting */
.container {
  display: flex;
  justify-content: center;
}
```

## Line Highlighting{lang="en"}

::: en
You can highlight specific lines in code blocks by adding line numbers in curly braces:
:::

## 行高亮{lang="zh-CN"}

::: zh-CN
您可以通过在花括号中添加行号来高亮代码块中的特定行：
:::

```js{2,4-5}
function example() {
  // This line is highlighted
  const a = 1
  // These lines are
  // also highlighted
  return a
}
```

## Inline Code{lang="en"}

::: en
You can use backticks to create `inline code` within your text.
:::

## 内联代码{lang="zh-CN"}

::: zh-CN
您可以使用反引号在文本中创建`内联代码`。
:::

## Links{lang="en"}

::: en
You can create [links](https://example.com) using the standard Markdown syntax.
:::

## 链接{lang="zh-CN"}

::: zh-CN
您可以使用标准 Markdown 语法创建[链接](https://example.com)。
:::

## Images{lang="en"}

::: en
Images can be added using the standard Markdown syntax:
:::

## 图片{lang="zh-CN"}

::: zh-CN
可以使用标准 Markdown 语法添加图片：
:::

```md
![Alt text](/path/to/image.jpg)
```

## Lists{lang="en"}

::: en
You can create ordered and unordered lists:
:::

## 列表{lang="zh-CN"}

::: zh-CN
您可以创建有序和无序列表：
:::

### Unordered Lists{lang="en"}

::: en

- Item 1
- Item 2
  - Nested item 1
  - Nested item 2
- Item 3
  :::

### 无序列表{lang="zh-CN"}

::: zh-CN

- 项目 1
- 项目 2
  - 嵌套项目 1
  - 嵌套项目 2
- 项目 3
  :::

### Ordered Lists{lang="en"}

::: en

1. First item
2. Second item
   1. Nested item 1
   2. Nested item 2
3. Third item
   :::

### 有序列表{lang="zh-CN"}

::: zh-CN

1. 第一项
2. 第二项
   1. 嵌套项目 1
   2. 嵌套项目 2
3. 第三项
   :::

## Tables{lang="en"}

::: en
You can create tables using the standard Markdown syntax:
:::

## 表格{lang="zh-CN"}

::: zh-CN
您可以使用标准 Markdown 语法创建表格：
:::

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Conclusion{lang="en"}

::: en
These are the basic Markdown features supported by the `valaxy-theme-antfu` theme. For more advanced features, please refer to the [Valaxy documentation](https://valaxy.site).
:::

## 结论{lang="zh-CN"}

::: zh-CN
这些是 `valaxy-theme-antfu` 主题支持的基本 Markdown 功能。有关更高级的功能，请参阅 [Valaxy 文档](https://valaxy.site)。
:::
