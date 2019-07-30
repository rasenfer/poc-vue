import Vue from 'vue';
import Vuex from 'vuex';
import {store} from '@/core';

export default function (appStore) {
  if(appStore) {
    Vue.use(Vuex);
    Vue.config.devtools = process.env.NODE_ENV !== 'production';
    const debug = process.env.NODE_ENV !== 'production';
  
    Vue.config.store = new Vuex.Store({
      ...store(appStore),
      strict: debug
    });

    return Vue.config.store
  }
}
