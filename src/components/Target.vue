<template>
  <img class="target" :class="classObject" :style="{ height: 80 +'px', width: 80 + 'px', left: posX + 'px', top: posY + 'px' }" ref='templeTarget' src='../assets/Target.png' />
</template>

<script>
export default {
  name: 'target',
  props: [
    'posX', 'posY', 'size'
  ],
  data () {
    return {
      classObject: {
        'isHidden': true,
        'isShowing': false
      }
    }
  },
  methods: {
    displayTarget () {
      this.classObject.isHidden = false
      this.classObject.isShowing = true
    }
  }
}
</script>
<style scoped>
.target {
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
}
.isHidden {
  display: none;
}
.isShowing {
  display: block;
}
</style>
