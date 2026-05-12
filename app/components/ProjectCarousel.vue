<template>
  <div class="mx-auto" style="max-width: 600px">
    <div class="flex items-center gap-3">
      <button
        class="carousel-btn hidden md:flex"
        @click="scrollPrev"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon :icon="['fas', 'angle-left']" />
      </button>
      <div class="flex-1 min-w-0">
        <div class="overflow-hidden rounded-lg" ref="emblaRef">
          <div class="flex">
            <div v-for="(image, index) in images" :key="index" class="min-w-0 flex-[0_0_100%]">
              <div class="carousel-slide-frame">
                <img
                  :src="image"
                  :alt="`Screenshot ${index + 1}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-btn hidden md:flex"
        @click="scrollNext"
        aria-label="Next slide"
      >
        <FontAwesomeIcon :icon="['fas', 'angle-right']" />
      </button>
    </div>

    <div class="flex justify-center gap-2 mt-3">
      <button
        v-for="(_, index) in images"
        :key="index"
        class="w-2 h-2 rounded-full transition-colors"
        :class="index === selectedIndex ? 'bg-blueish-200' : 'bg-gray-300'"
        :aria-label="`Go to slide ${index + 1}`"
        @click="scrollTo(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

defineProps<{
  images: string[]
}>()

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true })

const selectedIndex = ref(0)

function updateState() {
  if (!emblaApi.value) return
  selectedIndex.value = emblaApi.value.selectedScrollSnap()
}

function scrollPrev() { emblaApi.value?.scrollPrev() }
function scrollNext() { emblaApi.value?.scrollNext() }
function scrollTo(index: number) { emblaApi.value?.scrollTo(index) }

onMounted(() => {
  const check = () => {
    if (!emblaApi.value) return
    updateState()
    emblaApi.value.on('select', updateState)
    emblaApi.value.on('reInit', updateState)
  }
  watch(emblaApi, check, { immediate: true })
})
</script>

<style scoped>
.carousel-slide-frame {
  aspect-ratio: 600 / 400;
  background-color: #f1f5f9;
}

.carousel-btn {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #343841;
  cursor: pointer;
  border: none;
  transition: background-color 0.15s;
}
.carousel-btn:hover {
  background-color: #e2e8f0;
}
</style>
