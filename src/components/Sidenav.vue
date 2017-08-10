<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Eclair | Age</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-theme md-name="pink">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container" @click="goHome">
            <md-icon class="sidebar-home">menu</md-icon>
            <h3 class="md-title">Menu</h3>
          </div>
          <md-list>
            <md-list-item>
              <md-icon>info</md-icon><span><router-link @click.native="close()" to="/welcome">Information</router-link></span>
            </md-list-item>
            <md-list-item v-if="!isInHTMLGame()">
              <md-icon>gamepad</md-icon><span><router-link @click.native="close()" to="/play">Game</router-link></span>
            </md-list-item>
            <md-list-item v-if="isInHTMLGame()">
              <md-icon>gamepad</md-icon>
              <span>
                Game
              </span>
              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">
                    <md-icon>videogame_asset</md-icon>
                    <span><router-link @click.native="close()" to="/play">Play</router-link></span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-icon>color_lens</md-icon>
                    <span><a @click="toColorSelection()">couleur</a></span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-icon>show_chart</md-icon>
                    <span><router-link @click.native="close()" to="/stats">Statistique</router-link></span>
                  </md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
            <md-list-item>
              <md-icon>view_list</md-icon><span><router-link @click.native="close()" to="/schedule">Programme</router-link></span>
            </md-list-item>
          </md-list>
        </md-toolbar>
      </md-theme>
    </md-sidenav>
  </div>
</template>
<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    openLeftSidenav () {
      this.$refs.leftSidenav.open()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
    },
    isInHTMLGame () {
      var paths = ['/play', '/stats', '/color-selection']
      return paths.includes(this.$route.path) && this.$store.state.gameType !== 'ar'
    },
    close () {
      this.$refs.leftSidenav.close()
      var paths = ['/welcome', '/programme']
      if (paths.includes(this.$route.path) && this.$store.state.playing) {
        this.$socket.emit('leave game')
        this.$store.state.playing = false
      }
    },
    goHome () {
      this.$router.push('/welcome')
      this.$refs.leftSidenav.close()
    },
    toColorSelection () {
      this.close()
      this.$socket.emit('get colors')
    }
  }
}
</script>
<style scoped>
  .md-icon.sidebar-home {
    margin-left: 20px;
    margin-right: 20px;
  }
  .md-toolbar .md-toolbar-container {
    width: 106%;
  }
</style>
