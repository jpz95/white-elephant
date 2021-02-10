import Vue from 'vue';
import VueRouter from 'vue-router';

import WhiteElephant from 'features/white-elepant';
import WhiteElephantLastTurn from 'features/white-elephant-last-turn';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'White Elephant',
    component: WhiteElephant,
    meta: { layout: 'topbar' },
  },
  {
    path: '/last',
    name: 'Last Turn',
    component: WhiteElephantLastTurn,
    meta: {
      layout: 'topbar',
      // TODO add guard, checking against game session
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
