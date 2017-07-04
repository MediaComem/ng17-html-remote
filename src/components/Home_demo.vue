<template>
  <div class="home">
    <p>{{ message }}</p>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>
</template>

</template>

<script>
import Input from '@/components/Input.vue'
export default {
  name: 'home',
  components: {
    'app-input': Input
  },
  data () {
    return {
      message: 'hi'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
