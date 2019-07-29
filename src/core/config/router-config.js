import Vue from "vue";
import VueRouter from "vue-router";

export default function (routes) {
  if(routes) {
    Vue.use(VueRouter);
    const router = new VueRouter({
      routes
    });

    router.beforeEach( ( to, from, next ) => {
      Vue.config.store.commit( 'navigate', to );
      next();
    } );

    return router;
  }
}

