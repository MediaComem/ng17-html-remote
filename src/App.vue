<template>
  <div id="app">
    <socket-io-logic></socket-io-logic>
    <v-touch id="main-touch-area" tag="div" v-on:openSidebar="onSwipeRight" v-on:clostSidebar="onSwipeLeft">
      <app-sidenav ref="sideNav"></app-sidenav>
      <router-view class="wrap"></router-view>
    </v-touch>
  </div>
</template>

<script>
import sideNav from '@/components/Sidenav.vue'
export default {
  name: 'app',
  created () {
    this.$store.dispatch('addBall')
  },
  methods: {
    onSwipeRight () {
      console.log('swipe right', sideNav)
      this.$refs.sideNav.openLeftSidenav()
    },
    onSwipeLeft () {
      this.$refs.sideNav.closeLeftSidenav()
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.main-touch-area {
  height: 100%;
  width: 100%;
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
