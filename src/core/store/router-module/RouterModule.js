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
    navigate: (state, route) => {
      state.name = route.name;
      state.path = route.path;
      state.query = route.query;
      state.params = route.params;
      state.fullPath = route.fullPath;
    }
  },
  actions: {
    navigate({ commit }, to) {
      if (!Vue.config.restoring) {
        commit("navigate", to);
      }
    }
  }
};
