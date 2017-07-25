<template></template>
<script>
  export default {
    name: 'vector',
    methods: {
      getMagnitude (x, y) {
        return Math.sqrt(x * x + y * y)
      }
    }
  }
</script>
