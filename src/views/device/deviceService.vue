
<template>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="5">
      <div class="div01">
        <div id="myChart01" :style="{width: '200px', height: '200px'}"></div>
        <div style="padding: 0px;">
          <span>电表一</span>
          <div>电压值：{}</div>
          <div>电流值：{}</div>
          <div>功率值：{}</div>
          <div class="demo-input-suffix">
            电额度：<el-input placeholder="请输入电额度"  v-model="input1"></el-input>
            电单价：<el-input placeholder="请输入电价"  v-model="input2"></el-input>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="div02">
        <div id="myChart02" :style="{width: '200px', height: '200px'}"></div>
        <div style="padding: 0px;">
          <span>电表二</span>
          <div>电压值：{}</div>
          <div>电流值：{}</div>
          <div>功率值：{}</div>
          <div class="demo-input-suffix">
            电额度：<el-input placeholder="请输入电额度"  v-model="input1"></el-input>
           
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="div03">
        <div id="myChart03" :style="{width: '200px', height: '200px'}"></div>
        <div style="padding: 0px;">
          <span>电表三</span>
          <div>电压值：{}</div>
          <div>电流值：{}</div>
          <div>功率值：{}</div>
          <div class="demo-input-suffix">
            电额度：<el-input placeholder="请输入电额度"  v-model="input1"></el-input>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="div04">
        <div id="myChart04" :style="{width: '200px', height: '200px'}"></div>
        <div style="padding: 0px;">
          <span>水表</span>
          <div>用水量{}</div>
          <div class="demo-input-suffix">
            水额度：<el-input placeholder="请输入水额度"  v-model="input1"></el-input>
            水单价：<el-input placeholder="请输入水价"  v-model="input2"></el-input>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<style>
.image {
  width: 100%;
  display: block;
}
.dev01{

}
</style>

<script>
export default {
  mounted() {
    let that = this;
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart01 = this.$echarts.init(document.getElementById("myChart01"));
      let myChart02 = this.$echarts.init(document.getElementById("myChart02"));
      let myChart03 = this.$echarts.init(document.getElementById("myChart03"));
      let myChart04 = this.$echarts.init(document.getElementById("myChart04"));
      // 绘制图表
      var option = {
        tooltip: {
          fromatter: "{a} <br/>{b} : {c}%"
        },

        series: [
          {
            name: "占有率",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      };

      myChart01.setOption(option);
      myChart02.setOption(option);
      myChart03.setOption(option);
      myChart04.setOption(option);
    }
  }
};
</script>