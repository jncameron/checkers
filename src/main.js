import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
});

Vue.config.productionTip = false

new Vue({
  http: {
    root: '/root',
    headers: {
      Authorization: 'Content-Type'
    }

  },
  router,
  render: h => h(App)
}).$mount('#app')
