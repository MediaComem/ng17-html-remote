<script>
export default {
  data () {
    return {
      'something': null
    }
  },
  render (h) {
    return h() // avoid warning message
  }
}
</script>
