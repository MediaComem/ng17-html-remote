<template>
  <div class="welcome">
    <div class="tutorial-container">
      <h1>Vous avez été déconnecté {{$store.state.timeoutMessage}}</h1>
      <md-button class="md-raised" @click="startGame()">Jouer</md-button>
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
