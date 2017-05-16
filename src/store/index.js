import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './userinfo/';
module.exports = new Vuex.Store({
    modules: {
        user
    }
});
