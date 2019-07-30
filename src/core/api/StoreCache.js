import Vue from "vue";

export default function(uri) {
    const store = Vue.config.store;
    let response = null;
    if (Vue.config.lastUpdate > store.getters.getLastUpdate()) {
      response = store.getters.getApiRequest(uri);
      response = Promise.resolve(response);
    }
    return response;
}