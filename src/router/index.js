import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/layout',
    component: () => import('@/views/main.vue'),
    redirect: '/layout/css-demos',
    children: [
      {
        path: 'css-demos',
        component: () => import('@/views/css-demos/css-demos.vue')
      },
      {
        path: 'projects',
        component: () => import('@/views/projects/projects.vue')
      },
      {
        path: 'css-demos/hamburger-menu',
        component: () => import('@/views/css-demos/hamburger-menu/hamburger-menu.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
