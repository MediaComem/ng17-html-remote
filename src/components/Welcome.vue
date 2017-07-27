<template>
  <div class="welcome">
    <h1>Amplified Reality</h1>
    <p>Amplified Reality est une famille de jeux conçu pour la façade du Temple Pestalozzi.</p>
    <p>Téléchargez l'application <a href="#">iOS</a> où <a href="#">Android</a> pour jouer.</p>
    <md-button v-if="supported" v-bind:href="dllink" class="md-raised md-primary" ref="dlbutton">Téléchargez l'application</md-button>
    <p v-else>Il semble que vous n'êtes pas sur iOS ou Android. Utilisez l'intérfaçe web.</p>
    <!-- <a :href="googleplay-link"><img alt='Disponible sur Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/fr_badge_web_generic.png'/></a> -->
    <div><a href="/webcontroller">Controlleur web</a></div>
  </div>
</template>

<script>

export default {
  name: 'welcome',
  created () {
    var _os = getMobileOperatingSystem()

    switch (_os) {
      case 'Android':
        this.supported = true
        this.dllink = this.googleplayLink
        break
      case 'iOS':
        this.supported = true
        this.dllink = this.appstoreLink
        break
      default:
        this.supported = false
        this.dllink = this.appstoreLink
        break
    }
  },
  data () {
    return {
      'supported': false,
      'appstoreLink': 'https://www.apple.com',
      'googleplayLink': 'https://www.google.com',
      'dllink': 'www.heig-vd.ch'

    }
  }
}

function getMobileOperatingSystem () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS'
  }

  return 'unknown'
}

</script>
<style>
.welcome {
  margin: 0 5px;
}
</style>
