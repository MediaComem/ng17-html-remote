<template>
  <div class="swipe">
    <slider v-if="noGyro" id="angle-lever" :angle="angle" @valueChanged="angleChange($event)"></slider>
    <v-touch :style="touchArea" tag="div" @panstart="panStart" @panmove="panMove" @panend="panEnd">
      <a class="link" @click="goToColorSelection()"><ballCount class="ballcount"></ballCount></a>
      <div class="swip-area">
        <ball ref="projectile" id="projectile" class="ball" :color="color.player" :size="size" :style="ballSize"></ball>
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
import Slider from '@/components/Angle_lever.vue'

const ballsize = 80
var shooting = false
var left = (window.innerWidth - ballsize) / 2
var bottom = 20
var tilt = 0
var timeArray
var positionArray

export default {
  name: 'swipe',
  components: {
    'ballCount': Counter,
    'ball': Ball,
    'vector': Vector,
    'slider': Slider
  },
  created () {
    var component = this
    window.addEventListener('deviceorientation', function (event) {
      if (event.beta) {
        component.noGyro = false
        tilt = event.beta
      } else {
        component.noGyro = true
        tilt = component.angle
      }
    })
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
      color: {
        player: this.$store.getters.getColor.hex
      },
      size: ballsize,
      angle: 45,
      noGyro: ''
    }
  },
  methods: {
    isTutorial () {
      console.log(this.$store.state.game.tutorialMode)
      return this.$store.state.game.tutorialMode
    },
    panStart (e) {
      if (e.target.id === 'projectile' && this.$store.state.game.currentBallCount > 0) {
        timeArray = []
        positionArray = []
        shooting = true
        this.ballSize.left = left + e.deltaX + 'px'
        this.ballSize.bottom = bottom - e.deltaY + 'px'
      }
    },
    panMove (e) {
      if (shooting === true) {
        this.ballSize.left = left + e.deltaX + 'px'
        this.ballSize.bottom = bottom - e.deltaY + 'px'
        if (timeArray.length >= 5) {
          timeArray.splice(0, 1)
          positionArray.splice(0, 1)
        }
        timeArray.push(Math.floor(Date.now()) / 10)
        positionArray.push({x: e.deltaX, y: e.deltaY})
      }
    },
    panEnd (e) {
      if (shooting === true) {
        if (this.noGyro === true) {
          tilt = this.angle
        }
        shooting = false
        this.$store.commit('addToBallCount')
        const timeDiff = Math.abs(Math.floor((Date.now() / 10) - timeArray[0])) / timeArray.length
        const positionDiff = {
          x: (e.deltaX - positionArray[0].x) / positionArray.length,
          y: (e.deltaY - positionArray[0].y) / positionArray.length
        }
        const mag = this.$refs.vector.getMagnitude(positionDiff.x, positionDiff.y)
        const velocity = Math.min(Math.max((mag * 200) / timeDiff, 4000), 10000)
        console.log('velocity', timeDiff, mag, (mag * 200) / timeDiff, velocity)
        var data = {
          'shotType': 'swipe',
          'color': this.$store.getters.getColorForUnity,
          'direction': {
            'x': -positionDiff.x / mag / 2,
            'y': -(tilt / 90) * (positionDiff.y / mag),
            'z': -(1 + (tilt / 90) * (positionDiff.y / mag))
          },
          'velocity': velocity
        }
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
    },
    angleChange (e) {
      this.angle = parseInt(e)
    },
    goToColorSelection () {
      this.$socket.emit('get colors')
    }
  }
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
  margin: 5px;
}
.angle-lever {
  position: absolute;
  z-index: 100;
  right: 0px;
  bottom: 0px;
}
</style>
