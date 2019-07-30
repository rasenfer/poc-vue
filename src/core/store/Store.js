import Vue from "vue";
import entities from "./entity-module/EntityModule";
import apiRequest from "./api-module/ApiModule";
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
      apiRequest,
      router,
      ...store.modules
    }
  };
}
