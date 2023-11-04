import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import font awesome icon component */
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas, fab)

const vuetify = createVuetify({
  components,
  directives
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layer-text', FontAwesomeLayersText)
app.use(vuetify)
app.mount('#app')
