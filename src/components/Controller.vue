<template>
  <div class="controller">
    <v-touch tag="a" v-on:tap="onTap"><img ref='templeImage' src='../assets/TempleBG.jpg' alt='temple' /></v-touch>
  </div>

</template>

<script>

export default {
  name: 'controller',
  data () {
    return {
      message: 'hi',
      color: {
        r: 158,
        g: 0,
        b: 200
      }
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

      var xRatio = (-20 * (xPos / this.$refs.templeImage.width)) + 9.5
      var yRatio = 28 * (1 - (yPos / this.$refs.templeImage.height)) - 1

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

</style>
