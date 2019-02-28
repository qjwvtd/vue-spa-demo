import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment () {
      this.state.count = this.state.count + 1;
      console.log(this.state.count);
    }
  }
});