<template>
  <div class="history">
    <h1>用电信息</h1>
    <!-- {{form}} -->
    <div class="title">
      <div id="year">
        
        <div class="block">
          <el-date-picker
            v-model="form.timw"
            type="month"
            @change="yearChange"
            placeholder="选择月">
          </el-date-picker>
        </div>
      </div>
      &nbsp;
      <div id="dianbiao">
          <el-select v-model="form2.value" placeholder="请选择电表">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      &nbsp;
      <div id="btn">
        <el-button type="primary" @click="testHandler">查询</el-button>
      </div>
    </div>
  

  <div id="tableid"> 
    
    <el-table
    :data="electricity"
    style="width: 100%;"
    max-height="200"
    border>
    <el-table-column
      prop="eDate"
      label="日期"
      width="180">
      <!-- <template slot-scope="scope">
        <span>scope.row.month+{{scope.row.year}}</span>
      </template> -->
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
    <div id="year">
      <div class="titlet">
      <div class="block" id="gundongtiaoidtwo">
        <el-date-picker
           v-model="form3.waterTime"
          type="month"
           @change="yearChange"
          placeholder="选择月">
        </el-date-picker>
      </div>
   </div>
   &nbsp;
     <div id="btntwo">
        <el-button type="primary" @click="testHandlerWater">查询</el-button>
      </div>
    </div>
    <div id="tableid"> 
        <el-table
        :data="water"
         max-height="200"
        style="width: 100%;"
        border>
        <el-table-column
          prop="wDate"
          label="日期"
          width="180">
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
      <!-- <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination> -->
    </div>
  </div>
 

   <!-- <el-button type="primary">主要按钮</el-button> -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
      return {
        form:{},
        value1:'',
        value2: '',
        form2:{
          month:"",
          year:"",
          id:""
        },
         form3:{
          month:"",
          year:"",

        },
        options: [{
          value: '1',
          label: '电表1'
        }, {
          value: '2',
          label: '电表2'
        }, {
          value: '3',
          label: '电表3'
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
      ...mapActions('historyMonitor',['findElectricity','findWater','findByidElectricity','findByMY','findeWByMy']),
      testHandler(){
        this.form2.id=parseInt(this.form.value);
        console.log(this.form2)
        this.findByMY(this.form2)
        

      },
      testHandlerWater(){
        this.findeWByMy(this.form3);
        console.log('-------------------',this.form3)

      },
      yearChange(v){
        console.log(v)
        console.log(v.getFullYear())
        console.log(v.getMonth()+1)
        this.form2.year=v.getFullYear();
        this.form2.month=v.getMonth()+1;
        this.form3.year=v.getFullYear();
        this.form3.month=v.getMonth()+1;

      },
      selectEle:function (row, column, eid) {
            if (eid === 1){
                return '电表1';
            }else if (eid === 2){
                return '电表2';
            }else{
              return '电表3'
            }
        }
         
     }
}
  
</script>

<style socped>
#btntwo{
  float: left;
  margin-left: 65% ;
  margin-top:-3.5%;
}
  .history{
    padding: 1em;
  }
  .titlet{
     width: 500px;
   display: flex;
   /* text-align: center; */
   margin:0 auto;
  }
 .title{
   /* height: 100px; */
   width: 500px;
   display: flex;
   /* text-align: center; */
   margin:0 auto;
 }
 .year{
   margin:0 auto;
   float: left;
 }
 .btn{
   margin:0 auto;
   float: left;
 }
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

#tableid{
  margin-right: 20%;
  width: 100%;
  height: 100%;
  margin-top: 1em;
}

</style>