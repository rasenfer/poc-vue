import apiUrls from "@/app/api-urls";
import interceptors from "@/core/axios-interceptors";
import axios from 'axios';

function isHandlerEnabled (config = {}) {
    return !config.hasOwnProperty('handlerEnabled') || config.handlerEnabled;
}

function requestHandler(request) {
    if (isHandlerEnabled(request.config)) {
        interceptors.requestHandlers.forEach(interceptor => interceptor(request));
    }
    return request
}

function responseHandler (response) {
    if (isHandlerEnabled(response.config)) {
        interceptors.responseHandlers.forEach(interceptor => interceptor(response));
    }
    return response
}

function errorHandler(error) {
    if (isHandlerEnabled(error.config)) {
        interceptors.errorHandlers.forEach(interceptor => interceptor(error));
    }
    return Promise.reject({ ...error })
}

function queryString(params) {
    return (
        Object
            .keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')
    )
}

class Api {
    constructor(basePath) {
        this.basePath = basePath;
        this.axiosInstance = axios.create({
            baseURL: basePath
        });
        this.axiosInstance.interceptors.request.use(
            request => requestHandler(request)
        );
        this.axiosInstance.interceptors.response.use(
            response => responseHandler(response),
            error => errorHandler(error)
        );
    }
    get(uri, data = {},) {
        if (Object.keys(data).length > 0) {
            uri = `${uri}?${queryString(data)}`
        }
        return this.axiosInstance.get(uri)
    }
    post(uri, data) {
        return this.axiosInstance.post(uri, data)
    }
    put(uri, data) {
        return this.axiosInstance.put(uri, data)
    }
    delete(uri) {
        return this.axiosInstance.delete(uri)
    }
}

export default new Api(process.env.API || apiUrls[process.env.NODE_ENV]);
export const local = new Api(apiUrls["test"]);
export const mock = new Api(apiUrls["local"]);