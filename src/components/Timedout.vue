<template>
  <div class="welcome">
    <h1>Vous êtes déconnecter pour inactivité</h1>
    <md-button class="md-raised md-primary" @click="startGame()">Jouer</md-button>
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
<style>
.welcome {
  margin: 0 5px;
}
</style>
