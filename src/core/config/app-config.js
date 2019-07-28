const packageInfo = require("../../../package.json");

import "./pollyfill-config";
import "./bootstrap-config";
import "./lodash-config";
import router from "./router-config";
import store from "./vuex-config";

import Vue from "vue";

export default function(App) {
  const production = process.env.NODE_ENV === 'production';
  Vue.config.devtools = !production;
  Vue.config.productionTip = production;
  
  window.appName = packageInfo.name;
  
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  
  if(!production && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
  }
}