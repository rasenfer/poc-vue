import "@/config/bootstrap-config";
import "@/config/api-config";
import "@/config/lodash-config";

import Vue from "vue";
import router from "@/router";
import App from "@/App";

Vue.config.productionTip = process.env.NODE_ENV == "production";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");