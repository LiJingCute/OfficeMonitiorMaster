import {get} from '../../http/axios'

const state = {
  electricity:[],
  water:[],
}

const mutations = {
  getElectricity(state,data){
    state.electricity = data;
  },
  getWater(state,data){
    state.water = data;
  },
  
}

const actions = {
  async findElectricity({commit},data){
    let response = await get('/selectEAll');
    commit('getElectricity',response.data)
  },

  async findWater({commit},data){
    let response = await get('/selectWAll');
    // console.log("aaaaaa")
    commit('getWater',response.data)
  },
  async findByMY({commit},data){
    let response = await get('/selectEmonth/'+data.year+"/"+data.month+'/'+parseInt(data.value));
    commit('getElectricity',response.data)
  },
async findeWByMy({commit},data){
  let response = await get('selectWmonth/'+data.year+"/"+data.month);
  console.log("aaaaa",)
  commit('getWater',response.data)
},
 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}