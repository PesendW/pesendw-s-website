import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/main.vue'),
    redirect: '/css-demos',
    children: [
      {
        path: 'css-demos',
        component: () => import('@/views/css-demos/css-demos.vue')
      },
      {
        path: 'projects',
        component: () => import('@/views/projects/projects.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
