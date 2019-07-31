import Vue from 'vue';

export default {
    requestHandler: function (request) {
        if (localStorage && localStorage.token) {
            request.headers["Authorization"] = `Bearer ${localStorage.token}`
        }
        request.headers["X-Requested-With"] = Vue.config.appName;
        return request;
    }
};