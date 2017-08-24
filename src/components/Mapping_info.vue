<template>
  <div class="info-map">
    <div class="text">
      <p>Un écran de 24" c'est sympa, une TV de 80" c'est cool, mais un bâtiment de 27 mètres c'est mieux.</p>
      <p>C’est pourquoi nous avons décidé de proposer à des artistes amateurs ou professionnels du monde entier, de participer au vidéo mapping de cette édition 2017 de <a href="https://www.numerik-games.ch/">Numerik Games.</a></p>
      <p>Ils pouvaient s’exprimer par vidéo (animation, 3D, ...) ou en images, sur le thème <strong>«clair-obscur»</strong>, de manière abstraite, figurative ou métaphorique, tout en jouant avec l’architecture imposante du Temple historique d’Yverdon-les-Bains.</p>
      <p>Ce ne sont pas moins de <strong>15 artistes internationaux</strong> dont les oeuvres vous seront présentées à partir de <strong>21h et 22h30</strong>, les soirées des <strong>25 et 26 août</strong> sur la <strong>Place Pestalozzi.</strong></p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <md-list-item>
        <router-link to="/mapping">
          <md-avatar class="md-avatar-icon md-medium md-warn pink">
            <md-icon>movie</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Vidéo mapping</h2>
            <p>Les artistes de l'appel à projets</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </router-link>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'info-map',
  data () {
    return {
    }
  }
}

</script>
<style>
.info-map {
  margin: 0;
}
</style>
