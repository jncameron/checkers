import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  http: {
    root: '/root',
    headers: {
      Authorization: 'Content-Type'
    }

  },
  render: h => h(App)
}).$mount('#app')
