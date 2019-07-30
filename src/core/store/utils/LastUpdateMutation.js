import Vue from "vue";

export default function (rootState) {
    if (Vue.config.devtools) {
        rootState.lastUpdate = new Date().getTime()
        Vue.config.lastUpdate = rootState.lastUpdate;
    }
}