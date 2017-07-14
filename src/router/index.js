import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Controller from '@/components/Controller'
import Stats from '@/components/Stats'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
