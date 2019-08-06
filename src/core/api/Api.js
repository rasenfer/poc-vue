import axios from 'axios';
import apiInterceptor from '@/core/api/axios-interceptors/ApiInterceptor';
import storeApiInterceptor from '@/core/api/axios-interceptors/StoreApiInterceptor';
import storeCache from '@/core/api/StoreCache';

axios.interceptors.request.use(apiInterceptor.requestHandler);
axios.interceptors.response.use(
  storeApiInterceptor.responseHandler,
  storeApiInterceptor.errorHandler
);

const axiosGet = axios.get;
axios.get = function(uri, params = {}, config = {}) {
  return new Promise((resolve) => {
    storeCache(uri).then((response) => {
      if (response) {
        resolve(response);
      } else {
        resolve(axiosGet(uri, { params, ...config }));
      }
    });
  });
};
