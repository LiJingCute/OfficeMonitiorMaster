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
    for (var item in response.data) {
      console.log(item)
      var a = new Date().getFullYear();
      var b = new Date().getMonth();
      if (item == "1水表当月") {
        console.log(new Date().getFullYear() + "-" + new Date().getMonth()+1)
        xdata.push(new Date().getFullYear() + "-" + new Date().getMonth()+1)
        console.log(response.data[item])
        ydata.push(response.data[item])
      } else if (item == "1水表前一月") {
        if (new Date().getMonth() == 0) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 12)
        } else {
          xdata.push(new Date().getFullYear() + "-" + parseInt(new Date().getMonth()))
        }
        console.log(response.data[item])
        ydata.push(response.data[item])
      } else {
        if (new Date().getMonth() == 0) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 11)
        } else if (new Date().getMonth() == 1) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 10)
        } else {
          xdata.push(new Date().getFullYear() + "-" + parseInt(new Date().getMonth()) - 1)
        }
        console.log(response.data[item])
        ydata.push(response.data[item])
      }
    }
    console.log(xdata, ydata)
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
