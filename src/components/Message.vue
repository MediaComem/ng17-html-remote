<template>
  <div>
    <input type="text" v-model="inputContent">
    <p>{{ inputContent }}</p>
  </div>
</template>

<script>
export default {
  name: 'input',
  data () {
    return {
      inputContent: 'content'
    }
  }
}
</script>
