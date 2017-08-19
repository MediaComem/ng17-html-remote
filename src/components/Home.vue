<template>
  <div class="home">
    <router-link  class="item" :to="{ path: '/information' }">
      <div>
        <md-icon class="md-size-4x md-primary">info</md-icon>
        <p>Information</p>
      </div>
    </router-link>
    <router-link class="item" :to="{ path: '/programme' }">
      <div>
        <md-icon class="md-size-4x md-primary">list</md-icon>
        <p>Programme</p>
      </div>
    </router-link>
    <router-link  class="item" :to="{ path: '/play' }">
      <div>
        <md-icon class="md-size-4x md-primary">gamepad</md-icon>
        <p>Jeux</p>
      </div>
    </router-link>
    <router-link class="item" :to="{ path: '/play' }">
      <div>
        <md-icon class="md-size-4x md-primary">movie</md-icon>
        <p>Vidéo mapping</p>
      </div>
    </router-link>
    <a  class="item" href="https://www.facebook.com/ng17mapping/">
      <div>
        <md-icon md-iconset="fa fa-facebook-official" class="md-size-4x md-primary"></md-icon>
        <p>Facebook</p>
      </div>
    </a>
    <a class="item" href="https://www.instagram.com/ng17mapping/">
      <div>
        <md-icon md-iconset="fa fa-instagram" class="md-size-4x md-primary"></md-icon>
        <p>Intagram</p>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'home'
}

</script>
<style>
.home {
  padding: 0;
  margin: 0 5px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}
.item {
  display: flex;
  flex: 1 50%;
  padding: 20px;
  height: 30vh;
  justify-content: center;
}
.item p {
  width: 100%;
  text-align: center;
}
</style>
