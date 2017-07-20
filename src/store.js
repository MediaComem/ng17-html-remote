import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    connect: false,
    message: null,
    pseudo: '',
    color: {},
    stats: {
      ballCount: 0
    },
    game: {
      currentBallCount: 0
    },
    redirect: '/home'
  },
  mutations: {
    SOCKET_CONNECT (state, status) {
      state.connect = true
    },
    NEW_MESSAGE_RECEIVED (state, message) {
      state.message = message
    },
    setColor (state, color) {
      state.color = {...color,
        unity: {
          r: color.rgba.r / 255,
          b: color.rgba.b / 255,
          g: color.rgba.g / 255,
          a: color.rgba.a
        }
      }
    },
    setPseudo (state, pseudo) {
      state.pseudo = pseudo
    },
    redirect (state, redirect) {
      if (state.route.path === '/') {
        router.push({'path': redirect})
      }
    },
    addBall (state) {
      state.game.currentBallCount += 1
    },
    addToBallCount (state) {
      state.stats.ballCount += 1
      state.game.currentBallCount -= 1
    }
  },
  getters: {
    getColorForUnity (state) {
      return state.color.unity
    },
    getColor (state) {
      return state.color
    }
  },
  actions: {
    otherAction (context, type) {
      return true
    },
    socket_msg (context, message) {
      console.log('message', message)
      context.dispatch('message', message)
      context.commit('NEW_MESSAGE_RECEIVED', message)
      if (message.is_important) {
        context.dispatch('alertImportantMessage', message)
      }
    },
    socket_redirection (context, redirect) {
      context.commit('redirect', redirect)
    },
    addBall (context) {
      setInterval(function () {
        if (context.state.game.currentBallCount < 30) {
          context.commit('addBall')
        }
      }, 2000)
    },
    addToBallCount (context) {
      context.commit('addToBallCount')
    }
  }
})
