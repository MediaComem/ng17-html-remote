<template>
  <div class="tutorial">
    <div class="tutorial-container">
      <div class="title-container">
        <h1>Tap</h1>
        <hr>
      </div>
      <img src="../assets/visuel-target.png"></img>
      <p>Cliquez sur les parties du temple que vous désirez dévoiler.</p>
      <md-button class="md-raised" @click="onClick()">Jouer</md-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tutorial',
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
.text * {
  align-self: center;
}
</style>
