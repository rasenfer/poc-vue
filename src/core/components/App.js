import Vue from 'vue';
import VueTypes from 'vue-types';

export default Vue.component('app', {
  props: {
    MainView: VueTypes.object.isRequired
  },
  render: function(render) {
    return render('div', { attrs: { id: Vue.config.appName } }, [render(this.MainView)]);
  },
  watch: {
    route: function(route, prevRoute) {
      if (
        Vue.config.devtools &&
        Vue.config.dev.lastUpdate >= Vue.config.store.getters.getLastUpdate() &&
        (route.fullPath !== prevRoute.fullPath || !_.isEqual(route.params, prevRoute.params))
      ) {
        Object.keys(Vue.config.dev.timeouts).forEach(key => {
          clearTimeout(Vue.config.dev.timeouts[key]);
        });
        Vue.config.dev.restoring = true;
        this.$router.push(route);
        Vue.config.dev.restoring = false;
        this.$forceUpdate();
      }
    }
  },
  computed: {
    name: () => Vue.config.appName,
    route: function() {
      return this.$store.state.router;
    }
  }
});
