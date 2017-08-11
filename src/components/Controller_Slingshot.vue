<template>
  <div class="controller-swipe">
    <slider v-if="noGyro" id="angle-lever" :angle="angle" @valueChanged="angleChange($event)"></slider>
    <v-touch :style="touchArea" tag="div" @panstart="panStart" @panmove="panMove" @panend="panEnd">
      <a class="link" @click="goToColorSelection()"><ballCount class="ballcount"></ballCount></a>
      <div ref="swipArea" class="swip-area">
        <canvas ref="canvas" id="canvas"></canvas>
        <ball ref="pin-left" class="pin" :color="color.pins" :size="pinSize" :style="pinPositionLeft"></ball>
        <ball ref="pin-right" class="pin" :color="color.pins" :size="pinSize" :style="pinPositionRight"></ball>
        <ball ref="projectile" id="projectile" class="ball" :color="color.player" :size="size" :style="ballPositionPX"></ball>
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

var shooting = false
var tilt = 0
var ctx
var ball = {
  size: 80,
  position: {
    top: 50,
    left: (window.innerWidth - 80) / 2
  }
}
var pin = {
  left: {
    left: 30,
    top: 120
  },
  right: {
    left: window.innerWidth - 30,
    top: 120
  },
  size: 10
}

export default {
  name: 'controller-swipe',
  components: {
    'ballCount': Counter,
    'ball': Ball,
    'vector': Vector,
    'slider': Slider
  },
  created () {
    var component = this
    component.noGyro = true
    tilt = component.angle
  },
  mounted () {
    var canvas = this.$refs.canvas
    canvas.width = this.$refs.swipArea.offsetWidth * 5
    canvas.height = this.$refs.swipArea.offsetHeight * 5
    canvas.style.width = this.$refs.swipArea.offsetWidth
    canvas.style.height = this.$refs.swipArea.offsetHeight
    ctx = canvas.getContext('2d')
    ctx.lineWidth = 15
    ctx.beginPath()
    ctx.moveTo((pin.left.left + (pin.size / 2)) * 5, (pin.left.top + (pin.size / 2)) * 5)
    ctx.lineTo((ball.position.left + (ball.size / 2)) * 5, (ball.position.top + ball.size) * 5)
    ctx.moveTo((pin.right.left + (pin.size / 2)) * 5, (pin.right.top + (pin.size / 2)) * 5)
    ctx.lineTo((ball.position.left + (ball.size / 2)) * 5, (ball.position.top + ball.size) * 5)
    ctx.closePath()
    ctx.stroke()
  },
  data () {
    return {
      touchArea: {
        height: (window.innerHeight - 64) + 'px'
      },
      ballPositionPX: {
        top: ball.position.top + 'px',
        left: ball.position.left + 'px'
      },
      pinPositionLeft: {
        top: pin.left.top + 'px',
        left: pin.left.left + 'px'
      },
      pinPositionRight: {
        top: pin.right.top + 'px',
        left: pin.right.left + 'px'
      },
      pinSize: pin.size,
      size: ball.size,
      angle: 45,
      noGyro: '',
      color: {
        player: this.$store.getters.getColor.hex,
        pins: 'black'
      },
      canvas: this.$refs.canvas
    }
  },
  methods: {
    panStart (e) {
      if (e.target.id === 'projectile' && this.$store.state.game.currentBallCount > 0) {
        shooting = true
        this.ballPositionPX.left = ball.position.left + e.deltaX + 'px'
        this.ballPositionPX.top = ball.position.top + e.deltaY + 'px'
        this.draw(ball.position.left + e.deltaX, ball.position.top + e.deltaY)
      }
    },
    panMove (e) {
      if (shooting === true) {
        ctx.clearRect(0, 0, this.$refs.swipArea.offsetWidth * 5, this.$refs.swipArea.offsetHeight * 5)
        var left = ball.position.left + e.deltaX
        var top = ball.position.top + e.deltaY
        this.ballPositionPX.left = left + 'px'
        this.ballPositionPX.top = top + 'px'
        this.draw(left, top)
      }
    },
    panEnd (e) {
      if (shooting === true) {
        if (this.noGyro === true) {
          tilt = this.angle
        }
        shooting = false
        this.$store.commit('addToBallCount')
        const mag = this.$refs.vector.getMagnitude(e.deltaX, e.deltaY)
        var data = {
          'shotType': 'swipe',
          'color': this.$store.getters.getColorForUnity,
          'direction': {
            'x': e.deltaX / mag / 2,
            'y': -(tilt / 90) * (-e.deltaY / mag),
            'z': -(1 + (tilt / 90) * (-e.deltaY / mag))
          },
          'velocity': Math.abs(mag) * 25
        }
        this.$socket.emit('msg', data)

        const inst = this
        const numberOfFrames = e.deltaTime
        const boundX1 = -ball.size
        const boundX2 = window.innerWidth + ball.size
        const boundY1 = -ball.size
        const boundY2 = window.innerHeight + ball.size
        var i = 0
        var previousX = Number(this.ballPositionPX.left.substring(0, this.ballPositionPX.left.length - 2))
        var previousY = Number(this.ballPositionPX.top.substring(0, this.ballPositionPX.top.length - 2))
        var interval = setInterval(function () {
          previousX = previousX - e.deltaX / 5
          previousY = previousY - e.deltaY / 5
          inst.ballPositionPX.left = previousX + 'px'
          inst.ballPositionPX.top = previousY + 'px'
          i++
          if (previousX < boundX1 || previousX > boundX2 || previousY < boundY1 || previousY > boundY2 || i >= numberOfFrames) {
            inst.ballPositionPX.left = ball.position.left + 'px'
            inst.ballPositionPX.top = ball.position.top + 'px'
            inst.draw(ball.position.left, ball.position.top)
            clearInterval(interval)
          } else {
            inst.draw(previousX, previousY)
          }
        }, 10)
      }
    },
    angleChange (e) {
      this.angle = parseInt(e)
    },
    goToColorSelection () {
      this.$socket.emit('get colors')
    },
    draw (left, top) {
      ctx.clearRect(0, 0, this.$refs.swipArea.offsetWidth * 5, this.$refs.swipArea.offsetHeight * 5)
      ctx.beginPath()
      ctx.moveTo((pin.left.left + (pin.size / 2)) * 5, (pin.left.top + (pin.size / 2)) * 5)
      ctx.lineTo((left + (ball.size / 2)) * 5, (top + ball.size) * 5)
      ctx.moveTo((pin.right.left + (pin.size / 2)) * 5, (pin.right.top + (pin.size / 2)) * 5)
      ctx.lineTo((left + (ball.size / 2)) * 5, (top + ball.size) * 5)
      ctx.closePath()
      ctx.stroke()
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
#canvas {
  position: absolute;
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
.ball, .pin {
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
