<template>
  <div class="circle">
    <div class="circle-shape" :style="colorObject"> </div>
    <div class="count"> Count: {{ getBallCount }} </div>
  </div>
</template>

<script>
export default {
  name: 'circle',
  props: [
    'color',
    'ballcount'
  ],
  data () {
    return {
      colorObject: {
        background: this.$store.getters.getColor.hex
      }
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
.circle {
  position: absolute;
  top: 5px;
  left: 5px;
}
.circle-shape {
  display: inline-block;
	width: 12px;
	height: 12px;
	background: red;
	-moz-border-radius: 6px;
	-webkit-border-radius: 6px;
	border-radius: 6px;
}
.count {
  display: inline-block;
}
</style>
