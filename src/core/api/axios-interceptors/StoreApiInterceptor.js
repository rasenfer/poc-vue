import Vue from 'vue';

function getApiUrl(config) {
   return config.url.replace(config.baseURL, '');
}

export default {
  responseHandler(response) {
    const store = Vue.config.store;
    const url = getApiUrl(response.config);
    store.dispatch('apiRequest', { url, response });
    return response;
  },
  errorHandler(error) {
    const store = Vue.config.store;
    const url = getApiUrl(error.config);
    store.dispatch('apiRequestError', { url, error });
    return error;
  }
};
