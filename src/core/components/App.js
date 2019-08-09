import Vue from 'vue';

export default Vue.component('app', {
  props: {
    appName: { type: String, required: true},
    mainView: { type: Object, required: true }
  },
  computed: {
    name: () => Vue.config.appName,
    route: function() {
      return this.$store.state.router;
    }
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
  render: function(render) {
    return render('div', { attrs: { id: this.appName } }, [render(this.mainView)]);
  }
});
