import lastUpdateMutation from '@/core/store/utils/LastUpdateMutation';
import Vue from 'vue';

export default {
  state: {},
  getters: {
    getApiRequest: (state) => (url) => {
      return (
        state[url] || {
          data: { id: null, results: [] },
          config: { fetching: true }
        }
      );
    }
  },
  mutations: {
    apiFetching: (state, { url, request, rootState }) => {
      Vue.set(state, url, {
        data: { id: null, results: [] },
        config: { ...request, fetching: true }
      });
      lastUpdateMutation(rootState);
    },
    apiRequestDone: (state, { url, response, rootState }) => {
      Vue.set(state, url, {
        ...response,
        config: { ...response.config, fetching: false }
      });
      lastUpdateMutation(rootState);
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, url, {
        ...error,
        config: { ...error.config, fetching: false }
      });
      lastUpdateMutation(rootState);
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => {
        Vue.set(state, attribute, null);
        delete state[attribute];
      });
    }
  },
  actions: {
    apiFetching: ({ commit, rootState }, payload) => {
      commit('apiFetching', { ...payload, rootState });
    },
    apiRequestDone: ({ commit, rootState }, payload) => {
      commit('apiRequestDone', { ...payload, rootState });
    },
    apiRequestError: ({ commit, rootState }, payload) => {
      commit('apiRequestError', { ...payload, rootState });
    }
  }
};
