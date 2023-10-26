import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/scss/vuetify/overrides.scss'
Vue.use(Vuetify);

const theme = {
    primary: '#891b55',
    info: '#1e88e5',
    success: '#21c1d6',
    accent: '#f0a7a6',
    default: '#563dea'
}

export default new Vuetify({
    theme: {
        themes: {
          dark: theme,
          light: theme,
        },
      }
});
