import { mapActions } from "vuex";

import Vue from "vue";
import VueTypes from "vue-types";

export default Vue.component("app", {
    props: {
      MainView: VueTypes.object.isRequired
    },
    render: function(render) {
      return render("div", {attrs: {id: Vue.config.appName, route: this.route.path}}, [render(this.MainView)]);
    },
    beforeUpdate: function() {
      if (this.$router.currentRoute.path != this.route.path) {
        this.$router.push({...this.route, params: {...this.route.params, restored: true}});
      }
    },
    computed: {
      name: () => Vue.config.appName,
      route: function() {
        return this.$store.state.router;
      }
    }
  });
