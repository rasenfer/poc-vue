import Vue from 'vue';
import lastUpdateMutation from '@/core/store/utils/LastUpdateMutation';

function getEntityId(url) {
  return url
    .split('?')[0]
    .replace(new RegExp(/\//g), '-')
    .replace(new RegExp(/^-/g), '');
}

export default {
  state: {},
  getters: {
    getEntity: (state) => (id) => {
      return (
        state[id] || {
          loading: true,
          data: { id: null, results: [] }
        }
      );
    }
  },
  mutations: {
    apiRequestProcessing: (state, { url, request, rootState }) => {
      Vue.set(state, getEntityId(url), {
        config: { ...request },
        loading: true,
        data: { id: null, results: [] }
      });
      lastUpdateMutation(rootState);
    },
    apiRequestDone: (state, { url, response, rootState }) => {
      Vue.set(state, getEntityId(url), { ...response, loading: false });
      lastUpdateMutation(rootState);
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, getEntityId(url), { ...error, loading: false });
      lastUpdateMutation(rootState);
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  }
};
