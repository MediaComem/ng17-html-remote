<template>
  <div class="counter">
    <dot :size="size" ></dot>
    <div class="count"> Count: {{ getBallCount }} </div>
  </div>
</template>

<script>
import Circle from '@/components/Circle.vue'
export default {
  name: 'counter',
  components: {
    'dot': Circle
  },
  props: [
    'color',
    'ballcount'
  ],
  data () {
    return {
      size: 12
    }
  },
  created () {
  },
  computed: {
    getBallCount () {
      return this.$store.state.game.currentBallCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  position: absolute;
  top: 5px;
  left: 5px;
}
.count {
  display: inline-block;
}
</style>
