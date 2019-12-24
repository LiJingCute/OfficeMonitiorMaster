import {get} from '../../http/axios'

const state = {
  warnlist:[],
  warnTable:[],
  warnChars:[],
  warnToday:[],
}

const mutations = {
  getWarnNums(state,data){
    state.warnlist = data;
  },
  getWarnMessages(state,data){
    state.warnTable = data;
  },
  getWarnChars(state,data){
    state.warnChars = data;
  },
  getWarnToday(state,data){
    state.warnToday = data;
  }
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
  async getChars({commit},data){
    // console.log("chars","bbbbbb")
    let response = await get('/warn/zhexianwarn');
    commit('getWarnChars',response.data)
  },
  async getToday({commit},data){
    console.log("today","bbbbbb")
    let response = await get('/warn/daywarnnums');
    commit('getWarnToday',response.data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
