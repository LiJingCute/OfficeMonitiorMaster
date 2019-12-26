import {get} from '../../http/axios'

const state = {
  energyxinxi01:[],
  energy02xinxi02:[],
  energy03xinxi03:[],
  waterxinxi:[]
}

const mutations = {

  getenergyxinxi01(state,data){
    state.energyxinxi01 = data;
  },
  
  getenergyxinxi02(state,data){
    state.energyxinxi02 = data;
  },
  
  getenergyxinxi03(state,data){
    state.energyxinxi03 = data;
  },
  getwaterxinxio1(state,data){
    state.waterxinxi = data;
  },
  


}

const actions = {
  async findenergyxinxi01({commit},data){
    let response = await get('/device/energy/1');
    commit('getenergyxinxi01',response.data)
  },
  async findenergyxinxi02({commit},data){
    let response = await get('/device/energy/2');
    commit('getenergyxinxi02',response.data)
  },
  async findenergyxinxi03({commit},data){
    let response = await get('/device/energy/3');
    commit('getenergyxinxi03',response.data)
  },
  async findwaterxinxi03({commit},data){
    let response = await get('/device/water/1');
    commit('getwaterxinxi',response.data)
  }
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
