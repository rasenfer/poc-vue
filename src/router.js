import Vue from 'vue';
import VueRouter from 'vue-router';
import {CounterView, AboutView} from '@/views';

Vue.use(VueRouter);

const routes = [
    { path: '/counter', component: CounterView },
    { path: '/about', component: AboutView },
];

export default new VueRouter({
  routes
});