<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section class="py-24">
    <div class="content-container">
      <h3 class="pb-6 text-4xl font-normal tracking-wide text-center">My Projects</h3>
      <div class="md:flex md:flex-wrap md:content-start">
        <div v-for="(item, key) in projects" :key="key" class="p-4 md:w-1/3">
          <div class="text-center text-grey-darker">
            <NuxtLink :to="item.path">
              <img
                :src="item.thumbnailPath"
                :alt="item.title"
                class="mb-4 md:transition-all md:hover:scale-105 md:hover:shadow-[9px_14px_32px_-13px_rgba(0,0,0,0.64)]"
              />
            </NuxtLink>
            <div>
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
