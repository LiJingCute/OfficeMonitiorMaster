<template>
  <div class="realTime">
    <div class="titlee">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="hover">
            实时用电量<br/>
            <p1>
              {{rtiEQuantity}}
            </p1>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            实时用水量<br/>
            <p1>
              {{rtiWQuantity}}
            </p1>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            剩余额度<br/>
            <p1>
              {{rtiQuota}}
            </p1>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            当月电费<br/>
            <p1>
              {{rtiEFees}}
            </p1>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 折线图 -->
    <div class="chart1">
        <div id="myChart" :style="{width: '700px', height: '500px'}"></div>
   
        <div class="table">
              <h3>设备能耗</h3>
              <el-table
                :data="rtiTable"
                border
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="设备"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="eliang"
                  label="电量"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="enums"
                  label="电流"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="voltage"
                  label="电压"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="water"
                  label="用水"
                  width="130">  
                </el-table-column>
              </el-table>
        </div>
       </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data () {
      return {
        map: null
      }
    },
    computed:{
         ...mapState('realTimeMonitors',['rtiEQuantity','rtiWQuantity','rtiQuota','rtiEFees','rtiEChart1','rtiEChart2',
                                          'rtiEChart3','rtiWChart','rtiTable']),
        
    },
    created(){
            this.getRti();
            this.getRtiEnergy1();
            this.getRtiEnergy2();
            this.getRtiEnergy3();
            this.getRtiWater();
            this.getRtiInformation();
    },
    mounted () {
      let that = this
       setTimeout(()=>{
              this.drawLine(this.rtiEChart1,this.rtiEChart2,this.rtiEChart3,this.rtiWChart);
            },500)
     
    },
    methods:{
      ...mapActions('realTimeMonitors',['getRtiInformation','getRtiEnergy1','getRtiEnergy2','getRtiEnergy3','getRtiWater','getRti']),
      drawLine(data1,data2,data3,data4){
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
        data:['电表一','电表二','电表三','水表']
    },
    grid: {
        left: '3%',
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
        data: ['8：00','8：30','9：00','9：30','10：00','10：30','11：00','11:30','12:00','12:30']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'电表一',
            type:'line',
            stack: '总量',
            data:data1
        },
        {
            name:'电表二',
            type:'line',
            stack: '总量',
            data:data2
        },
        {
            name:'电表三',
            type:'line',
            stack: '总量',
            data:data3
        },
        {
            name:'水表',
            type:'line',
            stack: '总量',
            data:data4
        }
    ]
        };

        myChart.setOption(option)
    }
    }
  }
</script>

<style scoped>
 /* body{
    margin:0;
		padding:0;
		font-family:"Microsoft YaHe",微软雅黑;
		background-color:rebeccapurple;
		min-width:1200px;
} */

 .titlee{
	margin-top: 20px;
	margin-left: 35px;
  margin-right: 15px;
} 
 .chart1{
	margin-top: 50px;
} 
 #myChart{
	background-color: white;
	border-radius: 10px; 
	float: left;
	margin-left:35px;
	box-shadow: 10px 10px 5px #888888;
} 
 .table{
  width: 40%;
	background-color: white;
	border-radius: 10px; 
	float: right;
	margin-right: 20px;
	box-shadow: 10px 10px 5px #888888;
} 
.el-card{
	font-size: 26px;
	text-align: center;
	background-color: white;
	border: 3px solid #F2F2F2;
  border-radius: 10px;
	padding: 30px;
  box-shadow: 5px 5px 5px #888888;
}
</style>