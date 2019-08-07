import apiInterceptor from '@/core/api/axios-interceptors/ApiInterceptor';
import storeApiInterceptor from '@/core/api/axios-interceptors/StoreApiInterceptor';
import storeCache from '@/core/api/StoreCache';
import axios from 'axios';
import { log } from 'util';

axios.interceptors.request.use(apiInterceptor.requestHandler);
axios.interceptors.request.use(storeApiInterceptor.requestHandler);
axios.interceptors.response.use(
  storeApiInterceptor.responseHandler,
  storeApiInterceptor.errorHandler
);

const axiosGet = axios.get;
axios.get = function(uri, params = {}, config = {}) {
  let response;
  const storedResponse = storeCache(uri);
  if (storedResponse) {
    response = Promise.resolve(storedResponse);
  } else {
    response = axiosGet(uri, { params, ...config });
  }
  return response;
};

log('axios configured');