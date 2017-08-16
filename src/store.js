import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    connect: false,
    playing: false,
    gameType: 'none',
    gameRunning: 'none',
    message: null,
    pseudo: '',
    colors: {},
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
      currentBallCount: 0,
      tutorialMode: true
    },
    redirect: '/home'
  },
  mutations: {
    connect (state) {
      state.connect = true
      state.playing = false
      if (typeof (Storage) !== 'undefined') {
        var stats = window.localStorage.getItem('stats')
        stats = JSON.parse(stats)
        if (stats !== null) {
          state.stats = stats
        }
      }
    },
    ADD_POINTS (state, points) {
      state.stats.points += parseInt(points)
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(parseInt(points) * 5)
      }
      if (typeof (Storage) !== 'undefined') {
        window.localStorage.setItem('stats', JSON.stringify(state.stats))
      }
    },
    launchGame (state, data) {
      if (!state.playing) {
        state.color = data.color
      }
      state.playing = true
    },
    waitInQueue (state, data) {
      state.queue.position = data.position
      state.queue.total = data.total
    },
    setColor (state, color) {
      state.color = color
    },
    setGameType (state, gameType) {
      state.game.tutorialMode = true
      state.gameType = gameType
    },
    setPseudo (state, pseudo) {
      state.pseudo = pseudo
    },
    newOrderedColors (state, colors) {
      router.push({'path': '/color-selection'})
      state.colors = colors
    },
    redirect (state, redirect) {
      state.redirect = redirect
      var paths = ['/', '/play', '/color-selection', '/stats']
      if (paths.includes(state.route.path)) {
        router.push({'path': redirect})
      }
    },
    setBallSettings (state, data) {
      if (data.ballRate != null) {
        state.game.ballTimeReset = data.ballRate * 1000
      }
      if (data.ballMax != null) {
        state.game.maxBall = data.ballMax
      }
    },
    addBall (state) {
      state.game.currentBallCount += 1
    },
    addToBallCount (state) {
      state.stats.ballCount += 1
      state.game.currentBallCount -= 1
      if (typeof (Storage) !== 'undefined') {
        window.localStorage.setItem('stats', JSON.stringify(state.stats))
      }
    },
    clearStats (state) {
      state.stats.ballCount = 0
      state.stats.points = 0
      if (typeof (Storage) !== 'undefined') {
        window.localStorage.setItem('stats', JSON.stringify(state.stats))
      }
    }
  },
  getters: {
    getColorForUnity (state) {
      return state.color.unity
    },
    getColor (state) {
      return state.color
    },
    getGameType (state) {
      return state.gameType
    }
  },
  actions: {
    socket_msg (context, message) {
      if (message.msgType === 'point') {
        context.commit('ADD_POINTS', message.points)
      }

      if (message.is_important) {
        context.dispatch('alertImportantMessage', message)
      }
    },
    socket_setup (context, data) {
      context.commit('redirect', data.redirect)
      context.commit('setGameType', data.gameType)
      context.commit('setBallSettings', data.ballSettings)
    },
    socket_connect (context) {
      context.commit('connect')
      var tempSocket = new Vue().$socket
      tempSocket.emit('identify', {
        id: tempSocket.id,
        type: 'client'
      })
    },
    socket_redirection (context, redirect) {
      context.commit('redirect', redirect)
    },
    socket_changeGameType (context, gameType) {
      context.commit('setGameType', gameType)
    },
    socket_launchGame (context, data) {
      context.commit('launchGame', data)
    },
    socket_waitInQueue (context, data) {
      context.commit('waitInQueue', data)
    },
    socket_unityReconnect (context, data) {
      context.commit('setGameType', data)
    },
    socket_newOrderedColors (context, data) {
      context.commit('newOrderedColors', data)
    },
    socket_serverDisconnected (context, data) {
      context.commit('setGameType', 'none')
    },
    socket_setBallSettings (context, data) {
      context.commit('setBallSettings', data)
    },
    addBall (context) {
      setTimeout(function () {
        if (context.state.game.currentBallCount < context.state.game.maxBall) {
          context.commit('addBall')
        }
        context.dispatch('addBall')
      }, context.state.game.ballTimeReset)
    },
    addToBallCount (context) {
      context.commit('addToBallCount')
    }
  }
})
