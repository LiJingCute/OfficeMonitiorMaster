
 <template>
  <div>
    <div>
      <div class="div02">
        <div class="div03">
          电单价/&#165;：
          <el-input v-model="user" placeholder="插入当月电价" class="input01"></el-input>
          <el-button type="primary" @click="tiJiaodianjaia">提交</el-button>
          <el-button type="primary" icon="el-icon-download">电表日志</el-button>
        </div>
      </div>
      <div class="div01">
        <!-- <el-tag>一号电表</el-tag> -->
        <el-table :data="tableData01" border style="width: 100% ">
          <el-table-column prop="eid" label="ID" ></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值" ></el-table-column>
          <el-table-column prop="eliang" label="电功率" ></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="user" placeholder="1号电表当月额度" class="input01"></el-input>
          <el-button type="primary">提交</el-button>
        </div>
      </div>

      <div class="div01">
        <!-- <el-tag type="success">二号电表</el-tag> -->
        <el-table :data="tableData02" border style="width: 100% ">
          <el-table-column prop="eid" label="ID"></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值"></el-table-column>
          <el-table-column prop="eliang" label="电功率"></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="user" placeholder="2号电表当月额度" class="input01"></el-input>
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    </div>





      <div class="div01">
        <!-- <el-tag type="warning">三号电表</el-tag> -->
        <el-table :data="tableData03" border style="width: 100% ">
          <el-table-column prop="eid" label="ID"></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值"></el-table-column>
          <el-table-column prop="eliang" label="电功率"></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="user" placeholder="3号电表当月额度" class="input01"></el-input>
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    



    <div class="div01">
      <!-- <el-tag>一号水表</el-tag> -->
      <el-table :data="tableData04" border style="width: 100% ">
        <el-table-column prop="wid" label="ID"></el-table-column>
        <el-table-column prop="waternum" label="用水量"></el-table-column>
      </el-table>
      <div style="margin:10px">
        水价/&#165;：
        <el-input v-model="user" placeholder="插入" class="input02"></el-input>
        <el-button type="primary">提交</el-button>
        <span style="margin-left:5px">水额度/T：</span>
        <el-input v-model="user" placeholder="水表当月额度" class="input01"></el-input>
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
.div01 {
  border: 1px solid #000;
  margin: 5px;
  width: 47%;
  /* float: left; */
}
.div02 {
  margin: 10px;
  /* border:1px solid #000; */
  width: 80%;
}
.div03 {
  width: 40%;
  /* border:1px solid #000; */
  margin-right: 10px;
}
</style>

  <script>
  import {mapState,mapActions} from 'vuex'
export default {
  methods:{
    // tiJiaodianjia(){}
  },
  data() {
    return {
      tableData01: [
        {
          eid: "2016-05-02",
          enums: "10",
          voltage: "10",
          eliang: "10"
        }
      ]
    };
  },
  created(){
        this.findenergyxinxi01();
        this.findenergyxinxi02();
        this.findenergyxinxi03();
        this.findwaterxinxi();

    },
  computed:{
        ...mapState("deviceService",["energyxinxi01","energy02xinxi02","energy03xinxi03","waterxinxi"],)
      
    },
    methods: {
    ...mapActions("deviceService", ["findenergyxinxi01",]),
    selectEle: function(row, column, eid) {
      if (eid === "1") {
        return "电表1";
      } else if (eid === "2") {
        return "电表2";
      } else {
        return "电表3";
      }
    }
  }
};
</script>

