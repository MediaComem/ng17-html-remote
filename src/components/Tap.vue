<template>
  <div class="controller">
    <v-touch class="touchArea" tag="div" v-on:tap="onTap">
      <target ref='target' :posX='posX' :posY='posY' :size='size'></target>
      <img ref='templeImage' src='../assets/TempleBG.jpg' alt='temple' />
      <a @click="goToColorSelection()"><ballCount></ballCount></a>
      <div class="right text">points: {{ $store.state.stats.points }}</div>
    </v-touch>
  </div>
</template>

<script>
import Target from '@/components/Target.vue'
import Counter from '@/components/Counter.vue'
export default {
  name: 'controller',
  components: {
    'target': Target,
    'ballCount': Counter
  },
  data () {
    return {
      posX: 20,
      posY: 40,
      size: 80
    }
  },
  methods: {
    onTap (e) {
      if (this.$store.state.game.currentBallCount > 0) {
        this.$refs.target.displayTarget()
        var xPos = e.srcEvent.layerX
        var yPos = e.srcEvent.layerY - this.$refs.templeImage.offsetTop
        this.posX = xPos - (this.size / 2)
        this.posY = yPos - (this.size / 2)
        var xRatio = (-20 * (xPos / this.$refs.templeImage.width)) + 9.5
        var yRatio = 28 * (1 - (yPos / this.$refs.templeImage.height)) - 1
        this.$store.commit('addToBallCount')
        var data = {
          'shotType': 'target',
          'color': this.$store.getters.getColorForUnity,
          'position': {
            'x': xRatio,
            'y': yRatio,
            'z': -50
          }
        }
        this.$socket.emit('msg', data)
      }
    },
    goToColorSelection () {
      this.$socket.emit('get colors')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swip-area {
  position: relative;
  width: 100%;
  height: 100%;
}
.controller {
  position: relative;
}
.touchArea {
  z-index: 1;
}
.right {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
