import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/PreviewPage.vue'),
    meta: { layout: DefaultLayout }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { layout: DefaultLayout }
  }
]

export default routes
