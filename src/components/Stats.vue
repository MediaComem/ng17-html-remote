<template>
  <div class="stats">
    <p>Shot count: {{ $store.state.stats.ballCount }}</p>
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
}
</style>
