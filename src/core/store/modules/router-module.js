import Vue from 'vue';
import refreshLastUpdate from '../utils/refresh-last-update';

export default {
  state: {
    name: '',
    path: '',
    query: {},
    params: {},
    fullPath: ''
  },
  mutations: {
    navigate: (state, { to, rootState }) => {
      state.name = to.name;
      state.path = to.path;
      state.query = to.query;
      state.params = to.params;
      state.fullPath = to.fullPath;
      refreshLastUpdate(rootState);
    }
  },
  actions: {
    navigate({ commit, rootState }, to) {
      if (!Vue.config.dev.restoring) {
        commit('navigate', { to, rootState });
      }
    }
  }
};
