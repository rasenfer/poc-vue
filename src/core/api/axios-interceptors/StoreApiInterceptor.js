import Vue from "vue";

function getApiId(config) {
   return config.url
      .replace(config.baseURL, "")
      .split("?")[0]
      .replace(new RegExp(/\//g), "-")
      .replace(new RegExp(/^-/g), "");
}

export default {
  requestHandler: function(request) {
    const store = Vue.config.store;
    const id = getApiId(request);
    store.commit("apiRequestProcessing", { id, request });
    return request;
  },
  responseHandler: function(response) {
    const store = Vue.config.store;
    const id = getApiId(response.config);
    store.commit("apiRequestDone", { id, response });
    return response;
  },
  errorHandler: function(error) {
    const store = Vue.config.store;
    const id = getApiId(error.config);
    store.commit("apiRequestError", { id, error });
    return error;
  }
};
