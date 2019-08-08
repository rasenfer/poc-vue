import store from '../store';
import { log } from 'util';
import Vue from 'vue';
import Vuex from 'vuex';

export default function(appStore) {
  if (appStore) {
    Vue.use(Vuex);

    Vue.config.store = new Vuex.Store({
      ...store(appStore),
      strict: Vue.config.devtools,
    });

    log('vuex configured');
    return Vue.config.store;
  }
}
