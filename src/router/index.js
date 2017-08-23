import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ColorSelection from '@/components/Color_selection'
import PlayHome from '@/components/Play_home'
import Stats from '@/components/Stats'
import Schedule from '@/components/Schedule'
import Information from '@/components/Information'
import Queue from '@/components/Queue'
import Contributors from '@/components/Contributors'
import MappingInfo from '@/components/Mapping_info'
import QuiSommeNous from '@/components/Qui_somme_nous'
import JeuxInfo from '@/components/Jeux_info'
import Concept from '@/components/Concept'

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
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Informations',
      component: Information
    },
    {
      path: '/play',
      name: 'Jeux',
      component: PlayHome
    },
    {
      path: '/stats',
      name: 'Statistiques',
      component: Stats
    },
    {
      path: '/programme',
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
      name: 'Vidéo mapping',
      component: Contributors
    },
    {
      path: '/mapping_info',
      name: 'Info mapping',
      component: MappingInfo
    },
    {
      path: '/jeux_info',
      name: 'Info jeux',
      component: JeuxInfo
    },
    {
      path: '/qui_somme_nous',
      name: 'Qui somme-nous ?',
      component: QuiSommeNous
    },
    {
      path: '/concept',
      name: 'Concept',
      component: Concept
    }
  ]
})

export default router
