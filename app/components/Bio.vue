<template>
  <section class="py-32 text-white bg-blueish-500">
    <div class="content-container px-4 tracking-wide md:px-8">
      <h3 class="pb-6 text-4xl font-normal text-center">A Little About Me</h3>
      <div class="flex flex-col py-10 md:flex-row">
        <div class="text-center md:w-1/3">
          <FontAwesomeLayers class="text-8xl">
            <FontAwesomeIcon :icon="['fas', 'circle']" />
            <FontAwesomeIcon
              :icon="['fas', 'paint-brush']"
              class="text-salmon"
              transform="shrink-8"
            />
          </FontAwesomeLayers>
          <div class="pt-4 text-3xl font-medium">I Design</div>
        </div>
        <div class="py-16 text-center md:py-0 md:w-1/3">
          <FontAwesomeLayers class="text-8xl">
            <FontAwesomeIcon :icon="['fas', 'circle']" />
            <FontAwesomeIcon :icon="['fas', 'code']" class="text-salmon" transform="shrink-8" />
          </FontAwesomeLayers>
          <div class="pt-4 text-3xl font-medium">I Develop</div>
        </div>
        <div class="text-center md:w-1/3">
          <FontAwesomeLayers class="text-8xl">
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
