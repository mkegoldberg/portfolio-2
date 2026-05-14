<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeTooltip = ref<string | null>(null)
const bioSection = ref<HTMLElement | null>(null)
let hoverTimer: ReturnType<typeof setTimeout> | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null
let isTouch = false

function showTooltip(name: string) {
  if (isTouch) return
  clearTimers()
  hoverTimer = setTimeout(() => {
    activeTooltip.value = name
  }, 300)
}

function hideTooltip() {
  if (isTouch) return
  clearTimers()
  hideTimer = setTimeout(() => {
    activeTooltip.value = null
  }, 150)
}

function keepTooltip() {
  if (isTouch) return
  clearTimers()
}

function clearTimers() {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
}

function onTap(name: string) {
  isTouch = true
  activeTooltip.value = activeTooltip.value === name ? null : name
}

function onDocumentClick(e: Event) {
  if (!isTouch || !activeTooltip.value) return
  const el = bioSection.value
  if (!el) return
  const target = e.target as Node
  const tooltips = el.querySelectorAll('.bio-tooltip')
  const icons = el.querySelectorAll('.fa-layers')
  for (const node of [...tooltips, ...icons]) {
    if (node.contains(target)) return
  }
  activeTooltip.value = null
}

onMounted(() => document.addEventListener('click', onDocumentClick))
onUnmounted(() => document.removeEventListener('click', onDocumentClick))
</script>

<template>
  <section ref="bioSection" class="py-32 text-white bg-blueish-500">
    <div class="content-container px-4 tracking-wide md:px-8">
      <h3 class="pb-6 text-4xl font-normal text-center">A Little About Me</h3>
      <div class="flex flex-col py-10 md:flex-row">
        <div class="relative text-center md:w-1/3">
          <Transition name="tooltip">
            <div
              v-show="activeTooltip === 'design'"
              class="bio-tooltip"
              @mouseenter="keepTooltip"
              @mouseleave="hideTooltip"
            >
              <p>
                From wireframes to high-res mockups, I bring ideas to life visually. My toolkit
                includes Figma, Zeplin, Excalidraw, Balsamiq, and more recently Google Sketch and
                Claude Design. I'm enjoying learning the new AI design tools, and they've quickly
                become a big part of my workflow.
              </p>
              <div class="bio-tooltip-arrow" />
            </div>
          </Transition>
          <FontAwesomeLayers
            class="text-8xl cursor-pointer"
            @mouseenter="showTooltip('design')"
            @mouseleave="hideTooltip"
            @touchstart.passive="onTap('design')"
          >
            <FontAwesomeIcon :icon="['fas', 'circle']" />
            <FontAwesomeIcon
              :icon="['fas', 'paint-brush']"
              class="text-salmon"
              transform="shrink-8"
            />
          </FontAwesomeLayers>
          <div class="pt-4 text-3xl font-medium">I Design</div>
        </div>
        <div class="relative py-16 text-center md:py-0 md:w-1/3">
          <Transition name="tooltip">
            <div
              v-show="activeTooltip === 'develop'"
              class="bio-tooltip"
              @mouseenter="keepTooltip"
              @mouseleave="hideTooltip"
            >
              <p>
                I stay current with the latest front-end tools and technologies, with deep expertise
                in Vue and Nuxt. I also use AI tools like Claude Code as an advanced development
                partner to accelerate workflows and problem-solving. My experience spans both
                high-converting marketing sites and large-scale software platforms focused on
                creating intuitive user experiences.
              </p>
              <div class="bio-tooltip-arrow" />
            </div>
          </Transition>
          <FontAwesomeLayers
            class="text-8xl cursor-pointer"
            @mouseenter="showTooltip('develop')"
            @mouseleave="hideTooltip"
            @touchstart.passive="onTap('develop')"
          >
            <FontAwesomeIcon :icon="['fas', 'circle']" />
            <FontAwesomeIcon :icon="['fas', 'code']" class="text-salmon" transform="shrink-8" />
          </FontAwesomeLayers>
          <div class="pt-4 text-3xl font-medium">I Develop</div>
        </div>
        <div class="relative text-center md:w-1/3">
          <Transition name="tooltip">
            <div
              v-show="activeTooltip === 'connect'"
              class="bio-tooltip"
              @mouseenter="keepTooltip"
              @mouseleave="hideTooltip"
            >
              <p>
                I'd love to connect! Visit my
                <a
                  href="https://www.linkedin.com/in/mkegold/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-salmon font-semibold underline hover:text-salmon/75"
                  @click.stop
                  >LinkedIn profile</a
                >
                for a more in-depth look at my experience, and feel free to send me a message.
              </p>
              <div class="bio-tooltip-arrow" />
            </div>
          </Transition>
          <FontAwesomeLayers
            class="text-8xl cursor-pointer"
            @mouseenter="showTooltip('connect')"
            @mouseleave="hideTooltip"
            @touchstart.passive="onTap('connect')"
          >
            <FontAwesomeIcon :icon="['fas', 'circle']" />
            <FontAwesomeIcon
              :icon="['fab', 'square-linkedin']"
              class="text-salmon"
              transform="shrink-8"
            />
          </FontAwesomeLayers>
          <div class="pt-4 text-3xl font-medium">Let's Connect</div>
        </div>
      </div>
      <p class="text-xl leading-normal text-justify">
        With a diverse professional journey of roles ranging from sales and account management to
        project management, my knack for organization and follow-through has allowed me to excel at
        my previous positions. Since 2012, I have steered in a different direction and honed my
        technical skills in visual design and web development. My passion truly lies in frontend
        development and I find gratification in producing a polished and functional web application.
        My dynamic career trajectory has equipped me with adaptive problem-solving skills, effective
        communication, an appreciation for client needs, and with an unwavering passion for web
        development, I am driven to continually enhance my skills and knowledge, embracing each
        project as an opportunity to become a better programmer.
      </p>
    </div>
  </section>
</template>

<style scoped>
.bio-tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 12px);
  width: 300px;
  background: rgba(255, 255, 255, 0.95);
  color: #343841;
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 0.95rem;
  line-height: 1.55;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  border-bottom: 3px solid #ff735c;
  z-index: 10;
}

.bio-tooltip-arrow {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #ff735c;
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
</style>
