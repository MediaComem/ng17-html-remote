<template>
  <div class="controller">
    <v-touch tag="a" v-on:tap="onTap">
      <img ref='templeImage' src='../assets/TempleBG.jpg' alt='temple' />
      <target ref='target' :posX='posX' :posY='posY'></target>
    </v-touch>
  </div>
</template>

<script>
import Target from '@/components/Target.vue'
export default {
  name: 'controller',
  components: {
    'target': Target
  },
  data () {
    return {
      message: 'hi',
      color: {
        r: 158,
        g: 0,
        b: 200
      },
      posX: 20,
      posY: 40
    }
  },
  created () {
    if (Object.keys(this.$store.getters.getColor).length === 0) {
      this.$router.push('/')
    }
    if (this.$store.state.pseudo.length === 0) {
      this.$router.push('/')
    }
  },
  methods: {
    onTap (e) {
      var xPos = e.srcEvent.layerX
      var yPos = e.srcEvent.layerY - this.$refs.templeImage.offsetTop
      console.log()
      this.posX = xPos - (this.$refs.target.$el.width / 2)
      this.posY = yPos - (this.$refs.target.$el.height / 2)
      var xRatio = (-20 * (xPos / this.$refs.templeImage.width)) + 9.5
      var yRatio = 28 * (1 - (yPos / this.$refs.templeImage.height)) - 1
      this.$refs.target.displayTarget()
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controller {
  position: relative;
}
</style>
