import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    connect: false,
    playing: false,
    gameRunning: 'none',
    message: null,
    pseudo: '',
    colors: {},
    hexColors: [],
    color: {},
    queue: {
      position: 0,
      total: 0
    },
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
    connect (state) {
      state.connect = true
      state.playing = false
    },
    ADD_POINTS (state, points) {
      state.stats.points += parseInt(points)
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(parseInt(points) * 5)
      }
    },
    launchGame (state, data) {
      state.playing = true
      // router.push({'path': '/play'})
    },
    waitInQueue (state, data) {
      console.log('update', data)
      state.queue.position = data.position
      state.queue.total = data.total
    },
    setColor (state, color) {
      state.color = color
    },
    setGameType (state, gameType) {
      state.gameType = gameType
    },
    setPseudo (state, pseudo) {
      state.pseudo = pseudo
    },
    newOrderedColors (state, colors) {
      console.log('new colors', colors)
      state.colors = colors
      // state.hexColors = data.hexOnlyColors
    },
    redirect (state, redirect) {
      state.redirect = redirect
      var paths = ['/', '/play', '/color-selection', '/stats']
      if (paths.includes(state.route.path)) {
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
    socket_msg (context, message) {
      console.log('got message')
      if (message.msgType === 'wait') {
        console.log('wait', message)
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
    socket_setup (context, data) {
      context.commit('redirect', data.redirect)
      context.commit('setGameType', data.gameType)
    },
    socket_connect (context) {
      context.commit('connect')
      var tempSocket = new Vue().$socket
      tempSocket.emit('identify', {
        id: tempSocket.id,
        type: 'client'
      })
    },
    socket_gameRunung (context, data) {
      context.commit('gameRunning', data)
    },
    socket_launchGame (context, data) {
      context.commit('launchGame', data)
    },
    socket_waitInQueue (context, data) {
      console.log('wait in queue', data)
      context.commit('waitInQueue', data)
    },
    socket_unityReconnect (context, data) {
      context.commit('setGameType', data)
    },
    socket_newOrderedColors (context, data) {
      console.log('sup')
      // var hexColor = []
      // for (var i = 0; i < data.length; i++) {
      //   hexColor.push(data[i])
      // }
      context.commit('newOrderedColors', data)
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
