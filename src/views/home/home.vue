<template>
<el-collapse v-model="activeName" accordion>
  <el-carousel :interval="4000"   type="card" height="350px" align="center">
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>




  <el-row>

  <el-col :span="6"  >
    <el-card  class="card01">
    
      <div style="padding:5px; ">
        <div><span> 当前总电量:{{rtiEQuantity}}</span></div>
        
        
      </div>
    </el-card>
  </el-col>



   <el-col :span="6"    >
    <el-card class="card02" >
      
      <div style="padding:5px; ">
        
       <div> <span> 当前总水量:{{rtiWQuantity}}</span></div>

       
      </div>
    </el-card>
  </el-col>


  <el-col :span="6"  >
    <el-card class="card03">


      <div style="padding: 5px;">
      <div><span icon="el-icon-edit">预警:{{warnToday}}次</span></div>
      
      </div>
    </el-card>

  </el-col>



  <el-col :span="6"   >
    <el-card class="card04" >
    
      <div style="padding: 5px;">
        <span> 当月电费:{{rtiEFees}}</span>
       
      </div>
    </el-card>
  </el-col>


</el-row>

<div class="tita1">
<div class="tita01">
  <div class="tita0101"><h3>详细的数据分析</h3>为用户提供水电情况的分析，让用户掌控每一个细节</div>
  <div class="tita0101"><h3>智能预警</h3>智能检测电压电流等,提供智能预警功能，让用户使用更加安心</div>
  <div class="tita0101"><h3>历史数据查询</h3>快捷查询历史用水用电量，让用户了解每天及每月水电使用情况</div>
  
</div>

<div class="tita02">
  <div class="tita0102"><img src="../../assets/5.png"></div>
</div>
</div>
</el-collapse>

</template>


<script> 
  import {mapState,mapActions} from 'vuex'
  export default{
  
    data (){``
       return{ 

       imagesbox:[{id:0,idView:require("../../assets/6.jpg")},
       {id:1,idView:require("../../assets/7.png")},
       {id:2,idView:require("../../assets/3.png")},
       {id:2,idView:require("../../assets/4.jpg")}],
    } },


       computed:{
         ...mapState('home',['warnToday','rtiEQuantity','rtiWQuantity','rtiEFees']),
        
       },
       created(){
            this.getToday();
            this.getRti();
            
       },
      methods:{ 
          ...mapActions('home',['getToday','getRti']),
         
      }
    
   }
 
</script>

<style>

.tita01{
  width: 50%;
  height: 450px;
  margin: 5px auto;
  float:left;
  font-size: 20px;
  border-right: 3px green solid;
  text-align: center;


}
.tita02{
  width: 39%;
  height: 150px;
  float:left;
}
.tita0101{
  margin-left:32%;
  width: 40%;
  height: 120px;
}
.tita0102{
  width: 20%;
  height: 150px;
 margin-left: 100px;
  
}

  .card01{
    background-color: #E6A23C;
    opacity:80%;
    font-size: 20px;
  /*  width: 15%;*/
    
  }
  .card02{
    background-color: #409EFF;
    opacity:80%;
    font-size: 20px;
   /* width: 15%;*/
  
  }
  .card03{
    background-color: #F56C6C;
    /*opacity:80%;*/
    font-size: 20px;
   /* width: 15%;*/
   
  }
  .card04{
    background-color: #67C23A;
    opacity:80%;
    font-size: 20px;
   /* width: 15%;*/
    
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .tita1{
    border:2px red solid;
    background:red;
  }


 
</style>