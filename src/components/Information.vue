<template>
  <div class="information">
    <div class="logo-top">
      <img src="../assets/ng17-logo-color.svg" />
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <router-link to="/qui_somme_nous">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Qui somme nous?</h2>
            <p>MEI - Media engeneering institute</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
      <router-link to="/concept">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Concept</h2>
            <p>Eclair|Ages et Numerik Games</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
      <router-link to="/mapping_info">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Vidéo mapping</h2>
            <p>Clair-Obscur: Appel à projets</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
      <router-link to="/jeux_info">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Développement de jeux</h2>
            <p>Amplified Reality</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
    </md-list>
    <div class="end-logos">
      <img src="../assets/logo-MEI.svg" />
      <img src="../assets/logo-MEI.svg" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'information',
  data () {
    return {
    }
  }
}

</script>
<style>
.information f
.information .logo-top  img{
  margin: 40px 60px;
}

.information .end-logos {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: white;
}
.information .end-logos img{
  width: 45%;
}
</style>
