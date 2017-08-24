<template>
  <div class="play-home" v-if="!isAGameRunning()">
    <p>Il n'y a pas de jeu en ce moment.</p>
    <md-list>
      <md-divider class="md-inset light"></md-divider>
      <router-link to="/programme">
        <md-list-item>
          <md-avatar class="md-avatar-icon md-medium md-warn blue">
            <md-icon>list</md-icon>
          </md-avatar>
          <div class="md-list-text-container">
            <h2>Programme</h2>
            <p>Organisation des soirées</p>
          </div>
          <md-icon class="white-icon">navigate_next</md-icon>
        </md-list-item>
      </router-link>
    </md-list>
  </div>
  <timeout v-else-if="$store.state.timedout"></timeout>
  <queue v-else-if="isQueuing()"></queue>
  <controller v-else-if="isTapController()"></controller>
  <controller-swipe v-else-if="isSwipeController()"></controller-swipe>
  <controller-slingshot v-else-if="isSlingshotController()"></controller-slingshot>
  <ar v-else></ar>
</template>

<script>
import Controller from '@/components/Controller_tap.vue'
import ControllerSwipe from '@/components/Controller_swipe.vue'
import ControllerSlingshot from '@/components/Controller_slingshot.vue'
import Ar from '@/components/Ar.vue'
import Queue from '@/components/Queue.vue'
import Timeout from '@/components/Timedout.vue'
export default {
  name: 'play-home',
  components: {
    'controller': Controller,
    'controller-swipe': ControllerSwipe,
    'controller-slingshot': ControllerSlingshot,
    'ar': Ar,
    'queue': Queue,
    'timeout': Timeout
  },
  created() {
    if (this.$store.state.gameType !== 'ar') {
      this.$socket.emit('play')
    }
  },
  computed: {
    gameType() {
      if (this.$store.state.gameType === 'ar') {
        this.$socket.emit('leave game')
      }
      return this.$store.state.gameType
    },
    playing() {
      return this.$store.state.playing
    },
    queuing() {
      return this.$store.state.queuing
    }
  },
  methods: {
    isAGameRunning() {
      return this.gameType !== 'none'
    },
    isPlaying() {
      return this.playing
    },
    isQueuing() {
      return this.queuing
    },
    isTapController() {
      return this.gameType === 'destruction'
    },
    isSwipeController() {
      return this.gameType === 'target'
    },
    isSlingshotController() {
      return this.gameType === 'bucket'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.play-home {
  margin: 5px;
}

.tutorial-container {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#312ee8+22,ce10cb+69 */
  background: #D63C96;
  /* Old browsers */
  background: -moz-linear-gradient(135deg, #8f1d61 22%, #246172 69%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(135deg, #8f1d61 22%, #246172 69%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #8f1d61 22%, #246172 69%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f1d61', endColorstr='#246172', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  position: relative;
  margin: 10px;
  padding: 20px;
  border-radius: 25px;
  background-color: white;
  height: 86vh;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.tutorial-container .md-raised.md-accent {
  align-self: center;
}

.tutorial-container h1 {
  font-size: 10vw;
  line-height: 10vw;
  text-align: center;
}

.tutorial-container img {
  width: 80%;
}

.tutorial-container .title-container {
  width: 80%;
}

hr {
  width: 90%;
}
</style>
