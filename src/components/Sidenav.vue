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
            <md-icon class="sidebar-home">home</md-icon>
            <h3 class="md-title">Menu</h3>
          </div>
          <md-list>
            <md-list-item>
              <md-icon>send</md-icon><span><a @click="location()">Color selection</a></span>
            </md-list-item>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon><span><router-link @click.native="close()" to="/controller">Controller</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon><span><router-link @click.native="close()" to="/controller-swipe">Controller swipe</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>show_chart</md-icon><span><router-link @click.native="close()" to="/stats">Stats</router-link></span>
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
    location () {
      console.log(this.$route.path)
      if (this.$route.path === '/controller' || this.$route.path === '/controller-swipe') {
        this.$router.push('/color-selection' + this.$route.path)
      } else {
        this.$router.push('/color-selection/waiting')
      }
      this.$refs.leftSidenav.close()
    },
    close () {
      this.$refs.leftSidenav.close()
    },
    goHome () {
      this.$router.push('/welcome')
      this.$refs.leftSidenav.close()
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
