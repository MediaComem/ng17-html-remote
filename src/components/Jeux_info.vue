<template>
  <div class="info-jeux">
    <div class="text">
      <p>En alternance avec le vidéo mapping, nous vous proposons <strong>Amplified Reality</strong>, un ensemble de jeux utilisant votre propre téléphone portable comme manette.</p>
      <p>Certains d'entre eux peuvent être joués directement depuis ce site Web (section <strong>Jouer</strong> du menu), d'autres nécessitent le téléchargement de l'application dédiée <strong>Amplified Reality</strong>.</p>
      <p>Téléchargez-la dès maintenant pour être parmis les premiers à tenter l'expérience.</p>
      <p>Les sessions de jeux démarrent à <strong>21h45 et 23h15</strong>, les soirées des <strong>25 et 26 août</strong> sur la <strong>Place Pestalozzi.</strong></p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>

      <a v-if="IOS" href="https://itunes.apple.com/ch/app/amplified-reality/id1272141234?mt=8">
        <md-list-item>
          <md-avatar class="md-avatar-icon md-medium md-warn blue">
            <md-icon>file_download</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Télécharger Amplified Reality</h2>
            <p>Application IOS</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
      <a v-else-if="Android" href="https://play.google.com/store/apps/details?id=ch.heigvd.po.amplifiedreality">
        <md-list-item>
          <md-avatar class="md-avatar-icon md-medium md-warn blue">
            <md-icon>file_download</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Télécharger Amplified Reality</h2>
            <p>Application Android</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
      <div v-else>
        <a href="https://play.google.com/store/apps/details?id=ch.heigvd.po.amplifiedreality">
          <md-list-item>
            <md-avatar class="md-avatar-icon md-medium md-warn blue">
              <md-icon>file_download</md-icon>
            </md-avatar>
            <div class="md-list-text-container">
              <h2>Télécharger Amplified Reality</h2>
              <p>Application Android</p>
            </div>
            <md-icon class="white-icon">navigate_next</md-icon>
          </md-list-item>
        </a>
        <a href="https://itunes.apple.com/ch/app/amplified-reality/id1272141234?mt=8">
          <md-list-item>
            <md-avatar class="md-avatar-icon md-medium md-warn blue">
              <md-icon>file_download</md-icon>
            </md-avatar>
            <div class="md-list-text-container">
              <h2>Télécharger Amplified Reality</h2>
              <p>Application IOS</p>
            </div>
            <md-icon class="white-icon">navigate_next</md-icon>
          </md-list-item>
        </a>
      </div>
      <router-link to="/play">
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
  computed: {
    IOS () {
      console.log(this.$store.state.os)
      return this.$store.state.os === 'IOS'
    },
    Android () {
      console.log(this.$store.state.os)
      return this.$store.state.os === 'Android'
    }
  },
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
