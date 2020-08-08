import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/app/views/Home.vue'),
  },
  {
    path: '/getting-started/about',
    component: () => import(/* webpackChunkName: "getting-started-about" */ '@/app/views/getting-started/About.vue'),
  },
  {
    path: '/getting-started/design',
    component: () => import(/* webpackChunkName: "getting-started-design" */ '@/app/views/getting-started/Design.vue'),
  },
  {
    path: '/getting-started/develop',
    component: () => import(/* webpackChunkName: "getting-started-develop" */ '@/app/views/getting-started/Develop.vue'),
  },
  {
    path: '/line-chart',
    component: () => import(/* webpackChunkName: "line-chart" */ '@/app/views/LineChart.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
