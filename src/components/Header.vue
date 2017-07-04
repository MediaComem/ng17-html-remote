<template>
  <div class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/controller/10">Controller</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'This is the header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
