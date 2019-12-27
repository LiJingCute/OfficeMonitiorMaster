
 <template>
 
  <div>
     
    <div>
      <div class="div02">
        <div class="div03">
          电单价/&#165;：
          <el-input v-model="dianjia" placeholder="插入当月电价" class="input01"></el-input>
          <el-button type="primary" @click="addDJ">提交</el-button>
          <el-button type="primary" icon="el-icon-download"><a href="http://localhost:16666/cao/energy/selecteid">电表记录</a></el-button>
        </div>
      </div>
      <div class="div01">
        <!-- <el-tag>一号电表</el-tag> -->

        <el-table :data="energyxinxi01" border style="width: 100% ">
          <el-table-column prop="eid" label="电表1" ></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值" ></el-table-column>
          <el-table-column prop="eliang" label="电功率" ></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="eedu1" placeholder="1号电表当月额度" class="input01"></el-input>
          <el-button type="primary" @click="addeedu1">提交</el-button>
        </div>
      </div>


      <div class="div01">
        <!-- <el-tag type="success">二号电表</el-tag> -->
        <el-table :data="energyxinxi02" border style="width: 100% ">
          <el-table-column prop="eid" label="电表2"></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值"></el-table-column>
          <el-table-column prop="eliang" label="电功率"></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="eedu2" placeholder="2号电表当月额度" class="input01"></el-input>
          <el-button type="primary" @click="addeedu2">提交</el-button>
        </div>
      </div>
    </div>





      <div class="div01">
        <!-- <el-tag type="warning">三号电表</el-tag> -->
        <el-table :data="energyxinxi03" border style="width: 100% ">
          <el-table-column prop="eid" label="电表3"></el-table-column>
          <el-table-column prop="enums" label="电压值" ></el-table-column>
          <el-table-column prop="voltage" label="电流值"></el-table-column>
          <el-table-column prop="eliang" label="电功率"></el-table-column>
        </el-table>
        <div style="margin:10px">
          电额度/度：
          <el-input v-model="eedu3" placeholder="3号电表当月额度" class="input01"></el-input>
          <el-button type="primary" @click="addeedu3">提交</el-button>
        </div>
      </div>
    



    <div class="div01">
      <!-- <el-tag>一号水表</el-tag> -->
      <el-table :data="waterxinxi" border style="width: 100% ">
        <el-table-column prop="wid" label="水表"></el-table-column>
        <el-table-column prop="waternum" label="用水量"></el-table-column>
      </el-table>
      <div style="margin:10px">
        水价/&#165;：
        <el-input v-model="shuijia" placeholder="插入" class="input02"></el-input>
        <el-button type="primary" @click="addSJ">提交</el-button>
        <span style="margin-left:5px">水额度/T：</span>
        <el-input v-model="wedu" placeholder="水表当月额度" class="input01"></el-input>
        <el-button type="primary" @click="addwedu">提交</el-button>
        <el-button type="primary" icon="el-icon-download" ><a href="http://localhost:16666/cao/water/selectwid">水表记录</a></el-button>
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
  width: 55%;
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
  
  data() {
    return {
      eedu1:"",eedu2:"",eedu3:"",wedu:"",dianjia:"",shuijia:""};
  },
  created(){
        this.findenergyxinxi01();
        this.findenergyxinxi02();
        this.findenergyxinxi03();
        this.findwaterxinxi();
   },
  computed:{
        ...mapState("deviceService",["energyxinxi01","energyxinxi02","energyxinxi03","waterxinxi"],)
      
    },
  methods: {
    ...mapActions("deviceService", ['findenergyxinxi01','findenergyxinxi02','findenergyxinxi03','findwaterxinxi','addEID1','addEID2','addEID3','addWID','addDianj','addShuij']),
    // 插入电额度
    addeedu1(){
      // console.log("aaaaaaaCCCVVV",this.eedu1)
      this.addEID1(parseInt(this.eedu1));

      alert("数据提交成功");

    },
    addeedu2(){
      // console.log("aaVVVDSDASDASaa",this.eedu2)
      this.addEID2(parseInt(this.eedu2));
       alert("数据提交成功");

    },
    addeedu3(){
      // console.log("aaaaBBBCCC",this.eedu3)
      this.addEID3(parseInt(this.eedu3));
       alert("数据提交成功");

    },
    addwedu(){
      // console.log("aaBB",this.wedu)
      this.addWID(parseInt(this.wedu))
       alert("数据提交成功");

    },
    addDJ(){
    this.addDianj(parseInt(this.dianjia));
     alert("数据提交成功");
    },
    addSJ(){
    this.addShuij(parseInt(this.shuijia));
     alert("数据提交成功");
    },


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
