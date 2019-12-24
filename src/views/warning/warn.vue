<template>
  <div class="warn">
    <div class="top" style="margin:1em">正在为您实时监测异常信息......</div>
        <br><br>
			<p0>今日异常信息为</p0><p1>{{warnToday}}</p1><p0>个</p0><br><br>
      <p2>在过去30天内已为您查找错误信息为</p2><p1>{{warnlist}}</p1><p2>个</p2>
      <div class="right">
           
        <el-button type="primary" @click="dialogTableVisible = true" class="chaxun">查询日志</el-button>
        <el-dialog title="日志详情" :visible.sync="dialogTableVisible">
          <el-button type="primary" class="xiazai">下载日志</el-button>
            <el-table
              :data="warnTable"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="id"
                label="编号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="warndate"
                label="日期"
                width="180">
                <template slot-scope="scope">
                    <span>{{scope.row.warndate.slice(0,10)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="econtent"
                label="预警信息">
              </el-table-column>
            </el-table>
        </el-dialog>
      </div>
          <br><br><br>
      <!-- {{warnTable}} -->
      <!-- {{warnChars}} -->
		  <div class="x-body">
        <div id="main"  class="board-right" >
          <div id="myChart1" :style="{width: '1000px', height: '500px'}"></div>
        </div>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
  export default {
    
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
      }
      },
       computed:{
         ...mapState('warn',['warnlist','warnTable','warnChars','warnToday']),
        
       },
       created(){
            this.findWarnNum();
            this.getWarnMsg();
            this.getChars();
            this.getToday();
       },
       mounted () {
            let that = this
            console.log(this.warnChars)
            this.drawLine1(this.warnChars);
        },
        methods:{ 
          ...mapActions('warn',['findWarnNum','getWarnMsg','getChars','getToday']),
          drawLine1(data){
              // 基于准备好的dom，初始化echarts实例
              let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
              // 绘制图表
              var option1={
                title:{
                  text:"预警信息图表"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: data,
                    type: 'bar'
                }]
            };
              myChart1.setOption(option1)
          }
        
    }
  }
</script>
<style scoped>
.warn{
  padding: 1em;
}
.ell{
  height: 200px;
  width: 70%;
}
body{
		margin:0;
		padding:0;
		font-family:"Microsoft YaHe",微软雅黑;
		background-color:#F8F9FB;
		min-width:1200px;
	}
.board-right{
  width:100%;
  height: 60%;
  background-color: white;
  float: left;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 50px;
  
}
.top{
  background-color:rgba(0,0,0,0.2);
  height:3%;
  color: #330033;
  
}
.warnnum{
  float: right;
}
.right{
  float: right;
  margin-right: 0%;
}
.xiazai{
  margin-bottom: 1em;
}
	p0{
		font-size:20px;
	}
	p1{
		font-size:40px;
		color: red;
	}
	p2{
		font-size:20px;
	}
  .chaxun{
    margin-right: 3em;
  }
  .xiazai{
    float: right;
  }
</style>