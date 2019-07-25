import Vue from "vue";

import "@/config/bootstrap-config";
import "@/config/lodash-config";
import router from "@/config/router-config";
import store from "@/config/vuex-config";

import App from "@/app/App";

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = process.env.NODE_ENV == "production";

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;