import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Controller from '@/components/Controller'
import Stats from '@/components/Stats'
import Schedule from '@/components/Schedule'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/controller',
      name: 'Controller',
      component: Controller
    },
    {
      path: '/stats',
      name: 'Statistiques',
      component: Stats
    },
    {
      path: '/schedule',
      name: 'Programme',
      component: Schedule
    }
  ]
})

export default router
