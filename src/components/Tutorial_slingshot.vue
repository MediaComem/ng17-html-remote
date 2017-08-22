<template>
  <div class="tutorial-slingshot">
    <div class="tutorial-container">
      <div class="title-container">
        <h1>Sling</h1>
        <hr>
      </div>
      <img src="../assets/visuel-basket.png"></img>
      <p>Catapultez le projectile dans le panier.</p>
      <md-button class="md-raised md-accent" @click="onClick()">Jouer</md-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tutorial-slingshot',
  methods: {
    onClick () {
      this.$store.state.game.tutorialMode = false
      this.$router.push({'path': '/play'})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tutorial-slingshot {
  position: relative;
}
</style>
