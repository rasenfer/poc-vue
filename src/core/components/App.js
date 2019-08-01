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
        Vue.config.dev.lastUpdate >= Vue.config.store.getters.getLastUpdate() &&
        (route.fullPath !== prevRoute.fullPath ||
          !_.isEqual(route.params, prevRoute.params))
      ) {
        Object.keys(Vue.config.dev.timeouts).forEach(key => {
          clearTimeout(Vue.config.dev.timeouts[key]);
        });
        Vue.config.dev.restoring = true;
        this.$router.push(route);
        Vue.config.dev.restoring = false;
        this.$forceUpdate();
      }
    },
    apiRequest: function(apiRequest, prevApiRequest) {
      if (
        Vue.config.devtools &&
        Vue.config.dev.lastUpdate >= Vue.config.store.getters.getLastUpdate() &&
        !_.isEqual(apiRequest, prevApiRequest)
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
        Vue.config.dev.restoring = true;
        update(this);
        Vue.config.dev.restoring = false;
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
