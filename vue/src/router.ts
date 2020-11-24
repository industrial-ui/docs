import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from './views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  {
    path: '/docs/:lang',
    component: () => import(/* webpackChunkName: "lang" */ './views/Lang.vue'),
    children: [
      {
        path: ':page',
        component: () => import(/* webpackChunkName: "page" */ './views/Page.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
