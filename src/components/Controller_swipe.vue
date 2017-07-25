<template>
  <div class="controller-swipe">
    <v-touch :style="touchArea" tag="div" v-on:panstart="panStart" v-on:panmove="panMove" v-on:panend="panEnd">
      <router-link class="link" to="/color-selection"><ballCount class="ballcount"></ballCount></router-link>
      <div class="swip-area">
        <ball ref="projectile" id="projectile" class="ball" :size="size" :style="ballSize"></ball>
        <div class="right text">points: {{ $store.state.stats.points }}</div>
      </div>
    </v-touch>
    <vector ref="vector"></vector>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import Ball from '@/components/Circle.vue'
import Vector from '@/components/Vector.vue'

const ballsize = 80
var shooting = false
var left = (window.innerWidth - ballsize) / 2
var bottom = 20
var tilt = 0

export default {
  name: 'controller-swipe',
  components: {
    'ballCount': Counter,
    'ball': Ball,
    'vector': Vector
  },
  data () {
    return {
      touchArea: {
        height: (window.innerHeight - 64) + 'px'
      },
      ballSize: {
        bottom: bottom + 'px',
        left: left + 'px'
      },
      size: ballsize
    }
  },
  created () {
    if (Object.keys(this.$store.getters.getColor).length === 0) {
      this.$router.push('/color-selection/controller-swipe')
    }
  },
  methods: {
    panStart (e) {
      if (e.target.id === 'projectile' && this.$store.state.game.currentBallCount > 0) {
        shooting = true
        this.ballSize.left = left + e.deltaX + 'px'
        this.ballSize.bottom = bottom - e.deltaY + 'px'
      }
    },
    panMove (e) {
      if (shooting === true) {
        this.ballSize.left = left + e.deltaX + 'px'
        this.ballSize.bottom = bottom - e.deltaY + 'px'
      }
    },
    panEnd (e) {
      if (shooting === true) {
        shooting = false
        this.$store.commit('addToBallCount')
        const mag = this.$refs.vector.getMagnitude(e.velocityX, e.velocityY)
        var data = {
          'shotType': 'swipe',
          'color': this.$store.getters.getColorForUnity,
          'direction': {
            'x': -e.velocityX / mag,
            'y': -(tilt / 90) * (e.velocityY / mag),
            'z': (tilt / 90) * (e.velocityY / mag)
          },
          'velocity': Math.abs(mag) * 1500
        }
        console.log((tilt / 90))
        console.log('vx:' + e.velocityX, 'vy:' + e.velocityY, 'v:' + mag)
        console.log(data.direction.x, data.direction.y, data.direction.z)
        this.$socket.emit('msg', data)
        const inst = this
        const numberOfFrames = e.deltaTime
        const boundX1 = -ballsize
        const boundX2 = window.innerWidth + ballsize
        const boundY1 = -ballsize
        const boundY2 = window.innerHeight + ballsize
        var i = 0
        var previousX = Number(this.ballSize.left.substring(0, this.ballSize.left.length - 2))
        var previousY = Number(this.ballSize.bottom.substring(0, this.ballSize.bottom.length - 2))
        var interval = setInterval(function () {
          previousX = previousX + e.velocityX * 10
          previousY = previousY - e.velocityY * 10

          inst.ballSize.left = previousX + 'px'
          inst.ballSize.bottom = previousY + 'px'

          i++
          if (previousX < boundX1 || previousX > boundX2 || previousY < boundY1 || previousY > boundY2 || i >= numberOfFrames) {
            inst.ballSize.left = left + 'px'
            inst.ballSize.bottom = bottom + 'px'
            clearInterval(interval)
          }
        }, 10)
      }
    }
  }
}
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function (eventData) {
    tilt = eventData.beta
  }, false)
} else {
  tilt = 45
  console.log('browser not supported')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controller {
  position: relative;
}
.swip-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.link {
  position: relative;
  height: 20px;
  width: 100px;
  z-index: 2;
}
.ballcount {
  width: 100px;
}
.ball {
  position: absolute;
}
.right {
  float: right;
}
</style>
