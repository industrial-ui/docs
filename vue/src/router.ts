import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ './views/Index.vue'),
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
