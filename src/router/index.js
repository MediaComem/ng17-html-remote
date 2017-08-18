import Vue from 'vue'
import Router from 'vue-router'
import ColorSelection from '@/components/Color_selection'
import PlayHome from '@/components/Play_home'
import Stats from '@/components/Stats'
import Schedule from '@/components/Schedule'
import Welcome from '@/components/Welcome'
import Queue from '@/components/Queue'
import Contributors from '@/components/Contributors'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/color-selection',
      name: 'Color Selection',
      component: ColorSelection
    },
    {
      path: '/home',
      name: 'Home',
      component: Welcome
    },
    {
      path: '/play',
      name: 'play',
      component: PlayHome
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
    },
    {
      path: '/queue/:type',
      name: 'Queue',
      component: Queue
    },
    {
      path: '/mapping',
      name: 'Contributeur',
      component: Contributors
    }
  ]
})

export default router
