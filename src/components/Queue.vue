<template>
  <div class="queue">
    <h1>Waiting for your turn</h1>
    <p>you are in position {{$store.state.queue.position}} of {{$store.state.queue.total}}</p>
  </div>
</template>

<script>

export default {
  name: 'queue',
  data () {
    return {

    }
  }
}

</script>
<style>
.queue {
  margin: 0 5px;
}
</style>
