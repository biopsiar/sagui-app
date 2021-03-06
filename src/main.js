import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import './sass/main.scss'
import './css/tailwind-base.css'
import './css/tailwind.css'
import './css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'
import "animate.css/animate.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')