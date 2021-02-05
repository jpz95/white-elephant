import Vue from 'vue';
import VueRouter from 'vue-router';

import WhiteElephant from 'features/white-elepant';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: WhiteElephant,
    meta: { layout: 'topbar' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
