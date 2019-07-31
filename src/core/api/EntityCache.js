import Vue from 'vue';

export default function(uri) {
    const store = Vue.config.store;
    const entityId = uri
      .split('?')[0]
      .replace(new RegExp(/\//g), '-')
      .replace(new RegExp(/^-/g), '');
    let response = null;
    if (store && store.getters) {
      response = store.getters.getApiRequest(entityId);
      response = !response.dummy && Promise.resolve(response);
    }
    return response;
}