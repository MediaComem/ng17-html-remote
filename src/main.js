// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import io from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
import VueTouch from 'vue-touch'
import { store } from './store'
import Sidenav from '@/components/Sidenav'
import SocketIO from '@/components/SocketIO'

const socketInstance = io('http://localhost:3000')

Vue.use(VueSocketio, socketInstance, store)
Vue.use(VueMaterial)
Vue.use(VueTouch, {name: 'v-touch'})

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-blue',
      hue: 400
    },
    accent: {
      color: 'pink',
      hue: 300
    },
    warn: 'red',
    background: 'white'
  },
  pink: {
    primary: {
      color: 'light-blue',
      hue: 300
    },
    accent: {
      color: 'pink',
      hue: 300
    },
    background: {
      color: 'grey',
      hue: 900
    }
  }
})

sync(store, router)

Vue.component('app-sidenav', Sidenav)
Vue.component('socket-io-logic', SocketIO)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
