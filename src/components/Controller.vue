<template>
  <div class="controller">
    <v-touch tag="a" v-on:tap="onTap">
      <img ref='templeImage' src='../assets/TempleBG.jpg' alt='temple' />
      <target ref='target' :posX='posX' :posY='posY' :size='size'></target>
      <ballCount></ballCount>
    </v-touch>
  </div>
</template>

<script>
import Target from '@/components/Target.vue'
import Circle from '@/components/Circle.vue'
export default {
  name: 'controller',
  components: {
    'target': Target,
    'ballCount': Circle
  },
  data () {
    return {
      posX: 20,
      posY: 40,
      size: 80
    }
  },
  created () {
    if (Object.keys(this.$store.getters.getColor).length === 0) {
      this.$router.push('/color_selection')
    }
  },
  methods: {
    onTap (e) {
      if (this.$store.state.game.currentBallCount > 0) {
        this.$refs.target.displayTarget()
        var xPos = e.srcEvent.layerX
        var yPos = e.srcEvent.layerY - this.$refs.templeImage.offsetTop
        console.log('ref', this.$refs.target.$el.width, this.$refs.target.$el.height)
        this.posX = xPos - (this.size / 2)
        this.posY = yPos - (this.size / 2)
        console.log(this.posX, this.posY)
        var xRatio = (-20 * (xPos / this.$refs.templeImage.width)) + 9.5
        var yRatio = 28 * (1 - (yPos / this.$refs.templeImage.height)) - 1
        this.$store.commit('addToBallCount')
        var data = {
          'senderId': this.$socket.id,
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controller {
  position: relative;
}
</style>
