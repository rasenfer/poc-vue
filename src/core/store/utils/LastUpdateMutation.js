import Vue from "vue";

export default function(rootState) {
    rootState.lastUpdate = new Date().getTime()
    Vue.config.lastUpdate = rootState.lastUpdate;
}