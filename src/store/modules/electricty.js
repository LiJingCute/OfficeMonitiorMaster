import {get} from '../../http/axios'

const state = {
   xdata:[],
   ydata:[]
}

const mutations = {
  setXData(state,data){
    state.xdata = data;
  },
  setYData(state,data){
    state.ydata = data;
  },
}

const actions = {
  async getXYdata({commit},data){
    let response = await get('/compare/ThreeMonthEnergy?eid=1');
    console.log(response.data,"aaaaaaaaaa ");
    var xdata=[];
    var ydata=[];
    for(var item in response.data){
        console.log(item)
        if(item=="1本月"){
            console.log(new Date().getFullYear()+"-"+new Date().getMonth())
            xdata.push(new Date().getFullYear()+"-"+new Date().getMonth())
            console.log(response.data[item])
            ydata.push(response.data[item])
        }else if(item=="1上一个月"){
            xdata.push(new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())-1))
            console.log(response.data[item])
            ydata.push(response.data[item])
        }
        else{
            xdata.push(new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())-2))
            console.log(response.data[item])
            ydata.push(response.data[item])
        }
    } 
    console.log(xdata,ydata)
    commit('setXData',xdata)
    commit('setYData',ydata)
  }
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
