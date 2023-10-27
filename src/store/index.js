import Vue from 'vue'
import Vuex from 'vuex'

// modules
import flight from '@/store/modules/flight';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    flight
  }
})