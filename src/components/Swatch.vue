<template>
  <div class="swatch-css" :style="colorCSS" @click="selectColor">
    <md-icon :style="fontColor" v-if="isSelected()">check</md-icon>
  </div>
</template>

<script>
export default {
  name: 'swatch',
  props: [
    'color'
  ],
  data () {
    return {
      colorCSS: {
        background: this.color.hex
      },
      fontColor: {
        color: this.color.font
      }
    }
  },
  methods: {
    selectColor (e) {
      this.$emit('colorSelected', this.color)
    },
    isSelected () {
      return this.color.name === this.$store.state.color.name
    }
  }
}
</script>

<style scoped>
  .swatch-css {
    display: inline-block;
    width: 40px;
    height: 30px;
    margin: 5px;
  }
  .swatch-css i {
    margin-left: 8px;
    margin-top: 3px;
  }
</style>
