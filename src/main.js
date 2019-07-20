import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import './sass/main.scss'
import './css/tailwind.css'
import './css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'
import "animate.css/animate.min.css";

Vue.config.productionTip = false

Vue.prototype.IMAGE_API = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBuqRXAyy5p3jsd1IHQ-UtA38gjskrw9qo&cx=010323834795960414770:6x1j0vzhltg&q=';
Vue.prototype.PRICE_API = 'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBuqRXAyy5p3jsd1IHQ-UtA38gjskrw9qo&cx=010323834795960414770:b14jgo3hhwi&q=';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
