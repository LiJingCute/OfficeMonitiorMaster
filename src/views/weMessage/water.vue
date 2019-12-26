<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="昨日今日用水量对比" name="first">
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span :style="center">-----24小时用水数据-----</span>
  
  </div>
  <div class="text item" >
       <div id="myCharto" :style="{width: '1200px', height: '500px'}" ></div>
  </div>
</el-card>
    </el-tab-pane>
    <el-tab-pane label="最近三月用水量对比" name="second">
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>-----最近三月用水数据-----</span>
 
  </div>
  <div class="text item">
      <div id="myChartt" :style="{width: '700px', height: '400px'}" ></div>
  </div>
</el-card>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
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
    mounted () {
      let that = this
      this.drawLine();
      this.drawLiness();
    },
    methods:{
      drawLine(){
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
                  data: [141,152, 157, 123, 220, 210,141,152, 157, 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333],

              },{
                name:'昨日电量',
                type:'line',
                smooth:true,
                data:[ 123, 220, 130, 210,141,152, 123, 220, 130, 210,141,152, 157, 123,222,333,152, 157, 123, 220, 210,141,152, 157,142],

              }
          ]
      };


        myChart.setOption(option)
    
    },
    drawLiness(){
        // 基于准备好的dom，初始化echarts实例
        let myChartzz = this.$echarts.init(document.getElementById('myChartt'))
        // 绘制图表
        var option = {
          title: {
              text: '近三月用水量分布',
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
              data:['前俩月','上一月','本月']
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
                  lte: 1,
                  color: 'skyblue'
              }, {
                  gt: 2,
                  lte: 4,
                  color: 'red'
              }, {
                  gt: 1,
                  lte:1,
                  color: 'skyblue'
              }, {
                  gt: 2,
                  lte: 7,
                  color: 'red'
              }, {
                  gt: 1,
                  color: 'skyblue'
              }]
          },
          series: [
              {
                  name:'上上个月',
                  type:'bar',
                  smooth: true,
                  barwidth:'10',
                  barCategoryGap:'20%',
                  data: [ 66],
                  
              },
         
              {
                name:'上一个月',
                type:'bar',
                smooth:true,
                data:[77],

              }
              ,
         
              {
                name:'本月',
                type:'bar',
                smooth:true,
                data:[111],

              }
          ]
      };
        myChartzz.setOption(option)
    
    }

   

    }
    
    
  };
</script>

<style>
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