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
              <md-icon>info</md-icon><span><router-link @click.native="close()" to="/home">Information</router-link></span>
            </md-list-item>
            <md-list-item v-if="!isInHTMLGame()">
              <md-icon>gamepad</md-icon><span><router-link @click.native="close()" to="/play">Jeux</router-link></span>
            </md-list-item>
            <md-list-item v-if="isInHTMLGame()" ref="listItem">
              <md-icon>gamepad</md-icon>
              <span>
                Jeux
              </span>
              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">
                    <md-icon>help</md-icon>
                    <span><a @click="toTutorial()" to="/stats">Comment jouer</a></span>
                  </md-list-item>
                  <md-list-item class="md-inset">
                    <md-icon>videogame_asset</md-icon>
                    <span><a @click="toPlay()">Play</a></span>
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
              <md-icon>view_list</md-icon>
              <span><router-link @click.native="close()" to="/programme">Programme</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>camera</md-icon>
              <span><router-link @click.native="close()" to="/mapping">Vidéo mapping</router-link></span>
            </md-list-item>
          </md-list>
        </md-toolbar>
      </md-theme>
    </md-sidenav>
  </div>
</template>
<script>
export default {
  mounted () {
    // console.log(this.$refs.listItem.$children[2].$el.click())
    // this.$refs.listItem.$children
  },
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
      var gameTypes = ['ar', 'none']
      if (paths.includes(this.$route.path) && !gameTypes.includes(this.$store.state.gameType)) {
        return true
      } else {
        return false
      }
    },
    close () {
      this.$refs.leftSidenav.close()
      var paths = ['/home', '/programme', '/mapping']
      console.log(this.$route.path, this.$store.state.playing)
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
    },
    toTutorial () {
      this.close()
      this.$store.state.game.tutorialMode = true
      if (this.$route.path !== '/play') {
        this.$router.push('/play')
      }
    },
    toPlay () {
      this.close()
      if (this.$route.path !== '/play') {
        this.$router.push('/play')
      }
      this.$store.state.game.tutorialMode = false
    }
  }
}
</script>
<style scoped>
  .md-toolbar {
    z-index: 2;
  }
  .md-icon.sidebar-home {
    margin-left: 20px;
    margin-right: 20px;
  }
  .md-toolbar .md-toolbar-container {
    width: 106%;
  }
</style>
