import Vue from 'vue';
import VueRouter from 'vue-router';

export default function (routes) {
  if(routes) {
    Vue.use(VueRouter);
    const router = new VueRouter({
      routes
    });

    Vue.config.router = router;

    router.beforeEach( ( to, from, next ) => {
      Vue.config.store.dispatch( 'navigate', to );
      next();
    } );

    return router;
  }
}

