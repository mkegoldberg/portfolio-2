<template>
  <div v-if="project" class="px-4 py-8 sm:px-8 min-h-screen bg-white">
    <div class="flex flex-col md:flex-row content-container">
      <div class="hidden md:block pr-8">
        <img :src="project.thumbnailPath" height="75" width="75" class="rounded-full img-thumb" />
      </div>
      <div class="flex flex-1 justify-around">
        <div class="self-center flex-1">
          <h1 class="text-2xl md:text-4xl lg:text-5xl tracking-wide font-medium">
            {{ project.title }}
          </h1>
          <div class="gallery-link">
            <nuxt-link
              to="/#projects"
              class="no-underline text-salmon hover:text-salmon/75 text-sm"
            >
              View all projects
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="border-b border-charcoal/50 my-4 title-container" />
      <div class="flex justify-between items-center nav-links">
        <nuxt-link
          v-if="adjacent.prev"
          :to="`/projects/${adjacent.prev.slug}/`"
          class="flex items-center gap-1 no-underline text-salmon hover:text-salmon/75 text-sm"
        >
          <FontAwesomeIcon :icon="['fas', 'angle-left']" />
          <span class="hidden md:inline">{{ adjacent.prev.title }}</span>
          <span class="md:hidden">Prev</span>
        </nuxt-link>
        <span v-else />
        <nuxt-link
          v-if="adjacent.next"
          :to="`/projects/${adjacent.next.slug}/`"
          class="flex items-center gap-1 no-underline text-salmon hover:text-salmon/75 text-sm ml-auto"
        >
          <span class="hidden md:inline">{{ adjacent.next.title }}</span>
          <span class="md:hidden">Next</span>
          <FontAwesomeIcon :icon="['fas', 'angle-right']" />
        </nuxt-link>
      </div>

      <div class="mt-8">
        <ProjectCarousel v-if="project.images.length" :images="project.images" />
      </div>

      <div class="flex flex-wrap gap-2 mt-10">
        <span
          v-for="tech in project.techUsed"
          :key="tech"
          class="py-1 px-2 text-sm text-gray-700 bg-blueish-100/25 rounded"
        >
          {{ tech }}
        </span>
      </div>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="mt-6 max-w-none prose space-y-4" v-html="project.description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProjectBySlug, getAdjacentProjects } from '~/data/projects'

const route = useRoute()
const slug = route.params.slug as string
const project = getProjectBySlug(slug)
const adjacent = getAdjacentProjects(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({ title: project.title })
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
.nav-links {
  opacity: 0;
  animation: fade-in-right ease-out 0.5s forwards;
}
.title-container {
  transform: scaleX(0);
  transform-origin: left;
  animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
}
</style>
