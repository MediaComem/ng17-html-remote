<template>
  <div id="app">
    <socket-io-logic></socket-io-logic>
    <app-sidenav></app-sidenav>
    <router-view class="wrap"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('addBall')
  },
  data () {
    return {

    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}

.wrap {
  max-width: 480px;
  text-align: left;
}


</style>
<style src="vue-material/dist/vue-material.css"></style>
