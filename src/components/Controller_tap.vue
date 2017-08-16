<template>
  <div class="controller">
    <tutorial v-if="isTutorial()"></tutorial>
    <tap v-if="!isTutorial()"></tap>
  </div>
</template>

<script>
import Tutorial from '@/components/Tutorial_tap.vue'
import Tap from '@/components/Tap.vue'

export default {
  name: 'controller',
  components: {
    'tap': Tap,
    'tutorial': Tutorial
  },
  data () {
    return {
      posX: 20,
      posY: 40,
      size: 80
    }
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
