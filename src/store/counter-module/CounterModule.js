export default {
    state: {counter: 10},
    mutations: {
        countIncrement(state) {
            state.counter++;
        },
        countDecrement(state) {
            state.counter--;
        }
    },
    actions: {
        countIncrement({ commit }) {
            commit('countIncrement')
        },
        countDecrement({ commit }) {
            commit('countDecrement')
        }
    }
}