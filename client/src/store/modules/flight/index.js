const airportsData = [
   {
      "iata": "LHR",
      "lon": "-0.453566",
      "iso": "GB",
      "status": 1,
      "name": "London Heathrow Airport",
      "continent": "EU",
      "type": "airport",
      "lat": "51.469604",
      "size": "large"
   },
   {
      "iata": "ZRH",
      "lon": "8.561746",
      "iso": "CH",
      "status": 1,
      "name": "Zurich Airport",
      "continent": "EU",
      "type": "airport",
      "lat": "47.450603",
      "size": "large"
   },
   {
      "iata": "FRA",
      "lon": "8.570773",
      "iso": "DE",
      "status": 1,
      "name": "Frankfurt am Main International Airport",
      "continent": "EU",
      "type": "airport",
      "lat": "50.050735",
      "size": "large"
   },
   {
      "iata": "FIV",
      "iso": "US",
      "status": 1,
      "name": "Five Finger CG Heliport",
      "continent": "NA",
      "type": "heliport",
      "size": null
   },
   {
      "iata": "FAK",
      "iso": "US",
      "status": 1,
      "name": "False Island Seaplane Base",
      "continent": "NA",
      "type": "seaplanes",
      "size": null
   },
   {
      "iata": "BWS",
      "iso": "US",
      "status": 0,
      "name": "Blaine Municipal Airport",
      "continent": "NA",
      "type": "closed",
      "size": null
   },
   {
      "iata": "WKK",
      "lon": "-158.61111",
      "iso": "US",
      "status": 1,
      "name": "Aleknagik New Airport",
      "continent": "NA",
      "type": "airport",
      "lat": "59.27778",
      "size": "medium"
   },
   {
      "iata": "TSS",
      "iso": "US",
      "status": 1,
      "name": "East 34th Street Heliport",
      "continent": "NA",
      "type": "heliport",
      "size": null
   },
   {
      "iata": "FOB",
      "lon": "-123.79444",
      "iso": "US",
      "status": 1,
      "name": "Fort Bragg Airport",
      "continent": "NA",
      "type": "airport",
      "lat": "39.474445",
      "size": "small"
   }]
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const { VUE_APP_BASE_URL } = process.env

Vue.use(VueAxios, axios)

const state = {
   flightResults: null,
   airports: airportsData

}

// getters
const getters = {

}

// actions 
const actions = {
   async getFlightResults(context, payload) {
      const { origin, destination, departureDate, returnDate } = payload
      try {
         const { data } = await axios.get(`${VUE_APP_BASE_URL}promotions/priceoffers/ond/${origin}/${destination}?departureDate=${departureDate}&returnDate=${returnDate}`)
         context.commit('setFlightResults', data);
         // context.commit('setFlightResults', payload);
      } catch (error) {
         context.commit('setFlightResults', null);
      }
   }
}

// mutations
const mutations = {
   setFlightResults(state, data) {
      state.flightResults = data;
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}
