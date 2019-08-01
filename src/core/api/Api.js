import axios from 'axios';

import { axiosinterceptors } from '@/core/api';
import storeCache from '@/core/api/StoreCache';

function isHandlerEnabled(config = {}) {
  return !config.hasOwnProperty('handlerEnabled') || config.handlerEnabled;
}

function requestHandler(request) {
  if (isHandlerEnabled(request.config)) {
    axiosinterceptors.requestHandlers.forEach(interceptor =>
      interceptor(request)
    );
  }
  return request;
}

function responseHandler(response) {
  if (isHandlerEnabled(response.config)) {
    axiosinterceptors.responseHandlers.forEach(interceptor =>
      interceptor(response)
    );
  }
  return response;
}

function errorHandler(error) {
  if (isHandlerEnabled(error.config)) {
    axiosinterceptors.errorHandlers.forEach(interceptor => interceptor(error));
  }
  return Promise.reject({ ...error });
}

axios.interceptors.request.use(request => requestHandler(request));
axios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
);

const axiosGet = axios.get;
axios.get = function(uri, params = {}) {
  return new Promise(resolve => {
    storeCache(uri).then(response => {
      if (response) {
        resolve(response);
      } else {
        resolve(axiosGet(uri, params));
      }
    });
  });
}
