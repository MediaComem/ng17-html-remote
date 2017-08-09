<template>
  <div class="stats">
    <p>Tire: {{ $store.state.stats.ballCount }}</p>
    <p>Points: {{ $store.state.stats.points }}</p>
    <md-button class="md-raised" @click="resetPoints()">reset</md-button>
  </div>
</template>

<script>
export default {
  name: 'stats',
  methods: {
    resetPoints () {
      this.$store.commit('clearStats')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats {
  position: relative;
  margin: 5px;
}
</style>
