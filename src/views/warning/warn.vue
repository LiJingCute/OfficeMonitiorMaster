<template>
  <div class="warn">
    <div class="top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;正在为您实时监测异常信息......</div>
        <br><br>
        
        
		<!-- <div class="warnnum"> -->
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<p0>今日异常信息为</p0><p1>0</p1><p0>个</p0><br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p2>在过去30天内已为您查找错误信息为</p2><p1>25</p1><p2>个</p2>
<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
            <div class="right">
            <!-- <input type="button" value="查询日志" style="width: 75%;height:5%;border-radius: 8px;font-size: 18px;background-color: #6699cc;color: white;">  -->
            <!-- Table -->
            <!-- <el-button type="text" @click="dialogTableVisible = true">查询日志</el-button> -->
            <el-button type="primary" @click="dialogTableVisible = true" class="chaxun">查询日志</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
              <el-button type="primary" class="xiazai">下载日志</el-button>
              <!-- <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
              </el-table> -->
               <el-table
                :data="tableData"
                height="250"
                border
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </el-dialog>
            
            </div>
            <br><br><br>
		<!-- </div>	 -->
		<div class="x-body">
        
			<div id="main"  class="board-right" >
        <div id="myChart1" :style="{width: '1000px', height: '500px'}"></div>
      </div>
			
            
        </div>
  </div>
</template>
<script>

  export default {
     mounted () {
        let that = this
        this.drawLine1();
     },
    methods:{ 
      drawLine1(){
              // 基于准备好的dom，初始化echarts实例
              let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
              // 绘制图表
              var option1={
                title:{
                  text:"hhhh"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
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
