import {get} from '../../http/axios'

const state = {
  warnToday:[],
  rtiEQuantity:[],
  rtiWQuantity:[],
  rtiEFees:[],
  
}

const mutations = {
  getWarnToday(state,data){
    state.warnToday = data;
  },
 
  // setDown(state,data){
  //   state.down = data;
  // }

  getRti(state,data){
    //console.log(data);
    state.rtiEQuantity = data.rtiEnergy;
    state.rtiWQuantity = data.rtiWater;
    state.rtiEFees = data.price;
  },

  
}

const actions = {
 
  async getToday({commit},data){
    // console.log("today","bbbbbb")
    let response = await get('/warn/daywarnnums');
    commit('getWarnToday',response.data)
  },
  async getRti({commit},data){
    let response = await get('/getRti');
    commit('getRti',response.data)
  },

 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}