export default {
  state: {
    path: "",
    query: {},
    params: {},
    fullPath: ""
  },
  mutations: {
    navigate: (state, route) => {
      state.path = route.path;
      state.query = route.query;
      state.params = route.params;
      state.fullPath = route.fullPath;
    }
  }
};
