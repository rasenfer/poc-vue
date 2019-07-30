import Vue from "vue";

export default function(uri) {
    const store = Vue.config.store;
    let response = null;
    if (Vue.config.restoring && store && store.getters) {
      response = store.getters.getApiRequest(uri);
      response = !response.dummy && Promise.resolve(response);
    }
    return response;
}