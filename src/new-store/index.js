import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import sample from './modules/sample'
import post from './modules/post'
export default new Vuex.Store({
    modules: {
        sample,
        post
    },
    strict: false
});
