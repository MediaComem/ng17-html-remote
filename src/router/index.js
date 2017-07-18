import Vue from 'vue'
import Router from 'vue-router'
import ColorSelection from '@/components/Color_selection'
import Controller from '@/components/Controller'
import Stats from '@/components/Stats'
import Schedule from '@/components/Schedule'
import Welcome from '@/components/Welcome'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/color_selection',
      name: 'Color Selection',
      component: ColorSelection
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
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
