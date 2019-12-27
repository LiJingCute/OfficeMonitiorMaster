<template>
<div class="ele">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="一号电表" name="first">
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
    <el-tab-pane label="二号电表" name="second">
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
    <el-tab-pane label="三号电表" name="third">
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
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },

    mounted () {
      let that = this
      this.drawLineo();
      this.drawLinet();
      this.drawLinee();
      this.drawLineee();
      this.drawLines();
      this.drawLiness();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      drawLineo(){
        // 基于准备好的dom，初始化echarts实例
        let myChartone = this.$echarts.init(document.getElementById('myCharto'))
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
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
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
          visualMap: {
              show: false,
              dimension: 0,
              pieces: [{
                  lte: 6,
                  color: 'mediumvioletred'
              }, {
                  gt: 6,
                  lte: 8,
                  color: 'peachpuff'
              }, {
                  gt: 8,
                  lte: 14,
                  color: 'mediumvioletred'
              }, {
                  gt: 14,
                  lte: 17,
                  color: 'peachpuff'
              }, {
                  gt: 17,
                  color: 'mediumvioletred'
              }]
          },
          series: [
              {
                  name:'今日电量',
                  type:'line',
                  smooth: true,
                  data: [141,152, 157, 123, 220, 210,141,152, 157, 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333],

              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:[ 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333,152, 157, 123, 220, 210,141,152, 157,142],

              }
          ]
      };
    myChartone.setOption(option)
     },
  
      
      
    
        drawLinet(){
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
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        myCharttwo.setOption(option)
    
    },



     drawLinee(){
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
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
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
          visualMap: {
              show: false,
              dimension: 0,
              pieces: [{
                  lte: 6,
                  color: 'green'
              }, {
                  gt: 6,
                  lte: 8,
                  color: 'red'
              }, {
                  gt: 8,
                  lte: 14,
                  color: 'green'
              }, {
                  gt: 14,
                  lte: 17,
                  color: 'red'
              }, {
                  gt: 17,
                  color: 'green'
              }]
          },
          series: [
              {
                  name:'用电量',
                  type:'line',
                  smooth: true,
                  data: [141,123, 153, 123, 220, 410,144,152, 357, 323, 220, 330, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333],
             
              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:[ 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333,152, 157, 123, 220, 210,141,152, 157,142],

              }
          ]
      };
    myChartec.setOption(option)
     },


        drawLineee(){
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
                    data : ['前两个月', '前一个月', '本月', ],
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
                    name:'前两个月',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200,]
                }
            ],
        };
        myChartee.setOption(option)
    
    },



        drawLines(){
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
          toolbox: {
              show: true,
              feature: {
                  saveAsImage: {show:true,title:'下载'}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
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
          visualMap: {
              show: false,
              dimension: 0,
              pieces: [{
                  lte: 6,
                  color: 'green'
              }, {
                  gt: 6,
                  lte: 8,
                  color: 'red'
              }, {
                  gt: 8,
                  lte: 14,
                  color: 'green'
              }, {
                  gt: 14,
                  lte: 17,
                  color: 'red'
              }, {
                  gt: 17,
                  color: 'green'
              }]
          },
          series: [
              {
                  name:'今日用电量',
                  type:'line',
                  smooth: true,
                  data: [141,123, 153, 123, 220, 410,144,152, 357, 323, 220, 330, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333],
        
              },{
                name:'昨日用电量',
                type:'line',
                smooth:true,
                data:[ 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333,152, 157, 123, 220, 210,141,152, 157,142],

              }
          ]
      };
        myCharts.setOption(option)
     },
        drawLiness(){
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
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
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