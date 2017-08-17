<template>
  <div class="schedule">
    <ul v-for="contrib in contributions">
      <li>
        <img :src="getImgUrl(contrib.img)" />
        <h3>{{ contrib.name }}</h3>
        <h5>{{ contrib.organisation }}</h5>
        <div v-if="contrib.links!=null" v-for="link in contrib.links">
          <a :href="link.url"><icon :name="link.icon" scale="2"></icon></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from 'vue-awesome'

const TWITTER = 'twitter'
const INSTAGRAM = 'instagram'
const FACEBOOK = 'facebook'
const LINK = 'link'
const VIMEO = 'vimeo'
const YOUTUBE = 'youtube'
const BEHANCE = 'behance'

export default {
  name: 'schedule',
  components: {
    'icon': Icon
  },
  methods: {
    getImgUrl (url) {
      return require('../assets/' + url + '.jpg')
    }
  },
  data () {
    return {
      'contributions': [
        {
          'img': 'Frantisek_Pechacek',
          'name': 'Frantisek Pechacek',
          'organisation': 'Black Division',
          'links': [
            {'url': 'https://www.facebook.com/blackdivisioncz/', 'icon': FACEBOOK},
            {'url': 'http://www.blackdivision.cz', 'icon': LINK}
          ]
        },
        {
          'img': 'clairo_mylenedreyer',
          'name': 'Mylène Dreyer',
          'links': [
            {'url': 'https://twitter.com/mylenedrei', 'icon': FACEBOOK},
            {'url': 'https://vimeo.com/mylenedreyer', 'icon': VIMEO},
            {'url': 'http://www.mylenedreyer.ch', 'icon': LINK}
          ]
        },
        {
          'img': 'Gildas_Malassinet-Tannou',
          'name': 'Gildas Malassinet-Tannou',
          'links': [
            {'url': 'https://www.facebook.com/gildaslightpainting', 'icon': FACEBOOK},
            {'url': 'https://www.youtube.com/user/ICARART/', 'icon': YOUTUBE},
            {'url': 'http://www.icarart.com', 'icon': LINK}
          ]
        },
        {
          'img': 'Iglal',
          'name': 'Iglal Boulad',
          'links': [
            {'url': 'http://iglal.boulad.net/', 'icon': LINK}
          ]
        },
        {
          'img': 'Jerem_oury',
          'name': 'Jerem Oury',
          'organisation': 'Studio Echelon Mapping',
          'links': [
            {'url': 'https://www.instagram.com/studio_echelon_mapping/', 'icon': INSTAGRAM},
            {'url': 'https://www.facebook.com/studioechelonmapping/', 'icon': FACEBOOK},
            {'url': 'https://vimeo.com/jeremoury', 'icon': VIMEO},
            {'url': 'http://echelon8.wix.com/echelon8/mapping', 'icon': LINK}
          ]
        },
        {
          'img': 'Kylan_Luginbuhl',
          'name': 'Kylan Luginbuhl',
          'links': [
            {'url': 'https://www.facebook.com/kylanluginbuhldesign/', 'icon': FACEBOOK}
          ]
        },
        {
          'img': 'Linda_Kocher',
          'name': 'Linda Kocher'
        },
        {
          'img': 'Louis_Philippe',
          'name': 'Louis Philippe - Margot Hofmans',
          'organisation': 'Resonance Visuals',
          'links': [
            {'url': 'https://www.instagram.com/resonance_visuals/', 'icon': INSTAGRAM},
            {'url': 'https://www.facebook.com/ResonanceVisuals/', 'icon': FACEBOOK},
            {'url': 'https://www.vjbooking.com/network/profile/resonance-visuals', 'icon': LINK}
          ]
        },
        {
          'img': 'Mirko_Stanchieri',
          'name': 'Mirko Stanchieri',
          'links': [
            {'url': 'https://twitter.com/winnyxbear', 'icon': TWITTER},
            {'url': 'https://www.instagram.com/winnyxbear/', 'icon': INSTAGRAM},
            {'url': 'https://vimeo.com/user11176421', 'icon': VIMEO},
            {'url': 'https://www.behance.net/theGrizzli', 'icon': BEHANCE}
          ]
        },
        {
          'img': 'Philippe_Rohrbach',
          'name': 'Philippe Rohrbach',
          'organisation': 'dap-dap',
          'links': [
            {'url': 'https://twitter.com/mr_dap_dap', 'icon': TWITTER},
            {'url': 'https://www.facebook.com/MrDapDap/', 'icon': FACEBOOK},
            {'url': 'http://dapdap.ch/', 'icon': LINK}
          ]
        },
        {
          'img': 'reckless_numerik',
          'name': 'Roger Winzeler',
          'organisation': 'reckless collective<',
          'links': [
            {'url': 'https://www.instagram.com/recklesscollective/', 'icon': INSTAGRAM},
            {'url': 'https://www.facebook.com/recklesscollective/', 'icon': FACEBOOK}
          ]
        },
        {
          'img': 'Stanislas_Bernatt',
          'name': 'Stanislas Bernatt - Geoffrey Marchal',
          'links': [
            {'url': 'https://www.facebook.com/Stanislas-Bernatt-Art-Design-549008441831596/', 'icon': FACEBOOK},
            {'url': 'http://www.stanislasbernatt.com/', 'icon': LINK}
          ]
        },
        {
          'img': 'Tamara_Virag',
          'name': 't.m.r'
        },
        {
          'img': 'Thomas_Lemarquier',
          'name': 'Thomas Lemarquier',
          'links': [
            {'url': 'https://www.facebook.com/TL3DGraphicDesign/', 'icon': FACEBOOK},
            {'url': 'http://www.tlemarquier.com/', 'icon': LINK}
          ]
        },
        {
          'img': 'Guillaume',
          'name': 'Guillaume Simmen',
          'organisation': 'gs–tudio',
          'links': [
            {'url': 'http://guillaume-simmen.ch/', 'icon': LINK}
          ]
        }
      ]
    }
  }
}
</script>
<style>
.schedule {
  margin: 5px;
}
</style>
<style src="vue-material/dist/vue-material.css"></style>
