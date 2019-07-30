import { mapActions } from "vuex";

import Vue from "vue";

export default Vue.component("app", {
    props: {
      MainView: Object
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
