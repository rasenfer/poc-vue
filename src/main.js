import Vue from "vue";

import "@/config/bootstrap-config";
import "@/config/api-config";
import "@/config/lodash-config";
import router from "@/config/router-config";
import store from "@/config/vuex-config";

import App from "@/app/App";

Vue.config.productionTip = process.env.NODE_ENV == "production";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");