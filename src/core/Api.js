import apiUrls from "@/app/api-urls";
import axios from 'axios';

function isHandlerEnabled (config = {}) {
    return !config.hasOwnProperty('handlerEnabled') || config.handlerEnabled;
}

function requestHandler(request) {
    if (isHandlerEnabled(request)) {
        if (localStorage && localStorage.token) {
            request.headers['Authorization'] = `Bearer ${localStorage.token}`
        }
        request.headers['X-Requested-With'] = window.appName
    }
    return request
}

function errorHandler(error) {
    if (isHandlerEnabled(error.config)) {
        // Handle errors
    }
    return Promise.reject({ ...error })
}

function successHandler (response) {
    if (isHandlerEnabled(response.config)) {
        // Handle responses
    }
    return response
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
            response => successHandler(response),
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