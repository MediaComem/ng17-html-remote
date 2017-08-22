<template>
  <div class="welcome">
    <div class="tutorial-container">
      <div class="text">
        <h3>Vous avez été déconnecté pour inactivité</h3>
        <md-button class="md-raised md-primary" @click="startGame()">Jouer</md-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  methods: {
    startGame () {
      this.$store.state.timedout = false
      this.$socket.emit('play')
    }
  }
}

</script>
<style scoped>
.welcome {
  margin: 0 5px;
}
.text {
  display: flex;
}
</style>
