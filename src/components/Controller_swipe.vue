<template>
  <div class="controller-swipe">
    <tutorial v-if="isTutorial()"></tutorial>
    <swipe v-if="!isTutorial()"></swipe>
  </div>
</template>

<script>
import Swipe from '@/components/Swipe.vue'
import Tutorial from '@/components/Tutorial_swipe.vue'

export default {
  name: 'controller-swipe',
  components: {
    'swipe': Swipe,
    'tutorial': Tutorial
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
