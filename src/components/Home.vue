<template>
  <div class="home">
    <div class="container">
      <div>
        <swatches-picker :value="colors" @input="changeColor" />
      </div>
      <div>
        <app-input @messageChanged="messageChanged"></app-input>
      </div>
      <div>
        <md-button @click="playRoute" class="md-raised md-primary">Jouer</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swatches } from 'vue-color'
  import Input from '@/components/Input.vue'
  export default {
    name: 'home',
    components: {
      'app-input': Input,
      'swatches-picker': Swatches
    },
    methods: {
      messageChanged (event) {
        this.$store.commit('setPseudo', event)
      },
      changeColor (event) {
        this.$store.commit('setColor', event)
      },
      playRoute () {
        this.$router.push('/controller')
      }
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
.container {
  display: grid;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
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
