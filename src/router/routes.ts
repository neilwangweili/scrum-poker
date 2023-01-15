import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'route.home',
    meta: {icon: 'home'},
    redirect: '/offline-card-showing'
  },

  {
    path: '/auth',
    name: 'route.auth',
    redirect: '/auth/login',
    component: () => import('layouts/blank/BlankLayout.vue'),
    children: [
      {path: '/auth/login', name: 'route.auth.login', component: () => import('pages/auth/LoginPage.vue')},
    ]
  },

  {
    path: '/offline-card-showing',
    name: 'route.auth',
    component: () => import('pages/offline-card-showing/OfflineCardShowing.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
