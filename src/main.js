import "@/config/bootstrap";
import "@/config/mixin-api";
import "@/config/mixin-lodash";

import Vue from "vue";
import router from "@/router";
import App from "@/App";

Vue.config.productionTip = process.env.NODE_ENV == "production";

window.lv = _.VERSION;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");