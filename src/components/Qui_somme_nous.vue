<template>
  <div class="qui-somme-nous">
    <div class="text">
      <img class="mei-logo" src="../assets/logo-MEI.svg"></img>
      <p>Nous sommes le MEI <span class="nota-bene">(Media Engineering Institute)</span>, une unité de recherche de la <a href="https://heig-vd.ch/">HEIG-VD</a> <span class="nota-bene">(Haute Ecole d’Ingénierie et Gestion du Canton de Vaud)</span> active dans le domaine des médias numériques et qui emploie de jeunes diplômés en <a href="https://heig-vd.ch/formations/bachelor/filieres/ingenierie-des-medias">ingénierie des médias.</a></p>
      <p>Nous soutenons activement le festival <a href="https://www.numerik-games.ch/">Numerik Games</a>, d'un genre nouveau, depuis sa création <span class="nota-bene">(voir ci-dessous nos performances pour les éditions précédentes)</span>.</p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <a href="http://blog.comem.ch/2015/11/16/numerik-games-le-teaser-2015/">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Teaser Numerik Games</h2>
            <p>Septembre 2015</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
      <a href="http://blog.comem.ch/2017/01/26/games-of-tron/">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>1ère édition Numerik Games</h2>
            <p>Septembre 2016</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'qui-somme-nous',
  data () {
    return {
    }
  }
}

</script>
<style>
.qui-somme-nous {
  margin: 0 5px;
}

.mei-logo {
  margin: 30px 20px;
}

.nota-bene {
  font-style: italic;
  font-size: 0.9em;
}
</style>
