import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layout/MainLayout.vue'
import HomePage from '@/views/home/HomePage.vue'

import BaseJsPage from '@/views/basePart/BaseJsPage.vue'
import BaseCssPage from '@/views/basePart/BaseCssPage.vue'

import MobileH5Page from '@/views/mobilePart/H5Page.vue'
import Vue3Page from '@/views/vuePart/Vue3Page.vue'
import OpenlayersPage from '@/views/gisPart/OpenlayersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title: 'Home' },
      component: HomePage,
      
    },
    {
      path: '/base',
      name: 'webBase',
      component: MainLayout,
      redirect: '/base/js',
      children: [
        {
          path: '/base/js',
          name: 'baseJS',
          meta: { title: 'BaseJS' },
          component: BaseJsPage,
        },
        {
          path: '/base/css',
          name: 'baseCss',
          meta: { title: 'BaseCss' },
          component: BaseCssPage,
        },
      ],
    },
    {
      path: '/vue',
      name: 'vuePart',
      component: MainLayout,
      redirect: '/vue/three',
      children: [
        {
          path: '/vue/three',
          name: 'vueThree',
          meta: { title: 'VueThree' },
          component: Vue3Page,
        },
      ],
    },
    {
      path: '/mobile',
      name: 'mobilePart',
      component: MainLayout,
      redirect: '/mobile/h5',
      children: [
        {
          path: '/mobile/h5',
          name: 'mobileH5',
          meta: { title: 'MobileH5' },
          component: MobileH5Page,
        },
      ],
    },
    {
      path: '/gis',
      name: 'webGis',
      component: MainLayout,
      redirect: '/gis/ol',
      children: [
        {
          path: '/gis/ol',
          name: 'gisOl',
          meta: { title: 'GisOl' },
          component: OpenlayersPage,
        },
      ],
    },
    
  ]
})

export default router
