import {get} from '../../http/axios'

const state = {
   xdata:[],
   ydata:[],
   today1:[],
   yesterday1:[]

}

const mutations = {
  setXData(state,data){
    state.xdata = data;
  },
  setYData(state,data){
    state.ydata = data;
  },
  gettoday1(state,data){
    state.today1 = data;
  },
  getyesterday1(state,data){
    state.yesterday1 = data;
  }
}

const actions = {
    async gettoday1({commit},data){
        let response = await get('/compare/TodayTwentyfourWater?wid=1');
        commit('today1',response.data)
      },
      async getyesterday1({commit},data){
        let response = await get('/compare/LastTwentyfourWater?wid=1');
        commit('yesterday1',response.data)
      },
  async getXYdata({commit},data){
    let response = await get('/compare/ThreeMonthWater?wid=1');
    console.log(response.data,"aaaaaaaaaa");
    var xdata=[];
    var ydata=[];
    for(var item in response.data){
        console.log(item)
        if(item=="1水表当月"){
            console.log(new Date().getFullYear()+"-"+new Date().getMonth())
            xdata.push(new Date().getFullYear()+"-"+new Date().getMonth())
            console.log(response.data[item])
            ydata.push(response.data[item])
        }else if(item=="1水表前一月"){
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
