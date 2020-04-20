import { get } from '../../http/axios'

const state = {
  xdata: [],
  ydata: [],
  tydata: [],
  hydata: []
}

const mutations = {
  setXData(state, data) {
    state.xdata = data;
  },
  setYData(state, data) {
    state.ydata = data;
  },
  setTYData(state, data) {
    state.tydata = data;
  },
  setHYData(state, data) {
    state.hydata = data;
  },
}

const actions = {
  async getXYdata({ commit }, data) {
    let response = await get('/compare/ThreeMonthEnergy?eid=' + data);
    console.log(response.data, "aaaaaaaaaa");
    var xdata = [];
    var ydata = [];
    var nowYear = new Date().getFullYear();
    var nowMonth = new Date().getMonth() + 1;
    for (var item in response.data) {
      if (item == data + "本月") {
        xdata.push(nowYear + "-" + nowMonth)
        ydata.push(response.data[item])
      } else if (item == data + "上一个月") {
        if (new Date().getMonth() == 0) {
          xdata.push(nowYear-1 + "-" + 12)
        } else {
          xdata.push(nowYear + "-" + (nowMonth-1))
        }
        ydata.push(response.data[item])
      } else {
        if (nowMonth-2 == 0) {
         xdata.push(nowYear - 1 + "-" + 11)
        } else if (nowMonth == 1) {
         xdata.push(nowYear - 1 + "-" + 10)
        } else {
         xdata.push(nowYear + "-" + (nowMonth-2))
        }
        ydata.push(response.data[item])
      }
    }
    commit('setXData', xdata)
    commit('setYData', ydata)
    return response
  },


  async getRealtimeElectricity(context, data) {
    let response = await get('/compare/TodayTwentyfourEnergy?eid=' + data);
    let res = await get('/compare/LastTwentyfourEnergy?eid=' + data);
    // console.log(tydata,hydata)
    context.commit('setTYData', response.data)
    context.commit('setHYData', res.data);
    return response;
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}