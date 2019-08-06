import Vue from 'vue';
import lastUpdateMutation from '@/core/store/utils/LastUpdateMutation';

export default {
  state: {},
  getters: {
    getApiRequest: (state) => (url) => {
      return state[url]
        ? { data: { id: null, results: [] }, stored: true, ...state[url] }
        : { data: { id: null, results: [] }, stored: true, dummy: true, config: { fetching: true} };
    }
  },
  mutations: {
    apiRequest: (state, { url, response, rootState }) => {
      Vue.set(state, url, { ...response, config: { ...response.config, fetching: false} });
      lastUpdateMutation(rootState);
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, url, { ...error, config: { ...error.config, fetching: false} });
      lastUpdateMutation(rootState);
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  },
  actions: {
    apiRequest: ({ commit, rootState }, payload) => {
      commit('apiRequest', { ...payload, rootState });
    },
    apiRequestError: ({ commit, rootState }, payload) => {
      commit('apiRequestError', { ...payload, rootState });
    }
  }
};
