import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faCircle, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

library.add(faCircle, faPaintBrush, faCode, faSquareLinkedin)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
  nuxtApp.vueApp.component('FontAwesomeLayers', FontAwesomeLayers)
})
