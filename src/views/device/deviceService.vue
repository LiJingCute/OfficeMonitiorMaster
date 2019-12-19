<template>
  <div class="realTime">
    <div class="title">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="hover">
            实时用电量
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            实时用水量
            
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            剩余额度
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            当月电费
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 折线图 -->
    <div class="chart1">
        <div id="myChart" :style="{width: '600px', height: '500px'}"></div>
   
        <div class="table">
              <h3>设备耗能</h3>
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="device"
                  label="设备"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="i"
                  label="电流"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="electricity"
                  label="电压"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="water"
                  label="用水"
                  width="150">  
                </el-table-column>
              </el-table>
        </div>
       </div>
  </div>
</template>

<script>
export default {
    name: 'test1',
    data () {
      return {
        map: null
      }
    },
    mounted () {
      let that = this
      this.drawLine();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        var option = {
              title: {
        text: '实时信息'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
        };

        myChart.setOption(option)
    }
    }
  }
</script>

<style scoped>
.realTime{
    background-color: rgba(255, 255, 255, 0.884);
    border-radius:5px;
    padding: 1em;
}
.chart1{
  margin-top: 2em;
 
}
#myChart{
 float: left;
}
.table{
  float: left; 
  size: "small"; 
  margin-left: 2em;
 
}
.el-card{
  background-color: rgba(63, 128, 193, 0.5);
}
</style>