import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import { store } from './store/store';
import { routes } from './routes';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio,'http://192.168.1.7:3000')

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
  store,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true;
