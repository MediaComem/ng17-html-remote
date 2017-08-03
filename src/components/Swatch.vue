<template>
  <div class="color" :style="color">

  </div>
</template>

<script>
export default {
  name: 'swatch',
  el: 'color',
  props: [
    'color'
  ],
  data () {
    return {
      color: {
        background: 'red'
      }
    }
  }
}
</script>

<style scoped>
  .colors {
    width: 20px;
    height: 15px;
  }
</style>
