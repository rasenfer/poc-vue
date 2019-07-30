import "@/core/config/polyfill-config";
import "@/core/config/bootstrap-config";
import "@/core/config/lodash-config";
import router from "@/core/config/router-config";
import store from "@/core/config/vuex-config";
import { app as appComponent } from "@/core/components";

import Vue from "vue";

export default function(appName, MainView, appStore, appRoutes, apiUrls) {
  const production = process.env.NODE_ENV === "production";
  Vue.config.devtools = !production;
  Vue.config.productionTip = production;

  Vue.config.apiUrls = apiUrls;
  Vue.config.appName = appName;
  Vue.config.lastUpdate = new Date().getTime();

  const app = new Vue({
    router: router(appRoutes),
    store: store(appStore),
    render: (render) =>
      render(appComponent, {
        props: {
          appName,
          MainView
        },
        scopedSlots: {
          default: () => render(MainView)
        }
      })
  }).$mount("#app");

  if (!production && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
  }
}
