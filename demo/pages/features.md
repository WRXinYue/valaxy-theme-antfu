---
title: Theme Features
display: Features
description: List of features and components available in this theme
wrapperClass: 'text-center'
art: dots
projects:
  Core Features:
    - name: 'Responsive Design'
      link: '/docs/features/responsive'
      desc: 'Looks great on all devices from mobile to desktop'
      icon: 'i-carbon-devices'
    - name: 'Dark Mode'
      link: '/docs/features/dark-mode'
      desc: 'Built-in dark mode with smooth transitions'
      icon: 'i-carbon-moon'
    - name: 'Fast Performance'
      link: '/docs/features/performance'
      desc: 'Optimized for speed and efficiency'
      icon: 'i-carbon-rocket'

  Components:
    - name: 'Custom Navigation'
      link: '/docs/components/navigation'
      desc: 'Flexible navigation components for your site'
      icon: 'i-carbon-navigation'
    - name: 'Markdown Extensions'
      link: '/docs/components/markdown'
      desc: 'Enhanced markdown with custom components'
      icon: 'i-carbon-document'
    - name: 'Code Highlighting'
      link: '/docs/components/code'
      desc: 'Beautiful syntax highlighting for code blocks'
      icon: 'i-carbon-code'
    - name: 'Interactive Cards'
      link: '/docs/components/cards'
      desc: 'Animated and interactive card components'
      icon: 'i-carbon-3d-cursor'
    - name: 'Custom Layouts'
      link: '/docs/components/layouts'
      desc: 'Multiple layout options for different content types'
      icon: 'i-carbon-template'

  Integrations:
    - name: 'SEO Optimized'
      link: '/docs/integrations/seo'
      desc: 'Built-in SEO features for better discoverability'
      icon: 'i-carbon-search'
    - name: 'Analytics Ready'
      link: '/docs/integrations/analytics'
      desc: 'Easy integration with popular analytics platforms'
      icon: 'i-carbon-chart-line'
    - name: 'Social Sharing'
      link: '/docs/integrations/social'
      desc: 'Share your content across social platforms'
      icon: 'i-carbon-share'
    - name: 'RSS Feed'
      link: '/docs/integrations/rss'
      desc: 'Automatic RSS feed generation'
      icon: 'i-carbon-rss'

  Customization:
    - name: 'Theme Configuration'
      link: '/docs/customization/config'
      desc: 'Extensive configuration options'
      icon: 'i-carbon-settings'
    - name: 'Custom CSS'
      link: '/docs/customization/css'
      desc: 'Easily extend with your own styles'
      icon: 'i-carbon-paint-brush'
    - name: 'Color Schemes'
      link: '/docs/customization/colors'
      desc: 'Multiple color schemes to choose from'
      icon: 'i-carbon-color-palette'
    - name: 'Typography'
      link: '/docs/customization/typography'
      desc: 'Fine-tune typography to your liking'
      icon: 'i-carbon-text-font'
---

<!-- @layout-full-width -->

<AntfuListProjects :projects="frontmatter.projects" />
