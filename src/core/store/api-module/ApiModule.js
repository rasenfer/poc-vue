import Vue from "vue";
import lastUpdateMutation from "@/core/store/utils/LastUpdateMutation";

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
      lastUpdateMutation(rootState);
    },
    apiRequestDone: (state, { url, response, rootState }) => {
      Vue.set(state, url, { ...response });
      lastUpdateMutation(rootState);
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, url, { ...error });
      lastUpdateMutation(rootState);
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  },
  actions: {
    apiRequestProcessing: ({ commit, rootState }, payload) => {
      commit("apiRequestProcessing", { ...payload, rootState });
    },
    apiRequestDone: ({ commit, rootState }, payload) => {
      commit("apiRequestDone", { ...payload, rootState });
    },
    apiRequestError: ({ commit, rootState }, payload) => {
      commit("apiRequestError", { ...payload, rootState });
    }
  }
};
