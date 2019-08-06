import Vue from 'vue';

const CONTENT_TYPE_HEADER = 'content-type';

function getApiUrl(config) {
  return config.url.replace(config.baseURL, '').split('?')[0];
}

export default {
  responseHandler(response) {
    if (
      response.headers[CONTENT_TYPE_HEADER] &&
      response.headers[CONTENT_TYPE_HEADER].toLowerCase().includes(
        'application/json'
      )
    ) {
      const url = getApiUrl(response.config);
      const store = Vue.config.store;
      store.dispatch('apiRequest', { url, response });
    }
    return response;
  },
  errorHandler(error) {
    const url = getApiUrl(error.config);
    const store = Vue.config.store;
    store.dispatch('apiRequestError', { url, error });
    return error;
  }
};
