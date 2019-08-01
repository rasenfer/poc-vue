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
    }
  },
  computed: {
    name: () => Vue.config.appName,
    route: function() {
      return this.$store.state.router;
    }
  }
});
