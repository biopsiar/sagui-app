import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    left: 0,
    right: 0,
    up: 0,
    reports: 0,
    points: 0,
  },
  mutations: {
    increment (state, direction) {
      state[direction]++;
    },
    incrementPoints (state) {
      state.points += 50;
    }
  },
  actions: {

  }
})
