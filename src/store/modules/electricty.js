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
    for (var item in response.data) {
      console.log(item)
      if (item == data + "本月") {
        console.log(new Date().getFullYear() + "-" + new Date().getMonth()+1)
        xdata.push(new Date().getFullYear() + "-" + new Date().getMonth()+1)
        console.log(response.data[item])
        ydata.push(response.data[item])
      } else if (item == data + "上一个月") {
        if (new Date().getMonth() == 0) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 12)
        } else {
          xdata.push(new Date().getFullYear() + "-" + (parseInt(new Date().getMonth()) - 1))
        }
        console.log(response.data[item])
        ydata.push(response.data[item])
      } else {
        if (new Date().getMonth() == 0) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 11)
        } else if (new Date().getMonth() == 2) {
          xdata.push(new Date().getFullYear() - 1 + "-" + 10)
        } else {
          xdata.push(new Date().getFullYear() + "-" + (parseInt(new Date().getMonth()) - 2))
        }
        console.log(response.data[item])
        ydata.push(response.data[item])
      }
    }
    console.log(xdata, ydata)
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
