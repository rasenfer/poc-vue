import './config/polyfill-config';
import './config/bootstrap-config';
import './config/lodash-config';
import './api';
import router from './config/router-config';
import store from './config/vuex-config';
import appComponent from './components/App';

import Vue from 'vue';
import { log } from 'util';

export function start(appName, MainView, appStore, appRoutes, apiUrls) {
  const production = process.env.NODE_ENV === 'production';
  Vue.config.devtools = !production;
  Vue.config.productionTip = production;

  Vue.config.apiUrls = apiUrls;
  Vue.config.appName = appName;
  if (!production) {
    Vue.config.dev = {
      lastUpdate: new Date().getTime(),
      restoring: false,
      timeouts: {}
    };
  }

  const app = new Vue({
    router: router(appRoutes),
    store: store(appStore),
    render: render =>
      render(appComponent, {
        props: {
          appName,
          mainView: MainView
        },
        scopedSlots: {
          default: () => render(MainView)
        }
      })
  }).$mount('#app');

  if (!production && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
  }

  log('%s started', appName);
}
