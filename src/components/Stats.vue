<template>
  <div class="stats">
    <p>Tire: {{ $store.state.stats.ballCount }}</p>
    <p>Points: {{ $store.state.stats.points }}</p>
  </div>
</template>

<script>
export default {
  name: 'stats'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats {
  position: relative;
  margin: 5px;
}
</style>
