import Vue from 'vue';

export default function(uri) {
  let response;
  if (
    Vue.config.devtools &&
    Vue.config.dev.lastUpdate > Vue.config.store.getters.getLastUpdate()
  ) {
    response = Vue.config.store.getters.getApiRequest(uri.split('?')[0]);
  } else {
    response = null;
  }
  return response;
}
