import {get} from '../../http/axios'

const state = {
  electricity:[],
}

const mutations = {
  getElectricity(state,data){
    state.electricity = data;
  },
  
}

const actions = {
  async findElectricity({commit},data){
    let response = await get('/selectEAll');
    commit('getElectricity',response.data)
  },
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
