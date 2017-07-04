<template>
  <md-input-container md-inline>
    <label>Pseudo</label>
    <md-input v-model="inputValue" @change="changeMessage"></md-input>
  </md-input-container>
</template>

<script>
export default {
  name: 'input',
  props: [
    'msg'
  ],
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    changeMessage (event) {
      this.inputValue = event
      this.$emit('messageChanged', this.inputValue)
    }
  }
}
</script>
<style scoped="">

.md-input-container {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}



</style>
