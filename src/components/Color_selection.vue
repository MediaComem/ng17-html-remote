<template>
  <div class="color-selection">
    <div class="container">
      <div>
        <swatches-picker :value="colors" @input="changeColor"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swatches } from 'vue-color'
  import Input from '@/components/Input.vue'
  export default {
    name: 'color-selection',
    components: {
      'app-input': Input,
      'swatches-picker': Swatches
    },
    methods: {
      messageChanged (event) {
        this.pseudo = event
        this.$store.commit('setPseudo', this.pseudo)
      },
      changeColor (event) {
        this.$store.commit('setColor', event)
        console.log(this.$route.path)
        if (this.$route.path === '/color-selection/controller' || this.$route.path === '/color-selection/controller-swipe') {
          this.$router.push('/' + this.$route.params.type)
        }
      }
    },
    created () {
      this.colors = this.$store.getters.getColor
      this.pseudo = this.$store.state.pseudo
    },
    data () {
      return {
        colors: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.color-selection {
  margin: 5px;
}

.container {
  display: grid;
}

.vue-color__swatches__box {
  width: 320px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.vue-color__swatches {
  width: 100%;
  height: 100%;
  box-shadow: none;
}
</style>
