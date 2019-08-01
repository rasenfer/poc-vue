import Vue from 'vue';

export default {
  requestHandler: function(config) {
    const api =
      (config.params && config.params.api) ||
      process.env.API ||
      process.env.NODE_ENV;
    const apiUrls = Vue.config.apiUrls;
    config.baseURL = apiUrls[api];
    if (localStorage && localStorage.token) {
      config.headers['Authorization'] = `Bearer ${localStorage.token}`;
    }
    config.headers['X-Requested-With'] = Vue.config.appName;
    return config;
  }
};
