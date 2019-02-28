import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import sample from './modules/sample'
export default new Vuex.Store({
    modules: {
        sample
    },
    strict: false
});
