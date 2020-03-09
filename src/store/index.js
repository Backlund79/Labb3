import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: null
  },
  mutations: {
    updateText(state, text) {
      state.text = text;
    }
  },
  actions: {},
  modules: {}
});