<template>
  <div class="color-picker">
    <swatch v-for="color in colors" :key="color.id" :color="color.hex" v-on:tap="onTap"></swatch>
  </div>
</template>

<script>
import swatch from '@/components/Swatch.vue'
export default {
  name: 'color-picker',
  components: [
    swatch
  ],
  props: [
    'colors'
  ],
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
