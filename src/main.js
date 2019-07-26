import 'whatwg-fetch';

import Vue from "vue";

import "@/config/bootstrap-config";
import "@/config/lodash-config";
import router from "@/config/router-config";
import store from "@/config/vuex-config";
const packageInfo = require("../package.json");

import App from "@/app/App";

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