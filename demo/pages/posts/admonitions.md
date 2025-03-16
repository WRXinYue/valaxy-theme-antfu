---
title: Admonitions
date: 2025-03-16
categories: Documentation
tags:
  - valaxy
  - markdown
  - admonitions
duration: 1min
type: docs
lang: en
---

# Markdown Admonitions

Valaxy supports GitHub-style admonition syntax, which can be used to highlight important information. These admonitions will have different colors and icons when rendered, making your documentation clearer and easier to read.

## Syntax

The basic syntax for admonitions is:

```markdown
> [!TYPE]
> Content
```

Where `TYPE` can be one of the following:

### Admonition Types

Here are all the supported admonition types and their purposes:

#### Note

Highlights information that users should take into account, even when skimming.

```markdown
> [!NOTE]
> This is a note highlighting important information.
```

Rendered result:

> [!NOTE]
> This is a note highlighting important information.

#### Tip

Optional information to help a user be more successful.

```markdown
> [!TIP]
> This is a tip providing optional information to help users be more successful.
```

Rendered result:

> [!TIP]
> This is a tip providing optional information to help users be more successful.

#### Important

Crucial information necessary for users to succeed.

```markdown
> [!IMPORTANT]
> This is important information that users must know to succeed.
```

Rendered result:

> [!IMPORTANT]
> This is important information that users must know to succeed.

#### Warning

Critical content demanding immediate user attention due to potential risks.

```markdown
> [!WARNING]
> This is a warning alerting users to potential risks.
```

Rendered result:

> [!WARNING]
> This is a warning alerting users to potential risks.

#### Caution

Negative potential consequences of an action.

```markdown
> [!CAUTION]
> This is a caution advising about negative potential consequences of an action.
```

Rendered result:

> [!CAUTION]
> This is a caution advising about negative potential consequences of an action.

## Multi-line Content

Admonitions can contain multiple lines of content, just make sure each line has the proper indentation:

```markdown
> [!NOTE]
> This is the first line
>
> This is the second line, with an empty line in between
>
> - You can even use lists in admonitions
> - Second list item
```

Rendered result:

> [!NOTE]
> This is the first line
>
> This is the second line, with an empty line in between
>
> - You can even use lists in admonitions
> - Second list item

## Using in Valaxy

In Valaxy Markdown files, you can use these admonition syntaxes directly. They work in blog posts, documentation pages, or any other Markdown content.

This syntax is compatible with GitHub's admonition syntax, so your documentation will display correctly on GitHub as well.

## Best Practices

- **NOTE**: For general information that is not urgent but useful
- **TIP**: For providing extra help or suggestions
- **IMPORTANT**: For information that must be known
- **WARNING**: For situations that might cause problems
- **CAUTION**: For operations that need special care

Don't overuse admonitions, as this will diminish their effect. Only use them when you really need to emphasize important information.
