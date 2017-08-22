<template>
  <div class="schedule">
    <img class="headerImg" src='../assets/NG16-GOT_82.jpg'></img>
    <md-list class="md-double-line">
      <md-list-item>
        <div class="md-list-text-container">
          <span>25-26 août 2017</span>
          <span>Temple, Place Pestalozzi, Yverdon-Les-Bains</span>
        </div>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
      <md-list-item>
        <div class="time">21h00</div>
        <div class="md-list-text-container">
          <h2>Vidéo mapping</h2>
          <p>Clair-Obscur: HEIG-VD et artistes</p>
        </div>
        <md-avatar class="md-avatar-icon md-medium md-warn pink">
          <md-icon>movie</md-icon>
        </md-avatar>
      </md-list-item>
      <md-list-item>
        <div class="time">21:45</div>
        <div class="md-list-text-container">
          <h2>Jeux</h2>
          <p>Amplified Reality</p>
        </div>
        <md-avatar class="md-avatar-icon md-medium md-warn blue">
          <md-icon>gamepad</md-icon>
        </md-avatar>
      </md-list-item>
      <md-list-item>
        <div class="time">22:30</div>
        <div class="md-list-text-container">
          <h2>Vidéo mapping</h2>
          <p>Clair-Obscur: HEIG-VD et artistes</p>
        </div>
        <md-avatar class="md-avatar-icon md-medium md-warn pink">
          <md-icon>movie</md-icon>
        </md-avatar>
      </md-list-item>
      <md-list-item>
        <div class="time">23:15</div>
        <div class="md-list-text-container">
          <h2>Jeux</h2>
          <p>Amplified Reality</p>
        </div>
        <md-avatar class="md-avatar-icon md-medium md-warn blue">
          <md-icon>gamepad</md-icon>
        </md-avatar>
      </md-list-item>
      <md-divider class="md-inset"></md-divider>
    </md-list>
    <gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 300px; margin-top: 20px; margin-bottom: 20px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
  </gmap-map>
  <md-list class="md-double-line">
    <md-divider class="md-inset light"></md-divider>
    <a href="https://www.numerik-games.ch/#programme">
      <md-list-item>
        <div class="md-list-text-container">
          <h2>Numerik Games</h2>
          <p>Programme complet du festival</p>
        </div>
        <md-icon class="white-icon">navigate_next</md-icon>
      </md-list-item>
    </a>
  </md-list>
  </div>
</template>
<script>
export default {
  name: 'schedule',
  data () {
    return {
      center: {lat: 46.778642, lng: 6.641279},
      markers: [{
        position: {lat: 46.778642, lng: 6.641279}
      }]
    }
  }
}
</script>
<style>
.schedule {
  margin: 5px;
}

.schedule .time {
  background: white;
  color: #161616;
  padding: 10px;
}

.schedule .md-list-text-container {
  padding-right: 5px;
  padding-left: 10px;
}

.schedule .md-theme-default.md-list {
  background-color: #161616;
  color: white;
}

.schedule .md-list-text-container > :nth-child(2){
  color: grey;
}

.schedule .md-divider {
 background-color: grey;
}

.headerImg {
  height: 200px;
  width: 100%;
}

.schedule .md-theme-default.md-avatar.md-warn.md-avatar-icon.blue {
  background-color: #2995A8;
}

.schedule .md-theme-default.md-avatar.md-warn.md-avatar-icon.pink {
  background-color: #D63C96;
}

</style>
