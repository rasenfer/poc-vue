import Vue from "vue";

function getEntityId(url) {
  return url
    .split("?")[0]
    .replace(new RegExp(/\//g), "-")
    .replace(new RegExp(/^-/g), "");
}

export default {
  state: {},
  getters: {
    getEntity: (state) => (id) => {
      return (
        state[id] || {
          dummy: true,
          loading: false,
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
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    apiRequestDone: (state, { url, response, rootState }) => {
      Vue.set(state, getEntityId(url), { ...response, loading: false });
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    apiRequestError: (state, { url, error, rootState }) => {
      Vue.set(state, getEntityId(url), { ...error, loading: false });
      rootState.lastUpdate = new Date().getTime()
      Vue.config.lastUpdate = rootState.lastUpdate;
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  }
};
