<template>
  <div class="color-picker">
    <customSwatch v-for="color in colors" :key="color.id" :color="color.hex" v-on:tap="onTap"></customSwatch>
  </div>
</template>

<script>
import swatch from '@/components/Swatch.vue'
export default {
  name: 'color-picker',
  components: {
    'customSwatch': swatch
  },
  props: [
    'colors'
  ],
  created () {
    console.log('colors', this.colors)
    console.log('colors2', this.$store.state.color)
  },
  methods: {
    onTap (e) {
      console.log('what all that', e, this)
      this.$emit('updateColor', this)
    }
  }
}
</script>

<style>

</style>
