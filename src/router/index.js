import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlayHome from '@/components/Play_home'
import Schedule from '@/components/Schedule'
import Information from '@/components/Information'
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
      path: '/programme',
      name: 'Programme',
      component: Schedule
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
      name: 'Qui sommes-nous ?',
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
