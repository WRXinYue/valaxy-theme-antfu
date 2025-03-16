---
title: Theme Contribution
display: 'Contribute'
---

<script setup>
import { useRoute } from 'vue-router'
import { computed, nextTick } from 'vue'

const route = useRoute()

const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const month = computed(() => monthes[+route.query.month - 1])
</script>

<h1 class="flex gap-2 items-center">
👋 Hello Contributors!
</h1>

<div class="prose m-auto mb-8 mt-6">
  <p>
    Thank you for your interest in contributing to the Valaxy Antfu Theme! This theme is an open-source project that welcomes contributions from the community.
  </p>

  <h2>Ways to Contribute</h2>

  <ul>
    <li><strong>Report Bugs</strong>: If you find a bug, please report it on our GitHub issues page.</li>
    <li><strong>Suggest Features</strong>: Have an idea for a new feature? Let us know!</li>
    <li><strong>Submit Pull Requests</strong>: Code contributions are always welcome.</li>
    <li><strong>Improve Documentation</strong>: Help us make our documentation better.</li>
    <li><strong>Share Your Site</strong>: Built something with this theme? Share it with us!</li>
  </ul>

  <h2>Development Setup</h2>

  <p>
    To contribute to the theme development, follow these steps:
  </p>

  <ol>
    <li>Fork the repository on GitHub</li>
    <li>Clone your fork locally</li>
    <li>Install dependencies with <code>npm install</code></li>
    <li>Start the development server with <code>npm run dev</code></li>
    <li>Make your changes</li>
    <li>Submit a pull request</li>
  </ol>
</div>

<div class="text-center mt-8">
  <a href="https://github.com/WRXinYue/valaxy-theme-antfu" target="_blank" class="btn">View on GitHub</a>
</div>
