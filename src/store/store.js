import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;
export const store = new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        signup ({commit}, authData) {

        },
        login ({commit}, authData) {
            
        }
    }
});