import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
		num: 0
	},
	mutations: {
		change (state,data) {
			state.num += data;
		}
	},
	actions: {
		changeAction({commit},data){
			commit('change',data);
		}
	}
})

export default store