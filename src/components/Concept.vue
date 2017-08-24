<template>
  <div class="concept">
    <div class="text">
      <div class="logo-container">
        <img class="left" src="../assets/logo_NG16.svg"></img>
        <img class="right" src="../assets/ng17-logo-color.svg"></img>
      </div>
      <p><a href="https://www.numerik-games.ch">Numerik Games</a> est un festival tout public, organisé par la <a href="http://www.ailleurs.ch/">Maison d'Ailleurs</a>, la <a href="http://www.ylb.ch">ville d'Yverdon-les-Bains</a> et la <a href="https://heig-vd.ch/">HEIG-VD</a>, qui propose des conférences, des performances et des animations relatives au thème de la transition numérique.</p>
      <p>Le festival a lieu à Yverdon-les-Bains, sur deux sites&nbsp;:<p>
        <ul class="sites">
          <li>Parc technologique (<a href="https://www.y-parc.ch">Y-PARC</a>) - <strong>Accès payant</strong></li>
          <li>Place Pestalozzi (centre-ville) - <strong>Accès gratuit</strong></li>
        </ul>
      </p>
      <p>La performance <strong>Eclair|Ages</strong>, proposée par le MEI, se déroulera de <strong>21h à minuit</strong>, les soirées des <strong>25 et 26 août</strong> sur la <strong>Place Pestalozzi.</strong></p>
      <p>Vous y assisterez à une alternance entre <strong>vidéo mapping</strong> et <strong>jeux collaboratifs</strong>.</p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <a href="https://www.numerik-games.ch">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Site web officiel du festival</h2>
            <p>www.numerik-games.ch</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
      <a href="http://ng17.heig-vd.ch">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Projet Eclair|Ages</h2>
            <p>ng17.heig-vd.ch</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'concept',
  data () {
    return {
    }
  }
}

</script>
<style>
.concept {
  margin: 0 5px;
}

.concept img {
  width: 60%;
}

.concept .logo-container {
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;
}

.concept img.right {
  float: right;
}

.concept ul.sites {
  padding-left: 20px;
  list-style-type: circle;
}
</style>
