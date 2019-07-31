import Vue from 'vue';
import VueTypes from 'vue-types';

export default Vue.component("app", {
  props: {
    MainView: VueTypes.object.isRequired
  },
  render: function (render) {
    return render("div", { attrs: { id: Vue.config.appName, route: this.route.path } }, [render(this.MainView)]);
  },
  beforeUpdate: function () {
    if (Vue.config.devtools && this.$router.currentRoute.path != this.route.path) {
      Vue.config.restoring = true;
      this.$router.push(this.route);
      Vue.config.restoring = false;
    }
  },
  computed: {
    name: () => Vue.config.appName,
    route: function () {
      return this.$store.state.router;
    }
  }
});
