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
import VueAnalytics from 'vue-analytics'
import * as VueGoogleMaps from 'vue2-google-maps'

// const socketInstance = io('http://localhost:3010')
const socketInstance = io('https://ns3056388.ip-193-70-6.eu', {secure: true})
// const socketInstance = io('http://ng2.comem.ch')
// const socketInstance = io('http://10.192.115.223:3011')

Vue.use(VueSocketio, socketInstance, store)
Vue.use(VueMaterial)
VueTouch.registerCustomEvent('openSidebar', {
  type: 'swipe',
  direction: 'right'
})
VueTouch.registerCustomEvent('clostSidebar', {
  type: 'swipe',
  direction: 'left'
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBE5yuVFf2BOTmLCSyfHjpIsGMZZOqzr0o'
  }
})
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})
Vue.use(VueTouch, {name: 'v-touch'})
Vue.material.registerPalette('ng17-black', {
  500: '#161616',
  900: '#ffffff',
  A100: '#161616',
  A900: '#ffffff',
  darkText: [ 500, 900, 'A100', 'A900' ]
})
Vue.material.registerPalette('ng17-white', {
  500: '#ffffff',
  900: '#161616',
  A100: '#ffffff',
  A900: '#161616',
  darkText: [ 500, 900, 'A100', 'A900' ]
})
Vue.material.registerPalette('ng17-pink', {
  500: '#D63C96',
  900: '#D63C96',
  A100: '#ffffff',
  A900: '#292928',
  darkText: [ 500, 900, 'A100', 'A900' ]
})
Vue.material.registerPalette('ng17-blue', {
  500: '#2995A8',
  900: '#2995A8',
  A100: '#ffffff',
  A900: '#292928',
  darkText: [ 500, 900, 'A900', 'A100' ]
})
Vue.material.registerTheme(
  'default', {
    primary: {
      color: 'ng17-black',
      hue: 900,
      textColor: 'white'
    },
    accent: {
      color: 'ng17-pink',
      hue: 500,
      textColor: 'white'
    },
    warn: 'red',
    background: 'white'
  },
  'inverse', {
    primary: {
      color: 'ng17-white',
      hue: 500
    },
    accent: {
      color: 'ng17-blue',
      hue: 500
    },
    warn: 'red',
    background: 'white'
  }
)

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
