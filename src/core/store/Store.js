import Vue from "vue";
import entities from "./api-module/ApiModule";
import router from "./router-module/RouterModule";

export default function(store) {
  return {
    ...store,
    state: {
      appName: Vue.config.appName,
      ...store.state
    },
    modules: {
      entities,
      router,
      ...store.modules
    }
  };
}
