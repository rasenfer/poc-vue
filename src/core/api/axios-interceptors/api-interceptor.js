import Vue from 'vue';

export default {
  requestHandler: function(request) {
    const { apiUrls } = Vue.config;
    request.baseURL =
      (request.proxy && apiUrls[request.proxy]) || apiUrls[process.env.API] || apiUrls[process.env.NODE_ENV];
    if (localStorage && localStorage.token) {
      request.headers['Authorization'] = `Bearer ${localStorage.token}`;
    }
    request.headers['X-Requested-With'] = Vue.config.appName;
    return request;
  }
};
