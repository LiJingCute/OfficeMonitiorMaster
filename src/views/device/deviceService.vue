
 <template>
  <div>
    <div>
   <div class="div02">
   <div class="div03">
          电单价：
          <el-input v-model="user" placeholder="插入电单价" class="input01"></el-input>
          <el-button type="primary">提交</el-button>
          <el-button type="primary" icon="el-icon-download">电表日志</el-button>
          
   </div>
    </div>
    <div class="div01">

      <el-tag>一号电表</el-tag>
      <el-table :data="tableData01" border style="width:100% ">
        <el-table-column prop="eid" label="ID" width="150"></el-table-column>
        <el-table-column prop="enums" label="电压值" width="150"></el-table-column>
        <el-table-column prop="voltage" label="电流值"></el-table-column>
        <el-table-column prop="eliang" label="电功率"></el-table-column>
      </el-table>
      <div style="margin:10px">
        
          电额度：
          <el-input v-model="user" placeholder="插入电额度" class="input01"></el-input>
          <el-button type="primary">提交</el-button>
        
      </div>
    </div>
     


    <div class="div01" >
      <el-tag type="success">二号电表</el-tag>
      <el-table :data="tableData02" border style="width: 100% ">
        <el-table-column prop="eid" label="ID" width="150"></el-table-column>
        <el-table-column prop="enums" label="电压值" width="150"></el-table-column>
        <el-table-column prop="voltage" label="电流值"></el-table-column>
        <el-table-column prop="eliang" label="电功率"></el-table-column>
      </el-table>
      <div style="margin:10px" >
        电额度：
        <el-input v-model="user" placeholder="插入电额度" class="input01"></el-input>
        <el-button type="primary">提交</el-button>
      </div>
    </div>

    <div class="div01">
      <el-tag type="warning">三号电表</el-tag>
      <el-table :data="tableData03" border style="width: 100% ">
        <el-table-column prop="eid" label="ID" width="150"></el-table-column>
        <el-table-column prop="enums" label="电压值" width="150"></el-table-column>
        <el-table-column prop="voltage" label="电流值"></el-table-column>
        <el-table-column prop="eliang" label="电功率"></el-table-column>
      </el-table>
      <div style="margin:10px">
        电额度：
        <el-input v-model="user" placeholder="插入电额度" class="input01"></el-input>
        <el-button type="primary">提交</el-button>
      </div>
    </div>
</div>
    <div class="div01">
      <el-tag>一号水表</el-tag>
      <el-table :data="tableData04" border style="width: 100% ">
        <el-table-column prop="wid" label="ID"></el-table-column>
        <el-table-column prop="waternum" label="用水量"></el-table-column>
      </el-table>
      <div style="margin:10px">
        水价：
        <el-input v-model="user" placeholder="插入" class="input02"></el-input>
        <el-button type="primary">提交</el-button>
        水额度：
        <el-input v-model="user" placeholder="插入水额度" class="input01"></el-input>
        <el-button type="primary">提交</el-button>
        <el-button type="primary" icon="el-icon-download">水表日志</el-button>
      </div>
    </div>
  </div>
</template>
<style>
.input01 {
  width: 180px;
}

.input02 {
  width: 180px;
}
.div01{
  border:1px solid #000;
  margin:20px;
  width: 80%; 
  
}
.div02{

 margin: 20px;
 /* border:1px solid #000; */
 width: 80%; 


}
.div03{
 
  width: 33%;
  /* border:1px solid #000; */
  margin-right: 20px
}
</style>

  <script>
export default {
  data() {
    return {
      tableData01: [
        {
          date: "2016-05-02",
          enums: "10",
          voltage: "10",
          eliang: "10"
        }
      ]
    };
  }
};
</script>

