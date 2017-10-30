import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./mutation-types.js"
Vue.use(Vuex);

const state={
	IsOpenTaskba:false
}

const getters={

}

const mutations={
	[types.openTask]:function(state){
		state.IsOpenTaskba=true;
	},
	[types.closeTask]:function(state){
		state.IsOpenTaskba=false;
	}
}

const actions={

}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})