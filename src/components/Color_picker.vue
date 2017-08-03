<template>
  <div class="color-picker">
    <customSwatch v-for="color in colors" :key="color.id" :color="color" @colorSelected="colorSelected"></customSwatch>
  </div>
</template>

<script>
import colorSwatch from '@/components/Swatch.vue'
export default {
  name: 'color-picker',
  components: {
    'customSwatch': colorSwatch
  },
  props: [
    'colors'
  ],
  methods: {
    colorSelected (e) {
      this.$emit('updateColor', e)
    }

  }
}
</script>

<style>
  .color-picker {
    display: flex;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
