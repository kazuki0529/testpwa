// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {API_KEY_GOOGLE_MAP} from './constants/api_key'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'

// Onsen UI Styling and Icons
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

/**
 * googleMaplibraryのload
 */
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY_GOOGLE_MAP,
    libraries: 'places'
  }
})

/**
 * Onsen-UI
 */
Vue.use(VueOnsen)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
