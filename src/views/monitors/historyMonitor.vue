<template>
  <div class="history">
  <div>
    <h1>用电信息</h1>
  </div>
     


  <div id="gundongtiaoid">
    <el-date-picker
        v-model="dateVal"
        type="daterange"
        size="small"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOption"
        :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  

  </div>

  <div id="sec">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
  </div>

    <div id="buttonid">
      <el-button type="primary" >点击查询</el-button>
    </div>



  <div id="tableid"> 
    <el-table
    :data="electricity"
    style="width: 46%; margin-left:25%;margin-top:5%; boder:none"
    border>
    <el-table-column
      prop="eDate"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="eid"
      label="电表"
      width="180"
      :formatter="selectEle">
    </el-table-column>
    <el-table-column
      prop="eliang"
      label="用电量">
    </el-table-column>
    <el-table-column
      prop="eprice"
      label="总金额">
    </el-table-column>
  </el-table>
  </div>
<div>
  <h1>用水信息</h1>
</div>



<div id="gundongtiaoidtwo">
    <el-date-picker
        v-model="dateVal"
        type="daterange"
        size="small"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOption"
        :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  

  </div>
   <div id="buttonid">
      <el-button type="primary" >点击查询</el-button>
    </div>

    <div id="tableid"> 
    <el-table
    :data="water"
    style="width: 46%; margin-left:25%;margin-top:5%; boder:none"
    border>
    <el-table-column
      prop="wDate"
      label="日期"
      width="180">
      <template slot-scope="scope">
          <span>{{scope.row.warndate.slice(0,10)}}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      prop="waternum"
      label="用水量">
    </el-table-column>
    <el-table-column
      prop="wprice"
      label="总金额">
    </el-table-column>
  </el-table>
  </div>












      </div>

   <!-- <el-button type="primary">主要按钮</el-button> -->
   
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {


    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
  },
    computed:{
        ...mapState('historyMonitor',['electricity','water']),
      
    },
    created(){
        this.findElectricity();
        this.findWater();
    },
    methods:{
      ...mapActions('historyMonitor',['findElectricity','findWater']),
      selectEle:function (row, column, eid) {
            if (eid === "1"){
                return '电表1';
            }else if (eid === "2"){
                return '电表2';
            }else{
              return '电表3'
            }
        }
         
            }
        
    
}
  

</script>

<style socped>

 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

#sec{
  position: absolute;
  float: left;
  margin-left: 57%;
  margin-top: -3.3%
}
#gundongtiaoid{
  margin-left: 35%;
  height: 30%;
}
#gundongtiaoidtwo{
  margin-left: 35%;
}
h1 {
  text-align:center;
  margin-right: 10%;
}
#divid{
  margin-left: 40%;
  height: 100%;
  width: 100%;

  
}
#buttonid{
  float: left;
  position: absolute;
  margin-left: 65%;
  margin-top: -2.1%;
  
}


#tableid{
 
  margin-right: 20%;
  width: 100%;
  height: 100%;
  margin-top: 5%;

}



</style>
