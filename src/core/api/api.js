import apiInterceptor from './axios-interceptors/api-interceptor';
import storeApiInterceptor from './axios-interceptors/store-api-interceptor';
import axios from 'axios';
import { log } from 'util';
import Vue from 'vue';

axios.interceptors.request.use(apiInterceptor.requestHandler);
axios.interceptors.request.use(storeApiInterceptor.requestHandler);
axios.interceptors.response.use(
  storeApiInterceptor.responseHandler,
  storeApiInterceptor.errorHandler,
);

function getStoredResponse(uri) {
  let response;
  if (
    Vue.config.devtools &&
    Vue.config.dev.lastUpdate > Vue.config.store.getters.getLastUpdate()
  ) {
    response = Vue.config.store.getters.getApiRequest(uri.split('?')[0]);
  } else {
    response = null;
  }
  return response;
}

const axiosGet = axios.get;
axios.get = function(uri, params = {}, config = {}) {
  let response;
  const storedResponse = getStoredResponse(uri);
  if (storedResponse) {
    response = Promise.resolve(storedResponse);
  } else {
    response = axiosGet(uri, { params, ...config });
  }
  return response;
};

log('axios configured');
