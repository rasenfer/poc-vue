import Vue from "vue";

export default {
    responseHandler: function (response) {
        const store = Vue.config.store;
        const id = response.config.url.replace(response.config.baseURL, "");
        store.commit("storeApiRequest", {id, response});
        return response;
    }
};