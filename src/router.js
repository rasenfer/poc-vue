import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from '@/views/CounterView';
import About from '@/views/AboutView';

Vue.use(VueRouter);

const routes = [
    { path: '/counter', component: Counter },
    { path: '/about', component: About },
];

export default new VueRouter({
  routes
});