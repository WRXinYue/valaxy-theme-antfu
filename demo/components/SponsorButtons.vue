<template>
  <p>
    If you enjoy my work and find them useful,
    consider sponsor me and the ecosystem to help Open Source sustainable. Thank you!
  </p>

  <p flex="~ gap-2 wrap items-center">
    <SponsorButtonCollective />
    <span text-sm op50>
      <a href="/posts/sponsorship-forwarding" target="_blank">How does this work?</a>
    </span>
  </p>
  <p flex="~ gap-2 wrap">
    <a
      href="https://github.com/sponsors/antfu"
      target="_blank"
      class="inline-block group btn-rose"
    >
      <div

        group-hover="i-ph-heart-fill?mask text-rose"
        transition-all duration-200 ease-out i-ph-heart-duotone
      />
      Sponsor to support Anthony
    </a>
    <a
      href="https://afdian.com/a/antfu"
      target="_blank"
      class="group inline-block btn-yellow"
    >
      <div

        group-hover="i-ph-lightning-fill?mask text-yellow"
        transition-all duration-200 ease-out i-ph-lightning-duotone
      />
      在爱发电上支持我
    </a>
  </p>
</template>
