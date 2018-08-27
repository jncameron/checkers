import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;
//I had completed too much state logic without Vuex to refactor
// TODO - plan to use vuex for auth / protected routes
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