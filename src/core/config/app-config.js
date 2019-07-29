import "./polyfill-config";
import "./bootstrap-config";
import "./lodash-config";
import router from "./router-config";
import store from "./vuex-config";

import Vue from "vue";

export default function(appName, App, appStore, appRoutes, apiUrls) {
  const production = process.env.NODE_ENV === 'production';
  Vue.config.devtools = !production;
  Vue.config.productionTip = production;
  
  Vue.config.apiUrls = apiUrls;
  Vue.config.appName = appName;
  
  const app = new Vue({
    router: router(appRoutes),
    store: store(appStore),
    render: h => h(App)
  }).$mount("#app");
  
  if(!production && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
  }
}