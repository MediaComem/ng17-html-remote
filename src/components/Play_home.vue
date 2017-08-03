<template>
  <div class="play-home" v-if="!isAGameRunning()">
    il n'y a pas de jeux en ce moment
  </div>
  <queue v-else-if="!isPlaying()"></queue>
  <controller v-else-if="isTapController()"></controller>
  <controller-swipe v-else-if="isSwipeController()"></controller-swipe>
  <ar v-else></ar>
</template>

<script>
  import Controller from '@/components/Controller.vue'
  import ControllerSwipe from '@/components/Controller_swipe.vue'
  import Ar from '@/components/Ar.vue'
  import Queue from '@/components/Queue.vue'
  export default {
    name: 'play-home',
    components: {
      'controller': Controller,
      'controller-swipe': ControllerSwipe,
      'ar': Ar,
      'queue': Queue
    },
    created () {
      console.log('play')
      this.$socket.emit('play')
    },
    methods: {
      isAGameRunning () {
        return this.$store.state.gameType !== 'none'
      },
      isPlaying () {
        return this.$store.state.playing
      },
      isTapController () {
        return this.$store.state.gameType === 'destruction'
      },
      isSwipeController () {
        return this.$store.state.gameType === 'bucket'
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
