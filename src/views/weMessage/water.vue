<template>
<div class="water">
  <el-tabs v-model="activeName">
    <el-tab-pane label="昨日今日用水量对比" name="first">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>24小时用水数据</h3>
          
          </div>
          <div class="text item"  id="backg">
              <div id="myCharto" :style="{width: '1200px', height: '500px'}" ></div>
          </div>
        </el-card>
    </el-tab-pane>
    <el-tab-pane label="最近三月用水量对比" name="second">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>最近三月用水数据</h3>
        
          </div>
          <div class="text item" id="backg">
              <div id="myChartt" :style="{width: '700px', height: '400px'}" ></div>
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
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    computed:{
      ...mapState('water',['xdata','ydata','tydata','hydata'])
    },
    created(){
      this.getXYdata();
      this.getRealtimeWater();
    },
    mounted () {
      let that = this
      setTimeout(()=>{
        
          this.drawLiness(this.xdata,this.ydata);
          this.drawLine(this.tydata,this.hydata)
      },500)
     
    },
    methods:{
      ...mapActions('water',['getXYdata','getRealtimeWater']),
      drawLine(tydata,hydata){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myCharto'))
        // 绘制图表
        var option = {
          title: {
              text: '一天用水量分布',
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
                  saveAsImage: {}
              }
          },
          xAxis:  {
              type: 'category',
              boundaryGap: false,
              data: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} T'
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
                  color: 'skyblue'
              }, {
                  gt: 6,
                  lte: 8,
                  color: 'palegoldenrod'
              }, {
                  gt: 8,
                  lte: 14,
                  color: 'skyblue'
              }, {
                  gt: 14,
                  lte: 17,
                  color: 'palegoldenrod'
              }, {
                  gt: 17,
                  color: 'skyblue'
              }]
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


        myChart.setOption(option)
    
    },
    drawLiness(xdata,ydata){
        // 基于准备好的dom，初始化echarts实例
        let myChartzz = this.$echarts.init(document.getElementById('myChartt'))
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
                  name:'直接访问',
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
  .water{
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
    margin-bottom: 18px;
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
    height:600px;
  }
</style>