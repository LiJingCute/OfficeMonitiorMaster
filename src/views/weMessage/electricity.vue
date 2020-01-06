<template>
<div class="ele">

  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="一号电表" name="1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">  
            <span>一号电表:今日昨日用电量对比</span>   
        </div>
        <div  class="text item" id="backg">
            <div id="myCharto" :style="{width: '700px', height: '400px'}" ></div>
        </div>  
      </el-card>
        <br>    
        <br>    
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>一号电表:最近三月用电量对比</span> 
        </div>
        <div  class="text item" id="backg">
            <div id="myChartt" :style="{width: '700px', height: '400px'}" ></div>
        </div>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="二号电表" name="2">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>二号电表：今日昨日用电量对比</span>
            </div>
            <div class="text item" id="backg">
                <div id="myCharte" :style="{width: '700px', height: '400px'}" ></div>
            </div>
        </el-card>
    
       <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>二号电表:最近三月用电量对比</span>
            </div>
            <div  class="text item" id="backg">
                <div id="myChartee" :style="{width: '700px', height: '400px'}" ></div>
            </div>
        </el-card>
    </el-tab-pane>
    <el-tab-pane label="三号电表" name="3">
        <el-card class="box-card">
            <div slot="header" class="clearfix" >
                <span>三号电表：今日昨日用电量对比</span>
            </div>
            <div  class="text item" id="backg">
                <div id="myCharts" :style="{width: '700px', height: '400px'}" ></div>
            </div>
        </el-card>
    
      <el-card class="box-card">
        <div slot="header" class="clearfix" >
            <span>三号电表:最近三月用电量对比</span>
        </div>
        <div  class="text item" id="backg">
            <div id="myChartss" :style="{width: '700px', height: '400px'}" ></div>
        </div>
        </el-card>
    </el-tab-pane>
  </el-tabs>
</div>      
</template>
<script>
import { mapState, mapActions } from 'vuex';
  export default {
    data() {
      return {
        activeName: '1'
      };
    },
    mounted () {
      let that = this
      setTimeout(()=>{
        this.drawLineo(this.tydata,this.hydata);
        this.drawLinet(this.xdata,this.ydata);
      })
      
    
      
    },
    computed:{
        ...mapState('electricty',['tydata','hydata','xdata','ydata']),
    },
    created(){
        
       this.getRealtimeElectricity(1);
       this.getXYdata(1);
    },
    methods: {
        ...mapActions('electricty',['getRealtimeElectricity','getXYdata']),
      handleClick(tab, event) {
        //console.log(tab, event);
        console.log(parseInt(this.activeName))
        if(parseInt(this.activeName)==2){
            this.getRealtimeElectricity(parseInt(this.activeName)).then(()=>{
                this.drawLinee(this.tydata,this.hydata);
                
            })
            this.getXYdata(parseInt(this.activeName)).then(()=>{
                this.drawLineee(this.xdata,this.ydata);
            });
        }else if(parseInt(this.activeName)==3){
            this.getRealtimeElectricity(parseInt(this.activeName)).then(()=>{
                this.drawLines(this.tydata,this.hydata);
                
            })
            this.getXYdata(parseInt(this.activeName)).then(()=>{
                this.drawLiness(this.xdata,this.ydata);
                
            });
        }else  if(parseInt(this.activeName)==1){
            this.getRealtimeElectricity(parseInt(this.activeName)).then(()=>{
                this.drawLineo(this.tydata,this.hydata);
                
            })
            this.getXYdata(parseInt(this.activeName)).then(()=>{
                this.drawLinet(this.xdata,this.ydata);

            });
        }
        
      },
      drawLineo(tydata,hydata){
        // 基于准备好的dom，初始化echarts实例
        let myChartone = this.$echarts.init(document.getElementById('myCharto'))
        // 绘制图表
        var option = {
          title: {
              text: '一天用电量分布',
              subtext: ''
          },
          legend:{
              data:['今日电量','昨日电量']
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} W'
              },
              axisPointer: {
                  snap: true
              }
          },
         
          series: [
              {
                  name:'今日电量',
                  type:'line',
                  smooth: true,
                  data: tydata

              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:hydata

              }
          ]
      };
    myChartone.setOption(option)
     },
  
      
      
    
        drawLinet(xdata,ydata){
        // 基于准备好的dom，初始化echarts实例
        let myCharttwo = this.$echarts.init(document.getElementById('myChartt'))
        // 绘制图表
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
          
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data :xdata,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'最近三月对比',
                    type:'bar',
                    barWidth: '60%',
                    data:ydata
                }
            ]
        };
        myCharttwo.setOption(option)
    
    },



     drawLinee(tydata,hydata){
        // 基于准备好的dom，初始化echarts实例
        let myChartec = this.$echarts.init(document.getElementById('myCharte'))
        // 绘制图表
        var option = {
          title: {
              text: '一天用电量分布',
              subtext: ''
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
            legend:{
                data:['今日电量','昨日电量']

            },
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} W'
              },
              axisPointer: {
                  snap: true
              }
          },
          
          series: [
              {
                  name:'今日电量',
                  type:'line',
                  smooth: true,
                  data: tydata
             
              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:hydata

              }
          ]
      };
    myChartec.setOption(option)
     },


        drawLineee(xdata,ydata){
        // 基于准备好的dom，初始化echarts实例
        let myChartee = this.$echarts.init(document.getElementById('myChartee'))
        // 绘制图表
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : xdata,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'最近三月对比',
                    type:'bar',
                    barWidth: '60%',
                    data:ydata
                }
            ],
        };
        myChartee.setOption(option)
    
    },



        drawLines(tydata,hydata){
        // 基于准备好的dom，初始化echarts实例
        let myCharts = this.$echarts.init(document.getElementById('myCharts'))
        // 绘制图表
        var option = {
          title: {
              text: '一天用电量分布',
              subtext: ''
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
            legend:{
                data:['今日电量','昨日电量']

            },
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} W'
              },
              axisPointer: {
                  snap: true
              }
          },
         
          series: [
              {
                  name:'今日电量',
                  type:'line',
                  smooth: true,
                  data: tydata
        
              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:hydata

              }
          ]
      };
        myCharts.setOption(option)
     },
        drawLiness(xdata,ydata){
        // 基于准备好的dom，初始化echarts实例
        let myChartzz = this.$echarts.init(document.getElementById('myChartss'))
        // 绘制图表
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : xdata,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'最近三月对比',
                    type:'bar',
                    barWidth: '60%',
                    data:ydata
                    
                }
            ]
        };
        myChartzz.setOption(option)
    
    }

   

    }
  };
  
</script>
<style>
.ele{
    padding: 1em;
}
#backg{
    width: 90%;
    background-color: white;
    border-radius: 10px; 
    float: right;
    margin-right: 20px;
    box-shadow: 10px 10px 5px #888888;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 25px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width: 100%;
    height:700px;
}
</style>