import { mapActions } from "vuex";

import Vue from "vue";
import VueTypes from "vue-types";

export default Vue.component("app", {
    props: {
      MainView: VueTypes.object.isRequired
    },
    render: function(render) {
      return render("div", {attrs: {id: Vue.config.appName, route: this.route}}, [render(this.MainView)]);
    },
    beforeUpdate: function() {
      if (this.$router.currentRoute.path != this.route) {
        this.navigate(this.route);
      }
    },
    methods: {
      ...mapActions(["navigate"])
    },
    computed: {
      name: () => Vue.config.appName,
      route: function() {
        return this.$store.state.router.path;
      }
    }
  });
