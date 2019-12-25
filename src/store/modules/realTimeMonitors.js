import {get} from '../../http/axios'
import { config } from '@vue/test-utils';

const state = {
  rtiEQuantity:[],
  rtiWQuantity:[],
  rtiQuota:[],
  rtiEFees:[],
  rtiEChart1:[],
  rtiEChart2:[],
  rtiEChart3:[],
  rtiWChart:[],
  rtiTableEl1:[],
  rtiTableEl2:[],
  rtiTableEl3:[],
  rtiTableEl:[],
  rtiTableEnums1:[],
  rtiTableEnums2:[],
  rtiTableEnums3:[],
  rtiTableEnums:[],
  rtiTableEv1:[],
  rtiTableEv2:[],
  rtiTableEv3:[],
  rtiTableEv:[],
  rtiTableWater:[]
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
    state.rtiTableEl1 = data.eliang1;
    state.rtiTableEl2 = data.eliang2;
    state.rtiTableEl3 = data.eliang3;
    state.rtiTableEl = data.eliang;
    state.rtiTableEnums = data.enums;
    state.rtiTableEnums1 = data.enums1;
    state.rtiTableEnums2 = data.enums2;
    state.rtiTableEnums3 = data.enums3;
    state.rtiTableEv = data.voltage;
    state.rtiTableEv1 = data.voltage1;
    state.rtiTableEv2 = data.voltage2;
    state.rtiTableEv3 = data.voltage3;
    state.rtiTableWater = data.water;
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
