import Vue from 'vue';
import VueTypes from 'vue-types';

export default Vue.component('app', {
  props: {
    MainView: VueTypes.object.isRequired
  },
  render: function(render) {
    return render('div', { attrs: { id: Vue.config.appName } }, [
      render(this.MainView)
    ]);
  },
  watch: {
    route: function(route, prevRoute) {
      if (
        Vue.config.devtools &&
        (route.fullPath !== prevRoute.fullPath ||
          !_.isEqual(route.params, prevRoute.params))
      ) {
        Object.keys(Vue.config.timeouts).forEach(key => {
          clearTimeout(Vue.config.timeouts[key]);
        });
        Vue.config.restoring = true;
        this.$router.push(route);
        Vue.config.restoring = false;
        this.$forceUpdate();
      }
    },
    apiRequest: function(apiRequest, prevApiRequest) {
      const store = Vue.config.store;
      const lastUpdate = Vue.config.lastUpdate;
      const storeLastUpdate = store.getters.getLastUpdate();
      if (
        Vue.config.devtools &&
        !_.isEqual(apiRequest, prevApiRequest) &&
        lastUpdate >= storeLastUpdate
      ) {
        const update = component => {
          component.$children.forEach(child => {
            if (child.$props) {
              child._watchers.forEach(watcher => {
                if (child.$props.hasOwnProperty(watcher.expression)) {
                  watcher.cb.bind(child)(child.$props[watcher.expression]);
                }
              });
            }
            update(child);
            child.$forceUpdate();
          });
        };
        Vue.config.restoring = true;
        update(this);
        Vue.config.restoring = false;
      }
    }
  },
  computed: {
    name: () => Vue.config.appName,
    apiRequest: function() {
      return this.$store.state.apiRequest;
    },
    route: function() {
      return this.$store.state.router;
    }
  }
});
