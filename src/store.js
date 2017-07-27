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
      ballCount: 0,
      points: 0
    },
    game: {
      maxBall: 30,
      ballTimeReset: 2000,
      currentBallCount: 0
    },
    redirect: '/home'
  },
  mutations: {
    SOCKET_CONNECT (state, status) {
      state.connect = true
    },
    ADD_POINTS (state, points) {
      state.stats.points += parseInt(points)
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(parseInt(points) * 5)
      }
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
      console.log('got message')
      if (message.msgType === 'wait') {

      } else {
        console.log('message', message)
        if (message.msgType === 'point') {
          context.commit('ADD_POINTS', message.points)
        }

        if (message.is_important) {
          context.dispatch('alertImportantMessage', message)
        }
      }
    },
    socket_redirection (context, redirect) {
      context.commit('redirect', redirect)
    },
    addBall (context) {
      setInterval(function () {
        if (context.state.game.currentBallCount < context.state.game.maxBall) {
          context.commit('addBall')
        }
      }, context.state.game.ballTimeReset)
    },
    addToBallCount (context) {
      context.commit('addToBallCount')
    }
  }
})
