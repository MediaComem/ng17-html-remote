<template>
  <div class="color-selection">
    <div class="container">
      <colorPicker :colors='colors' @updateColor='changeColor' ></colorPicker>
    </div>
  </div>
</template>

<script>
  import colorPicker from '@/components/Color_picker.vue'
  export default {
    name: 'color-selection',
    components: {
      colorPicker
    },
    methods: {
      messageChanged (event) {
        this.pseudo = event
        this.$store.commit('setPseudo', this.pseudo)
      },
      changeColor (color) {
        console.log('this is the color', color)
        this.$socket.emit('set new color', {'newColor': color, 'oldColor': this.$store.state.color})
        this.$store.commit('setColor', color)
        this.$router.push('/play')
      }
    },
    created () {
      this.pseudo = this.$store.state.pseudo
    },
    data () {
      return {
        colors: this.$store.state.colors
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

.vue-color__swatches {
  width: 100%;
  height: 100%;
  box-shadow: none;
}
</style>
