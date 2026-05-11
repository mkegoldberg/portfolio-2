<template>
  <section class="hero bg-salmon">
    <div class="content-container flex flex-col-reverse items-center px-2 md:flex-row md:px-8">
      <div class="flex items-center md:w-1/2">
        <div class="flex-1 self-center text-center md:text-left">
          <h1 class="leading-tight text-white title whitespace-no-wrap">
            Hi,<br class="hidden md:inline" />
            I'm Mike <span class="hidden lg:inline"> Goldberg. </span>
          </h1>
        </div>
      </div>
      <div class="text-center md:w-1/2 img-container">
        <img src="~assets/images/dev.png" class="hero-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero:after {
  background: inherit;
  content: '';
  display: block;
  height: 400px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  /* -webkit-backface-visibility: hidden; // for Chrome Windows */
}

.hero:after {
  top: 158px;
  transform: skewY(2deg);
  transform-origin: 100% 0;
}
.title {
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-shadow: 0px 1px 4px #343841;
}
.hero-img {
  max-width: 500px;
  max-height: 500px;
}

h1 {
  opacity: 0;
  animation: fade-in-right ease-out 0.8s forwards;
}

.img-container {
  opacity: 0;
  animation: fade-in-bottom ease-out 0.8s forwards;
}

/* Medium only */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .hero-img {
    max-width: 350px;
    max-height: 350px;
  }
  .hero:after {
    height: 300px;
  }
}
/* Small only */
@media screen and (max-width: 767px) {
  .hero-img {
    max-width: 350px;
    max-height: 350px;
  }
}
</style>
