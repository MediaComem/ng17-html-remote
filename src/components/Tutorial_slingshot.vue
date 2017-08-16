<template>
  <div class="tutorial-slingshot">
    <div>
      <p>slingshot</p>
    </div>
    <md-button class="md-raised md-accent" @click="onClick()">Jouer</md-button>
  </div>
</template>

<script>

export default {
  name: 'tutorial-slingshot',
  methods: {
    onClick () {
      this.$store.state.game.tutorialMode = false
      this.$router.push({'path': '/play'})
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
