import { get } from '../../http/axios'

const state = {
  xdata: [],
  ydata: [],
  yesterdayWater: [],
  txdata: [],
  tydata: [],
  hxdata: [],
  hydata: []
}

const mutations = {
  setXData(state, data) {
    state.xdata = data;
  },
  setYData(state, data) {
    state.ydata = data;
  },
  setYesWater(state, data) {
    state.yesterdayWater = data;
  },
  setTXData(state, data) {
    state.txdata = data;
  },
  setTYData(state, data) {
    state.tydata = data;
  },
  setHXData(state, data) {
    state.hxdata = data;
  },
  setHYData(state, data) {
    state.hydata = data;
  },
}

const actions = {
  async getXYdata({ commit }, data) {
    let response = await get('/compare/ThreeMonthWater?wid=1');
    console.log(response.data, "aaaaaaaaaa ");
    var xdata = [];
    var ydata = [];
    var nowYear = new Date().getFullYear();
    var nowMonth = new Date().getMonth() + 1;
    for (var item in response.data) {
      if (item == "1水表当月") {
        xdata.push(nowYear + "-" + nowMonth)
        ydata.push(response.data[item])
      } else if (item == "1水表前一月") {
        if (nowMonth == 0) {
          xdata.push(nowYear-1 + "-" + 12)
        } else {
          xdata.push(nowYear + "-" + (nowMonth-2))
        }
        ydata.push(response.data[item])
      } else {
        if (nowMonth-2 == 0) {
          xdata.push(nowYear - 1 + "-" + 11)
        } else if (nowMonth == 1) {
          xdata.push(nowYear - 1 + "-" + 10)
        } else {
          xdata.push(nowYear + "-" + (nowMonth-1))
        }
        ydata.push(response.data[item])
      }
    }
    commit('setXData', xdata)
    commit('setYData', ydata)
  },
  async getYesWater({ commit }, data) {
    // console.log("today","bbbbbb")
    let response = await get('/LastTwentyfourWater?wid=1');
    commit('setYesWater', response.data)
  },
  async getRealtimeWater(context, data) {
    let response = await get('/compare/TodayTwentyfourWater?wid=1');
    let res = await get('/compare/LastTwentyfourWater?wid=1');


    context.commit('setTYData', response.data)

    context.commit('setHYData', res.data)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}