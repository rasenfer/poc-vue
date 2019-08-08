import Vue from 'vue';
import apiRequest from './modules/api-module';
import router from './modules/router-module';

export default function(store) {
  return {
    ...store,
    state: {
      appName: Vue.config.appName,
      lastUpdate: new Date().getTime(),
      ...store.state
    },
    getters: {
      ...store.getters,
      getLastUpdate: state => () => state.lastUpdate
    },
    modules: {
      apiRequest,
      router,
      ...store.modules
    }
  };
}

export { default as mapApiGetters } from './utils/map-api-getters';
