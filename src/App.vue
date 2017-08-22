<template>
  <div id="app">
    <socket-io-logic></socket-io-logic>
    <v-touch id="main-touch-area" tag="div" v-on:openSidebar="onSwipeRight" v-on:clostSidebar="onSwipeLeft">
      <app-sidenav class="nav" ref="sideNav" :headerTitle="pageTitle"></app-sidenav>
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
  data () {
    return {
      'pageTitle': 'Eclair | Age'
    }
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

#app .sidenav.nav {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#312ee8+22,ce10cb+69 */
  background: #D63C96; /* Old browsers */
  background: -moz-linear-gradient(135deg, #8f1d61 22%, #246172 69%); /* FF3.6-15 */
  background: -webkit-linear-gradient(135deg, #8f1d61 22%,#246172 69%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #8f1d61 22%,#246172 69%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f1d61', endColorstr='#246172',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
  font-weight: 300;
}

#app a:active, #app a:visited, #app a:link {
  font-weight: 400;
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
#app .text a:active, #app .text a:visited, #app .text a:link {
  color: #246172;
  font-weight: 400;
  font-weight: bold;
}

#app .md-list-text-container h2 {
  margin-top: 3px;
  margin-bottom: 0px;
  padding-top: 2px;
  text-transform: uppercase;
  font-size: 0.9em;
}

#app .md-list-text-container {
  padding-right: 5px;
  padding-left: 10px;
  padding-top: 5px;
}

#app .md-theme-default.md-list {
  background-color: #161616;
  color: white;
}

#app a:not(.md-button):not(.md-bottom-bar-item):hover {
  text-decoration: none;
}

#app .md-list-text-container > :nth-child(2){
  padding-bottom: 5px;
  color: grey;
  font-size: 0.8em;
}

#app .md-divider {
 background-color: rgba(0, 0, 0, 0.1);
}
#app .md-inset.light {
  background-color: rgba(255,255,255,0.1);
}

#app .text {
  margin: 0 15px;
}

#app .md-theme-default.md-avatar.md-warn.md-avatar-icon.blue {
  background-color: #246172;
}

#app .md-theme-default.md-avatar.md-warn.md-avatar-icon.pink {
  background-color: #8f1d61;
}

#app .white-icon {
  color: white;
}

</style>
<style src="vue-material/dist/vue-material.css"></style>
