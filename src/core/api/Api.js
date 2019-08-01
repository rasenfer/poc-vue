import Vue from 'vue';
import axios from 'axios';

import { axiosinterceptors } from '@/core/api';
import storeCache from '@/core/api/StoreCache';

function isHandlerEnabled(config = {}) {
  return !config.hasOwnProperty('handlerEnabled') || config.handlerEnabled;
}

function requestHandler(request) {
  if (isHandlerEnabled(request.config)) {
    axiosinterceptors.requestHandlers.forEach((interceptor) =>
      interceptor(request)
    );
  }
  return request;
}

function responseHandler(response) {
  if (isHandlerEnabled(response.config)) {
    axiosinterceptors.responseHandlers.forEach((interceptor) =>
      interceptor(response)
    );
  }
  return response;
}

function errorHandler(error) {
  if (isHandlerEnabled(error.config)) {
    axiosinterceptors.errorHandlers.forEach((interceptor) =>
      interceptor(error)
    );
  }
  return Promise.reject({ ...error });
}

function queryString(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

function checkAxiosInstance(api) {
  if (!api.axiosInstance) {
    const apiUrls = Vue.config.apiUrls;
    const basePath = api.type
      ? apiUrls[api.type]
      : apiUrls[process.env.API] || apiUrls[process.env.NODE_ENV];
    const axiosInstance = axios.create({
      baseURL: basePath
    });
    axiosInstance.interceptors.request.use((request) =>
      requestHandler(request)
    );
    axiosInstance.interceptors.response.use(
      (response) => responseHandler(response),
      (error) => errorHandler(error)
    );
    api.basePath = basePath;
    api.axiosInstance = axiosInstance;
  }
}

export default class Api {
  constructor(type) {
    this.type = type;
  }
  get(uri, data = {}) {
    checkAxiosInstance(this);
    if (Object.keys(data).length > 0) {
      uri = `${uri}?${queryString(data)}`;
    }
    return new Promise((resolve) => {
      storeCache(uri).then((response) => {
        if (response) {
          resolve(response);
        } else {
          resolve(this.axiosInstance.get(uri));
        }
      });
    });
  }
  post(uri, data) {
    checkAxiosInstance(this);
    return this.axiosInstance.post(uri, data);
  }
  put(uri, data) {
    checkAxiosInstance(this);
    return this.axiosInstance.put(uri, data);
  }
  delete(uri) {
    checkAxiosInstance(this);
    return this.axiosInstance.delete(uri);
  }
}
