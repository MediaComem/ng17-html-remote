<template>
  <div class="contrib">
    <p>Voici un aperçu des contributions des artistes, que vous pourrez découvrir lors des sessions de vidéo mapping, à partir de <strong>21h et 22h30</strong>, les soirées des <strong>25 et 26 août</strong>, sur la <strong>Place Pestalozzi</strong>.</p>
    <ul>
      <li v-for="contrib in contributions">
        <md-card md-with-hover>
          <md-card-media>
            <img :src="getImgUrl(contrib.img)" :alt="contrib.name"/>
          </md-card-media>
          <md-card-content class="content">
            <h3>{{ contrib.name }}</h3>
            <h5>{{ contrib.organisation }}</h5>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-icon-button"  v-if="contrib.links!=null" v-for="link in contrib.links" :key="link.id">
              <a :href="link.url"><md-icon :md-iconset="link.icon" class="md-size-1x md-primary"></md-icon></a>
            </md-button>
          </md-card-actions>
        </md-card>
      </li>
    </ul>
  </div>
</template>

<script>
const TWITTER = 'fa fa-twitter'
const INSTAGRAM = 'fa fa-instagram'
const FACEBOOK = 'fa fa-facebook'
const LINK = 'fa fa-link'
const VIMEO = 'fa fa-vimeo'
const YOUTUBE = 'fa fa-youtube'
const BEHANCE = 'fa fa-behance'

export default {
  name: 'contrib',
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
.contrib {
  margin: 10px;
}
.contrib ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contrib li {
  list-style: none;
  margin-bottom: 25px;
}

.content h3, .content h5 {
  color: #161616;
  margin-top: 0px;
  margin-bottom: 0px;
}
.contrib .content {
  padding: 14px 14px 5px 14px;
}
.contrib .md-card-actions {
  padding-top: 0px;
}
</style>
