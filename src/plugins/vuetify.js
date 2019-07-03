import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import theme from './theme'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})
