<template>
  <div class="play-home" v-if="!isAGameRunning()">
    il n'y a pas de jeux en ce moment
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
    created () {
      if (this.$store.state.gameType !== 'ar') {
        this.$socket.emit('play')
      }
    },
    computed: {
      gameType () {
        if (this.$store.state.gameType === 'ar') {
          this.$socket.emit('leave game')
        }
        return this.$store.state.gameType
      },
      playing () {
        return this.$store.state.playing
      },
      queuing () {
        return this.$store.state.queuing
      }
    },
    methods: {
      isAGameRunning () {
        return this.gameType !== 'none'
      },
      isPlaying () {
        return this.playing
      },
      isQueuing () {
        return this.queuing
      },
      isTapController () {
        return this.gameType === 'destruction'
      },
      isSwipeController () {
        return this.gameType === 'target'
      },
      isSlingshotController () {
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
</style>
