import Vue from 'vue'
import App from './App.vue'
import router from './router'

import registor from '@/utils/registor.js'

Vue.use(registor)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
