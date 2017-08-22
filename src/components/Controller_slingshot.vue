<template>
  <div class="controller-slingshot">
    <tutorial v-if="isTutorial()"></tutorial>
    <div v-if="!isTutorial()">
      <slingshot></slingshot>
    </div>
  </div>
</template>

<script>
import Tutorial from '@/components/Tutorial_slingshot.vue'
import Slingshot from '@/components/Slingshot.vue'

export default {
  name: 'controller-slingshot',
  components: {
    'tutorial': Tutorial,
    'slingshot': Slingshot
  },
  methods: {
    isTutorial () {
      return this.$store.state.game.tutorialMode
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
