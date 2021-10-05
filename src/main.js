import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/tailwind.css'
import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDriSXnQDwBNDwldxKkgAJx8sg8l_Vtr_s",
  authDomain: "d-lounge-db-new.firebaseapp.com",
  projectId: "d-lounge-db-new",
  storageBucket: "d-lounge-db-new.appspot.com",
  messagingSenderId: "785296611167",
  appId: "1:785296611167:web:6441fd38839cbe129088ea"
};



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/* Does not work...
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

import './assets/tailwind.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

 **/