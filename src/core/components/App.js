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
    route: function(route) {
      if (Vue.config.devtools) {
        Object.keys(Vue.config.timeouts).forEach(key => {
          clearTimeout(Vue.config.timeouts[key]);
        })
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
