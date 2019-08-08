import Vue from 'vue';

const CONTENT_TYPE_HEADER = 'content-type';

function getApiUrl(config) {
  return config.url.replace(config.baseURL, '').split('?')[0];
}

export default {
  requestHandler: function(request) {
    const url = getApiUrl(request);
    const { store } = Vue.config;
    store.dispatch('apiFetching', { url, request });
    return request;
  },
  responseHandler: function(response) {
    if (
      response.headers[CONTENT_TYPE_HEADER] &&
      response.headers[CONTENT_TYPE_HEADER].toLowerCase().includes('application/json')
    ) {
      const url = getApiUrl(response.config);
      const { store } = Vue.config;
      store.dispatch('apiRequestDone', { url, response });
    }
    return response;
  },
  errorHandler: function(error) {
    const url = getApiUrl(error.config);
    const { store } = Vue.config;
    store.dispatch('apiRequestError', { url, error });
    return error;
  }
};
