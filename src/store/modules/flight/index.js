
const state = {
   flightResults: []
}

// getters
const getters = {

}

// actions 
const actions = {
   getFlightResults(context, payload) {
      context.commit('setFlightResults', payload);
   }
}

// mutations
const mutations = {
   setFlightResults(state, category) {
      state.selectedProduct = category;
   }
}

export default {
   state,
   getters,
   actions,
   mutations
}
