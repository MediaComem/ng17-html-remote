<template>
  <div class="queue">
    <div class="tutorial-container">
      <h1>Vous êtes dans la file d'attente</h1>
      <p>il y a {{$store.state.queue.position}} personne(s) devant vous sur un total de {{$store.state.queue.total}} personne(s)</p>
    </div>
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
<style scoped>
.queue {
  margin: 0 5px;
}

.text * {
  align-self: center;
}
</style>
