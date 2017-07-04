<script>
export default {
  data () {
    return {
      'something': null
    }
  },
  render (h) {
    return h() // avoid warning message
  },
  created () {
    var data = {
      'type': 'client'
    }
    this.$socket.emit('identify', data)
  }
}
</script>
