import Vue from "vue";

export default function (store) {
    return {
        ...store,
        state: {
            appName: Vue.config.appName,
            apiRequest: {},
            ...store.state
        },
        getters: {
            getApiRequest: (state) => (id) => {
                return state.apiRequest[id];
            },
            ...store.getters
        },
        mutations: {
            storeApiRequest: (state, { id, response }) => {
                state.apiRequest[id] = response;
            },
            ...store.mutations
        }
    }
}