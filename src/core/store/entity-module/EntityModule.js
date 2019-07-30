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
    apiRequestProcessing: (state, { url, request }) => {
      Vue.set(state, getEntityId(url), {
        config: { ...request },
        loading: true,
        data: { id: null, results: [] }
      });
    },
    apiRequestDone: (state, { url, response }) => {
      Vue.set(state, getEntityId(url), { ...response, loading: false });
    },
    apiRequestError: (state, { url, error }) => {
      Vue.set(state, getEntityId(url), { ...error, loading: false });
    },
    navigate: (state) => {
      Object.keys(state).forEach((attribute) => delete state[attribute]);
    }
  }
};
