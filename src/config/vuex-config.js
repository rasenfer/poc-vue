import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store';

Vue.use(Vuex);
Vue.config.devtools = process.env.NODE_ENV !== 'production';
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  ...store,
  strict: debug
})