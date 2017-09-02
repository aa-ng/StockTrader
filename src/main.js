import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('dollars', value => {
  return '$' + (value.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
