<template>
  <div class="circle" :style="circle" ></div>
</template>

<script>
export default {
  name: 'circle',
  props: [
    'size', 'color'
  ],
  data () {
    return {
      circle: {
        background: this.color,
        height: this.size + 'px',
        width: this.size + 'px',
        '-moz-border-radius': this.size / 2 + 'px',
        '-webkit-border-radius': this.size / 2 + 'px',
        'border-radius': this.size / 2 + 'px'
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
  display: inline-block;
	width: 12px;
	height: 12px;
	background: red;
	-moz-border-radius: 6px;
	-webkit-border-radius: 6px;
	border-radius: 6px;
}
</style>
