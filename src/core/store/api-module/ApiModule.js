import Vue from "vue";

export default {
  state: {},
  getters: {
    getApiRequest: (state) => (url) => {
      return (
        state[url] || {
          dummy: true,
          loading: false,
          data: { id: null, results: [] }
        }
      );
    }
  },
  mutations: {
    apiRequestProcessing: (state, { url, request }) => {
      Vue.set(state, url, { config: { ...request } });
    },
    apiRequestDone: (state, { url, response }) => {
      Vue.set(state, url, { ...response });
    },
    apiRequestError: (state, { url, error }) => {
      Vue.set(state, url, { ...error });
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  },
  actions: {
    apiRequestProcessing: ({ commit }, payload) => {
      commit("apiRequestProcessing", payload);
    },
    apiRequestDone: ({ commit }, payload) => {
      commit("apiRequestDone", payload);
    },
    apiRequestError: ({ commit }, payload) => {
      commit("apiRequestError", payload);
    }
  }
};
