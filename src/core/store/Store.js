import Vue from "vue";
import entities from "./api-module/ApiModule";

export default function(store) {
  return {
    ...store,
    state: {
      appName: Vue.config.appName,
      ...store.state
    },
    modules: {
      entities,
      ...store.modules
    }
  };
}
