import Vue from "vue";

function getApiUrl(config) {
   return config.url.replace(config.baseURL, "");
}

export default {
  requestHandler: function(request) {
    const store = Vue.config.store;
    const url = getApiUrl(request);
    store.dispatch("apiRequestProcessing", { url, request });
    return request;
  },
  responseHandler: function(response) {
    const store = Vue.config.store;
    const url = getApiUrl(response.config);
    store.dispatch("apiRequestDone", { url, response });
    return response;
  },
  errorHandler: function(error) {
    const store = Vue.config.store;
    const url = getApiUrl(error.config);
    store.dispatch("apiRequestError", { url, error });
    return error;
  }
};
