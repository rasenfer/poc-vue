import Vue from "vue";

export default {
  state: { },
  getters: {
    getApiRequest: (state) => (id) => {
      return state[id] || { loading: false, data: {id: null, results: [] } };
    }
  },
  mutations: {
    apiRequestProcessing: (state, { id, request }) => {
      Vue.set(state, id, {config: {...request}, loading: true, data: {id: null, results: [] } });
    },
    apiRequestDone: (state, { id, response }) => {
      Vue.set(state, id, {...response, loading: false});
    },
    apiRequestError: (state, { id, error }) => {
      Vue.set(state, id, {...error, loading: false});
    }
  }
};
