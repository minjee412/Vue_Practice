import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// --------- 위, 아래 모두 동일한 의미  ---------

// new Vue({
//   el:'#app',
//   render: h => h(App),
// })