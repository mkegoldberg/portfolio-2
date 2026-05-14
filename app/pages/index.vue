<script setup lang="ts">
useHead({ title: 'Portfolio' })
</script>

<template>
  <div>
    <Hero />

    <div
      class="px-2 pt-56 pb-32 text-4xl leading-tight text-center md:px-4 lg:pt-48 xl:px-8 tag-line"
    >
      Frontend Developer:<br class="md:hidden" />
      Driven by passion...<br class="lg:hidden" />
      Fueled by coffee.
    </div>

    <Bio />

    <Gallery id="projects" />
  </div>
</template>

<style>
.tag-line {
  opacity: 0;
  animation: fade-in-left ease-out 1s forwards;
}
</style>
