<template>
  <div class="concept">
    <div class="text">
      <div class="logo-container">
        <img class="left" src="../assets/logo_NG16.svg"></img>
        <img class="right" src="../assets/ng17-logo-color.svg"></img>
      </div>
      <p><a href="https://www.numerik-games.ch">Numerik Games</a> est un festical tout public, organisé par la <a href="http://www.ailleurs.ch/">Maison d'Ailleurs</a>, la ville d'Yverdon-les-Bains et la <a href="https://heig-vd.ch/">HEIG-VD</a>, qui propose des conférences, des performances et des animations relatives au thème de la transition numérique.</p>
      <p>Pour cette édition, nous allons célébrer cette nouvelle ère qui s’ouvre à nous, inondée de nouvelles technologies. Nos modes d’organisation sont bouleversés, de nouvelles pratiques apparaissent, sociales, culturelles, etc. Une transformation profonde est en cours, c’est bien clair ! Faut-il pour autant la voir d’un oeil sombre ?</p>
      <p>Dans l’<strong>espace gratuit du festival</strong>, vous pourrez y découvrir des créations inédites d’artistes, avec comme thème imposé <a href="http://ng17.heig-vd.ch">«clair-obscur»</a>. Le but est de laissez la chance à des personnes de pouvoir exprimer leur art et vision, ces réalisations seront projetées sur un bâtiment du centre historique de la ville d’Yverdon-les-Bains.</p>
      <p>Les soirées du 25 au 26 août 2017, des parties de jeux collaboratifs, avec votre téléphone comme manette, transformeront la façade du Temple en écran de jeu géant.</p>
    </div>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <a href="https://www.numerik-games.ch">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Site web officiel</h2>
            <p>www.numerik-games.ch</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </a>
      <a href="http://ng17.heig-vd.ch">
        <md-list-item>
          <div class="md-list-text-container">
            <h2>Project Eclair|Ages</h2>
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
</style>
