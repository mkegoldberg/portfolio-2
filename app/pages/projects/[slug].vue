<template>
  <div v-if="project" class="px-4 py-8 sm:px-8 min-h-screen bg-white">
    <div class="flex flex-col md:flex-row content-container">
      <div class="hidden md:block pr-8">
        <img :src="project.thumbnailPath" height="75" width="75" class="rounded-full img-thumb" />
      </div>
      <div class="flex flex-1 justify-around">
        <div class="self-center flex-1">
          <h1 class="text-2xl md:text-4xl lg:text-5xl tracking-wide">
            {{ project.title }}
          </h1>
          <div class="gallery-link">
            <nuxt-link
              to="/?goTo=gallery"
              class="no-underline text-blueish-200 hover:text-blueish-200/75 text-sm"
            >
              View all projects
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="border-b border-slate-400 my-4 title-container" />
      <div class="flex justify-between flex-wrap"></div>
    </div>

    <h1 class="text-4xl font-bold">{{ project.title }}</h1>
    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="tech in project.techUsed"
        :key="tech"
        class="py-1 px-2 text-sm text-gray-700 bg-gray-100 rounded"
      >
        {{ tech }}
      </span>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="mt-6 max-w-none prose" v-html="project.description" />
  </div>
</template>

<script setup lang="ts">
import { getProjectBySlug } from '~/data/projects'

const route = useRoute()
const slug = route.params.slug as string
const project = getProjectBySlug(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}
</script>

<style scoped>
h1,
.gallery-link {
  opacity: 0;
  animation: fade-in-right ease-out 0.5s forwards;
}
.img-thumb {
  opacity: 0;
  animation: fade-in-bottom ease-out 0.5s forwards;
}
.title-container {
  transform: scaleX(0);
  transform-origin: left;
  animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
}
</style>
