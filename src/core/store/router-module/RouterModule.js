import Vue from "vue";

export default {
  state: {
    name: "",
    path: "",
    query: {},
    params: {},
    fullPath: ""
  },
  mutations: {
    navigate: (state, {to, rootState}) => {
      state.name = to.name;
      state.path = to.path;
      state.query = to.query;
      state.params = to.params;
      state.fullPath = to.fullPath;
      rootState.lastUpdate = new Date().getTime();
      Vue.config.lastUpdate = rootState.lastUpdate;
    }
  },
  actions: {
    navigate({ commit, rootState  }, to) {
      if (!Vue.config.restoring && Vue.config.lastUpdate <= Vue.config.store.getters.getLastUpdate()) {
        commit("navigate", {to, rootState});
      }
    }
  }
};
