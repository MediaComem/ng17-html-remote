<template>
  <div class="info-jeux">
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <router-link to="/">
        <md-list-item>
          <md-avatar class="md-avatar-icon md-medium md-warn blue">
            <md-icon>file_download</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Télécharger Amplified Reality</h2>
            <p>Application IOS et Android</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
      <router-link to="/">
        <md-list-item>
          <md-avatar class="md-avatar-icon md-medium md-warn blue">
            <md-icon>gamepad</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Jouer</h2>
            <p>Manette de jeux</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'info-jeux',
  data () {
    return {
    }
  }
}

</script>
<style>
.info-jeux  {
  margin: 0 5px;
}
</style>
