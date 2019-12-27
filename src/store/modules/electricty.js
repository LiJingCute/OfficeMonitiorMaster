import {get} from '../../http/axios'

const state = {
    yesterday1:[]

}

const mutations = {
  setYesterday1(state,data){
    state.yesterday1 = data;
  },
 
}

const actions = {
  async getYesterday1({commit},data){
    let response = await get('/LastTwentyfourEnergy?eid=1');
    commit('setYesterday1',response.data)
  },
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
