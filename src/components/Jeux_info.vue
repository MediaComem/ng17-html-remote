<template>
  <div class="info-jeux">
    <div class="text">
      <p>L’idée de simuler une expérience en éliminant les risques est très attirante pour l’Homme. C’est le concept qui se trouve derrière chaque jeu vidéo. Donné une opportunité a quiconque de pouvoir volé d’être le héros de l’histoire, ou de plus simplement casser un mur. Les expériences varient et évoluent, mais la question est toujours la même. Comment rendre cette expérience plus immersive?</p>
      <p>Aujoud’hui on se retrouve aux milieux d’une transition, d’un côté on a la réalité virtuelle qui permet me placer le joueur dans un univers virtuel a l’aide d’un casque et de l’autre la réalité augmentée, ou des objets virtuels se place dans notre monde a travers un écran de smartphone ou de lunette spécialisée.</p>
      <p>Avec Amplified Reality nous avons voulu toucher un aspect qui manquait aux deux technologies: le partage de l’expérience. Au lieu d’avoir un univers limité aux écrans des casques et de smartphone, Amplified Reality permet aux joueurs d’interagir avec la façade du temple à travers des mannettes de tout genre.</p>
      <p>Venez joué a nos jeux à <strong>21h et 22h30</strong> les soirées des <strong>25 et 26 août</strong> sur la <strong>Place Pestalozzi.</strong></p>
      <p>Un des modes du jeu dépend d’une application qui se trouve ce dessous. Pour ne pas attendre au moment que le mode est lancé, télécharger l’application en avance.</p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
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
      </a>
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
