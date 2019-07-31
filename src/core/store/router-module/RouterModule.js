import Vue from 'vue';
import lastUpdateMutation from '@/core/store/utils/LastUpdateMutation';

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
      lastUpdateMutation(rootState);
    }
  },
  actions: {
    navigate({ commit, rootState }, to) {
      if (!Vue.config.restoring) {
        commit('navigate', { to, rootState });
      }
    }
  }
};
