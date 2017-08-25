<template>
  <div class="stats">
    <div class="tutorial-container">
      <h3>Tire: {{ $store.state.stats.ballCount }}</h3>
      <h3>Points: {{ $store.state.stats.points }}</h3>
      <md-button class="md-raised" @click="resetPoints()">reset</md-button>
    </div>
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
