<template>
  <div class="information">
    <div class="logo-top">
      <img src="../assets/ng17-logo-color.svg" />
    </div>
    <md-list>
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
      <img class="heig" src="../assets/HEIG-VD_Logo.svg" />
      <img class="mei" src="../assets/logo-MEI-black-text.svg" />
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
.information {
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.information .logo-top img{
  margin: 40px 60px;
}
img.heig {
  flex-grow: 3;
  margin-right: 10px;
}
img.mei {
  flex-grow: 1;
  margin-right: 10px;
  margin-left: 10px;
}

.information .end-logos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.information .end-logos img{
  width: 45%;
}
</style>
