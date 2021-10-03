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
  apiKey: "AIzaSyAR-83y1xk0JmgZ-A-D8z_Y_xyoFEhRPiI",
  authDomain: "d-lounge-e177a.firebaseapp.com",
  projectId: "d-lounge-e177a",
  storageBucket: "d-lounge-e177a.appspot.com",
  messagingSenderId: "13265840535",
  appId: "1:13265840535:web:c71fd3319b74bf0816bcd2",
  measurementId: "G-S31NX5V1HM"
};


firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false


new Vue({
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')

