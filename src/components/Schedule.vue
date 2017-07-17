<template>
  <div>
     <table>
      <th colspan="2">
        <td>{{ night1.tag }}</td>
      </th>

      <tr v-for="item in night1.schedule">
        <td>{{ item.time }}</td>
        <td>{{ item.tag }}</td>
      </tr>
      </table>

    <!-- Second night -->
     <table>
      <th colspan="2">
        <td>{{ night2.tag }}</td>
      </th>

      <tr v-for="item in night2.schedule">
        <td>{{ item.time }}</td>
        <td>{{ item.tag }}</td>
      </tr>
      </table>

  </div>
</template>

<script>
const GAME = 'Amplified Reality / jeux en projection'
const PROJ = 'Clair Obscure / projections'
const PAUSE = 'Pause'
const INTRO = 'Intro'

export default {
  data () {
    return {
      'night1': {
        'tag': '25 août',
        'schedule': [{'time': '20h30', 'tag': INTRO},
      {'time': '20h45', 'tag': GAME},
      {'time': '21h00', 'tag': PROJ},
      {'time': '21h45', 'tag': GAME},
      {'time': '22h00', 'tag': PAUSE},
      {'time': '22h15', 'tag': GAME},
      {'time': '22h30', 'tag': PROJ},
      {'time': '23h15', 'tag': GAME}
        ] },
      'night2': {
        'tag': '26 août',
        'schedule': [{'time': '20h30', 'tag': INTRO},
      {'time': '20h45', 'tag': GAME},
      {'time': '21h00', 'tag': PROJ},
      {'time': '21h45', 'tag': GAME},
      {'time': '22h00', 'tag': PAUSE},
      {'time': '22h15', 'tag': GAME},
      {'time': '22h30', 'tag': PROJ},
      {'time': '23h15', 'tag': GAME}
        ]} }
  }
}
</script>
