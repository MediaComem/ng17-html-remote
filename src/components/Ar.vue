<template>
  <div class="ar">
    <div class="tutorial-container">
      <h1>Réalité augmentée</h1>
      <p>Pour jouer à ce jeu vous devez télécharger une application qui exploite la camera de votre téléphone.</p>
      <p>Téléchargez l'application <a href="#">iOS</a> où <a href="#">Android</a> pour jouer.</p>
      <div class="app-container">
        <a href="https://itunes.apple.com/ch/app/amplified-reality/id1272141234?mt=8" style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg) no-repeat;width:135px;height:40px;background-size:contain;"></a>
        <a class="android" href='https://play.google.com/store/apps/details?id=ch.heigvd.po.amplifiedreality&utm_source=ng17-remote&utm_campaign=ar&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
      </div>
      <!-- <a :href="googleplay-link"><img alt='Disponible sur Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/fr_badge_web_generic.png'/></a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ar',
  computed: {
    IOS () {
      return this.$store.state.os === 'IOS'
    },
    Android () {
      return this.$store.state.os === 'Android'
    }
  }
}

</script>
<style>
.ar {
  margin: 0 5px;
}
.ar .app-container {
  display: block;
}
.ar a.android img{
  width: 135px;
  margin: 0;
}
</style>
