import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/tailwind.css'

import * as firebase from "firebase"

const firebaseConfig = {

};


firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false


new Vue({
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')

