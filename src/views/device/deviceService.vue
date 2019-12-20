
<template>
 <el-row>
  <el-col :span="5" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>电表</span>
        <div>电压值：{}</div>
        <div>电流值：{}</div>
        <div>功率值：{}</div>
      </div>
    </el-card>
  </el-col>
   <el-col :span="5" :offset="1">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>水表</span>
        <div>用水量{}</div>
      </div>
    </el-card>
  </el-col>
</el-row>


</template>
<style>

  .image {
    width: 100%;
    display: block;
  }

</style>

<script>
export default {
  
}
</script>