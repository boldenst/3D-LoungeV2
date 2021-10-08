import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/tailwind.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDriSXnQDwBNDwldxKkgAJx8sg8l_Vtr_s",
  authDomain: "d-lounge-db-new.firebaseapp.com",
  projectId: "d-lounge-db-new",
  storageBucket: "d-lounge-db-new.appspot.com",
  messagingSenderId: "785296611167",
  appId: "1:785296611167:web:6441fd38839cbe129088ea"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

