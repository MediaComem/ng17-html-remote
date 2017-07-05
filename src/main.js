// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App'
import router from './router'
import io from 'socket.io-client'
import VueSocketio from 'vue-socket.io'
import VueTouch from 'vue-touch'
import { store } from './store'
import Sidenav from '@/components/Sidenav'
import SocketIO from '@/components/SocketIO'

const socketInstance = io('http://10.192.115.172:3011')

Vue.use(VueSocketio, socketInstance, store)
Vue.use(VueMaterial)
Vue.use(VueTouch, {name: 'v-touch'})

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
