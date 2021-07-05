import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(Vuelidate)
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
