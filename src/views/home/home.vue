<template>
<el-collapse v-model="activeName" accordion>
  <el-carousel :interval="4000"   type="card" height="350px" align="center">
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
      <img :src="item.idView" class="image">

      
    </el-carousel-item>
  </el-carousel>
        <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ height:'150px' , weight:'100%' ,margin:'10px' }">
    
      <div style="height:100px ">
        <p>汇总一</p>
        <p>汇总二</p>
        
        
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
         
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  <!-- <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ height:'150px' , weight:'40%' ,margin:'10px'}">
    
      <div style="padding: 50px;">
        <span>首页信息汇总</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
         
        </div>
      </div>
    </el-card>
  </el-col>
</el-row> -->
</el-collapse>
</template>

<script> 
  export default{
  
    data(){
       return{ 
       imagesbox:[{id:0,idView:require("../../assets/51.jpg")},
       {id:1,idView:require("../../assets/52.jpg")},
       {id:2,idView:require("../../assets/51.jpg")},
       {id:2,idView:require("../../assets/52.jpg")}

       
       ]
        }


      },
    }
   
  
</script>

<style>
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
 
</style>