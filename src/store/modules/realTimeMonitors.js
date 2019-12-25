import {get} from '../../http/axios'

const state = {
  rtiEQuantity:[],
  rtiWQuantity:[],
  rtiQuota:[],
  rtiEFees:[],
  rtiEChart1:[],
  rtiEChart2:[],
  rtiEChart3:[],
  rtiWChart:[],
  rtiTable:[],
}

const mutations = {
  getRti(state,data){
    console.log(data);
    state.rtiEQuantity = data.rtiEnergy;
    state.rtiWQuantity = data.rtiWater;
    state.rtiQuota = data.edu;
    state.rtiEFees = data.price;
  },
  getRtiEnergy1(state,data){
    console.log(data);
    state.rtiEChart1 = data;
  },
  getRtiEnergy2(state,data){
    console.log(data);
    state.rtiEChart2 = data;
  },
  getRtiEnergy3(state,data){
    console.log(data);
    state.rtiEChart3 = data;
  },
  getRtiWater(state,data){
    console.log(data);
    state.rtiWChart = data;
  },
  getRtiInformation(state,data){
    console.log(data);
    state.rtiTable = data;
  }
}

const actions = {
  async getRti({commit},data){
    let response = await get('/getRti');
    commit('getRti',response.data)
  },
  async getRtiEnergy1({commit},data){
    let response = await get('/getEnergy1');
    commit('getRtiEnergy1',response.data)
  },
  async getRtiEnergy2({commit},data){
    let response = await get('/getEnergy2');
    commit('getRtiEnergy2',response.data)
  },
  async getRtiEnergy3({commit},data){
    let response = await get('/getEnergy3');
    commit('getRtiEnergy3',response.data)
  },
  async getRtiWater({commit},data){
    let response = await get('/getWater');
    commit('getRtiWater',response.data)
  },
  async getRtiInformation({commit},data){
    let response = await get('/getRtiInformation');
    commit('getRtiInformation',response.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
