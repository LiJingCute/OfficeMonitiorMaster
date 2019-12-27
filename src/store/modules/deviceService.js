import {get} from '../../http/axios'
import request from 'axios'
const state = {
  energyxinxi01:[],
  energyxinxi02:[],
  energyxinxi03:[],
  waterxinxi:[],

}

const mutations = {

  getenergyxinxi01(state,data){
    var obj = [];
    obj.push(data);
    state.energyxinxi01 = obj;
  },
  
  getenergyxinxi02(state,data){
    var obj2 = [];
    obj2.push(data);
    state.energyxinxi02 = obj2;
  },
  
  getenergyxinxi03(state,data){
    var obj = [];
    obj.push(data);
    state.energyxinxi03 = obj;
  },
  getwaterxinxi(state,data){
    var obj = [];
    obj.push(data);
    state.waterxinxi = obj;
  },
  


}

const actions = {
  async findenergyxinxi01({commit},data){
    let response = await get('/cao/energy/id?eid=1');
    commit('getenergyxinxi01',response.data)

    // console.log(response.data,"aa")
  },
  async findenergyxinxi02({commit},data){
   
    let response = await get('/cao/energy/id?eid=2');
    // console.log(response.data,'aaaaa')
    commit('getenergyxinxi02',response.data)
  },
  async findenergyxinxi03({commit},data){
    let response = await get('/cao/energy/id?eid=3');
    commit('getenergyxinxi03',response.data)
  },
  async findwaterxinxi({commit},data){
    let response = await get('cao/water/id?id=1');
    commit('getwaterxinxi',response.data)
  },
  async addEID1({commit},data){
    let response = await request.put('/cao/energy/eedu?id=1'+"&eedu="+data);
    // commit('getwaterxinxi',response.data)
    return response;
  },
  async addEID2({commit},data){
    let response = await request.put('/cao/energy/eedu?id=2'+"&eedu="+data);
    // commit('getwaterxinxi',response.data)
    return response;
  },
  async addEID3({commit},data){
    let response = await request.put('/cao/energy/eedu?id=3'+"&eedu="+data);
    // commit('getwaterxinxi',response.data)
    return response;
  },
  async addWID({commit},data){
    let response = await request.put('/cao/energy/wedu?id=1'+"&wedu="+data);
    // commit('getwaterxinxi',response.data)
    return response;
  },
  async addDinaj({commit},data){
    let response = await request.put('/cao/energy/eprice');
    // commit('getwaterxinxi',response.data)
    return response;
  },
  async addShuij({commit},data){
    let response = await request.put('/cao/water/wprice');
    // commit('getwaterxinxi',response.data)
    return response;
  },
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
