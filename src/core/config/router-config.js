import Vue from "vue";
import VueRouter from "vue-router";

export default function (routes) {
  if(routes) {
    Vue.use(VueRouter);
    return new VueRouter({
      routes
    });
  }
}

