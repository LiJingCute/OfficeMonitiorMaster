
 <template>
  <div class="div01">
      <el-tag>一号电表</el-tag>
    <el-table :data="tableData01" border style="width: 80% ">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="enums" label="电压值" width="180"></el-table-column>
      <el-table-column prop="voltage" label="电流值"></el-table-column>
      <el-table-column prop="eliang" label="电功率"></el-table-column>
    </el-table>
    
      <el-tag type="success">二号电表</el-tag>
    
    <el-table :data="tableData02" border style="width: 80% ">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="enums" label="电压值" width="180"></el-table-column>
      <el-table-column prop="voltage" label="电流值"></el-table-column>
      <el-table-column prop="eliang" label="电功率"></el-table-column>
    </el-table>
    
      <el-tag type="warning">三号电表</el-tag>
    
    <el-table :data="tableData03" border style="width: 80% ">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="enums" label="电压值" width="180"></el-table-column>
      <el-table-column prop="voltage" label="电流值"></el-table-column>
      <el-table-column prop="eliang" label="电功率"></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <!-- <el-form-item label="电额度">
        <el-input v-model="formInline.user" placeholder="电额度"></el-input>
      </el-form-item>
      <el-form-item> -->
         <el-input width=40% placeholder="电额度"></el-input>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-input width=40% placeholder="电价"></el-input>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      <!-- </el-form-item> -->
    </div>
      <el-tag>一号水表</el-tag>
    <el-table :data="tableData04" border style="width: 80% ">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="waternum" label="用水量"></el-table-column>
    </el-table>
  </div>
</template>
<style>
.dev01 {
  border: 10px darkred
  
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

