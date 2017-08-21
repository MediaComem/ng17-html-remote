<template>
  <div class="sidenav">
    <md-toolbar>
      <div class="edge-button">
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
      <h2 v-if="isHeaderText()" class="md-title logo">{{ header }}</h2>
      <img v-else class="logo" src="../assets/logo-EA.svg" />
      <div class="edge-button">
        <md-button class="md-icon-button" @click.native="close">
          <md-icon>home</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container" @click="goHome">
          <md-icon class="sidebar-home">menu</md-icon>
          <h3 class="md-title">Menu</h3>
        </div>
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon><span><router-link @click.native="close()" to="/home">Accueil</router-link></span>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
          <md-list-item>
            <md-icon>info</md-icon>
            <span><router-link @click.native="close()" to="/information">Information</router-link></span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <md-icon>help</md-icon>
                  <span><router-link @click.native="close()" to="/qui_somme_nous">Qui somme nous ?</router-link></span>
                </md-list-item>
                <md-list-item class="md-inset">
                  <md-icon>lightbulb_outline</md-icon>
                  <span><router-link @click.native="close()" to="/concept">Concept</router-link></span>
                </md-list-item>
                <md-list-item class="md-inset">
                  <md-icon>movie</md-icon>
                  <span><router-link @click.native="close()" to="/mapping_info">Vidéo mapping</router-link></span>
                </md-list-item>
                <md-list-item class="md-inset">
                  <md-icon>gamepad</md-icon>
                  <span><router-link @click.native="close()" to="/jeux_info">Développement de jeux</router-link></span>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>
          <md-list-item>
            <md-icon>view_list</md-icon>
            <span><router-link @click.native="close()" to="/programme">Programme</router-link></span>
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
            <md-icon>movie</md-icon>
            <span><router-link @click.native="close()" to="/mapping">Vidéo mapping</router-link></span>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
          <md-list-item>
            <md-icon md-iconset="fa fa-facebook-official" class="md-size-1x md-primary"></md-icon><span><a href="fsd">Facebook</a></span>
          </md-list-item>
          <md-list-item>
            <md-icon md-iconset="fa fa-instagram" class="md-size-1x md-primary"></md-icon><span><a href="fsd">Instagram</a></span>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>
<script>
export default {
  mounted () {
    // console.log(this.$refs.listItem.$children[2].$el.click())
    // this.$refs.listItem.$children
  },
  props: [
    'headerTitle'
  ],
  computed: {
    header () {
      console.log(this.$route.name)
      return this.$route.name
    }
  },
  methods: {
    isHeaderText () {
      if (this.$route.name === 'Home') {
        return false
      } else {
        return true
      }
    },
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
      if (paths.includes(this.$route.path) && this.$store.state.playing) {
        this.$socket.emit('leave game')
        this.$store.state.playing = false
      }
    },
    goHome () {
      this.$router.push('/home')
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
<style>
  body .sidenav  a:active, body .sidenav a:visited, body .sidenav a:link, .md-list-item .md-list-item-container > .md-icon:first-child  {
    color: white;
  }

  .sidenav .md-theme-default.md-sidenav .md-sidenav-content {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#312ee8+22,ce10cb+69 */
    background: #D63C96; /* Old browsers */
    background: -moz-linear-gradient(135deg, #8f1d61 22%, #246172 69%); /* FF3.6-15 */
    background: -webkit-linear-gradient(135deg, #8f1d61 22%,#246172 69%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #8f1d61 22%,#246172 69%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f1d61', endColorstr='#246172',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  .sidenav .md-list.md-theme-default button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab),
  .sidenav .md-theme-default.md-list .md-list-item-expand .md-list-item-container,
  .sidenav .md-list-item-container.md-button,
  .sidenav .md-list-item.md-list-item-expand,
  .sidenav .md-theme-default.md-toolbar {
    background-color: rgba(0, 0, 0, 0);
  }

  #app .sidenav .md-theme-default.md-list {
    background-color: rgba(0, 0, 0, 0);
  }

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
  #app .logo {
    height: 50px;
    margin: auto;
  }
  .md-toolbar.md-theme-default button{
    flex-grow: 1;
  }
  .md-toolbar.md-theme-default .edge-button,
  .md-toolbar.md-theme-default img {
    flex-grow: 4;
  }
</style>
