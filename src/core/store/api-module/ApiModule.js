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
    apiRequestProcessing: (state, { url, request, rootState }) => {
      Vue.set(state, url, { config: { ...request } });
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    apiRequestDone: (state, { url, response, rootState }) => {
      Vue.set(state, url, { ...response });
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, url, { ...error });
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  },
  actions: {
    apiRequestProcessing: ({ commit, rootState }, payload) => {
      commit("apiRequestProcessing", {...payload, rootState});
    },
    apiRequestDone: ({ commit, rootState }, payload) => {
      commit("apiRequestDone", {...payload, rootState});
    },
    apiRequestError: ({ commit, rootState }, payload) => {
      commit("apiRequestError", {...payload, rootState});
    }
  }
};
