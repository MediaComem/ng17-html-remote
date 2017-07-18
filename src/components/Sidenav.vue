<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Eclair | Age</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container" @click="goHome">
          <md-icon class="sidebar-home">home</md-icon>
          <h3 class="md-title">Menu</h3>
        </div>
        <md-list>
          <md-list-item>
            <md-icon>send</md-icon><span><router-link @click.native="close()" to="/color_selection">Color selection</router-link></span>
          </md-list-item>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon><span><router-link @click.native="close()" to="/controller">Controller</router-link></span>
          </md-list-item>
          <md-list-item>
            <md-icon>show_chart</md-icon><span><router-link @click.native="close()" to="/stats">Stats</router-link></span>
          </md-list-item>
          <md-list-item>
            <md-icon>view_list</md-icon><span><router-link @click.native="close()" to="/schedule">Programme</router-link></span>
          </md-list-item>

        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>
<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    close () {
      this.$refs.leftSidenav.close()
    },
    goHome () {
      this.$router.push('/')
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
</style>
