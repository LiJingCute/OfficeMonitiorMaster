import {get} from '../../http/axios'

const state = {
  warnlist:[],
  warnTable:[],
  warnToday:[],
  XData:[],
  YData:[],
}

const mutations = {
  getWarnNums(state,data){
    state.warnlist = data;
  },
  getWarnMessages(state,data){
    state.warnTable = data;
  },
  getWarnToday(state,data){
    state.warnToday = data;
  },
  setXData(state,data){
    state.XData = data;
  },
  setYData(state,data){
    state.YData = data;
  },
  // setDown(state,data){
  //   state.down = data;
  // }
}

const actions = {
  async findWarnNum({commit},data){
    let response = await get('/warn/warnnums');
    commit('getWarnNums',response.data)
  },
  async getWarnMsg({commit},data){
    // console.log("table","aaaaaa")
    let response = await get('/warn/warnlist');
    commit('getWarnMessages',response.data)
  },

  async getToday({commit},data){
    // console.log("today","bbbbbb")
    let response = await get('/warn/daywarnnums');
    commit('getWarnToday',response.data)
  },
  async downloadTable({commit},data){
    let response = await get('/warn/ewarn');
    // commit('setDown',response.data)


  },
  async getXYData({commit},data){
   
    let response = await get('/warn/zhexianXwarn');
    let rs = await get('/warn/zhexianwarn');
    var arr=[];
    response.data.forEach((item)=>{
      console.log(item)
      arr.push(item.slice(0,10))
    })
    console.log(arr,"xzo")
    commit('setXData',arr)
    commit('setYData',rs.data)

    
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
