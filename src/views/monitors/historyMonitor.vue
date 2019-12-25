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

  <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    根据id查询<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

  
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
      <div  id="timeid">

         <el-date-picker 
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  <div id="buttonidtwo">
      <el-button type="primary" >点击查询</el-button>
    </div>
     

     <div id="tableidtwo"> 
     <el-table :data="tableData"
      style="width: 46%; margin-left:25%;margin-top:5%; boder:none" >
      <el-table-column 
        prop="date"
        label="日期"
        width="100px"
        height="2px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用电量"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="总金额"
         width="100px">
      </el-table-column>
    </el-table>
  </div>



      </div>



    </div>
   
    





  </div>
   <!-- <el-button type="primary">主要按钮</el-button> -->
   
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed:{
        ...mapState('historyMonitor',['electricity',]),
      
    },
    created(){
        this.findElectricity();
    },
    methods:{
      ...mapActions('historyMonitor',['findElectricity']),
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

#buttonidtwo{
  float: left;
  position: absolute;
  margin-left: 65%;
  margin-top: -2.1%;
  background-color: red;
  
}
#tableid{
  
  margin-right: 20%;
  width: 100%;
  height: 100%;
  margin-top: 5%;

}

#tableidtwo{
  float: left;
  margin-right: 30%;
 
  margin-top: 5%;
}
#timeid{
 
 margin-left: 35%;
 
  
  height: 30%;

}
</style>
