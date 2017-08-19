<template>
  <div id="app">
    <socket-io-logic></socket-io-logic>
    <v-touch id="main-touch-area" tag="div" v-on:openSidebar="onSwipeRight" v-on:clostSidebar="onSwipeLeft">
      <app-sidenav class="nav" ref="sideNav"></app-sidenav>
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

#app .md-toolbar.md-theme-default {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#312ee8+22,ce10cb+69 */
  background: #312ee8; /* Old browsers */
  background: -moz-linear-gradient(45deg, #312ee8 22%, #ce10cb 69%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #312ee8 22%,#ce10cb 69%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #312ee8 22%,#ce10cb 69%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#312ee8', endColorstr='#ce10cb',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
  color: white;
  margin: 0px;
  padding: 0px;
}

.wrap {
  max-width: 480px;
  text-align: left;
}

body {
  background-color: #161616;
}
body a:active, body a:visited, body a:link  {
  color: white;
}
</style>
<style src="vue-material/dist/vue-material.css"></style>
