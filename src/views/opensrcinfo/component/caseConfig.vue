<template>
    <div>
      <div class="query-area-wrapper">
        <el-row>
          <el-col :span="24">
            <el-row class="left-wrapper">
              <el-col :span="2">
                <div class="label">
                  <span class="text-one">时间:</span>
                </div>
              </el-col>
              <el-col :span="22">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="2">
                <div class="label">
                  <span class="text-one">时间来源:</span>
                </div>
              </el-col>
              <el-col :span="22">
                <div class="condition" v-for="(item, index) in 11" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="2">
                <div class="label">
                  <span class="text-one">噪音过滤:</span>
                </div>
              </el-col>
              <el-col :span="22">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="2">
                <div class="label">
                  <span class="text-one">重大事件:</span>
                </div>
              </el-col>
              <el-col :span="22">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      date: '',
      activeName: 'first'
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.query-area-wrapper {
  height: 100%;
  weight: 100%;
  .left-wrapper {
    height: 100%;
    weight: 100%;
    margin-bottom: 10px;
    .label {
      margin-top: 10px;
      line-height: 20px;
      text-align: right;
      .text-one {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #232426;
      }
    }
    .condition {
      display: inline-block;
      margin-top: 10px;
      margin-left: 12px;
    }
  }
  .right-wrapper {
    height: 100%;
    weight: 100%;
    margin-bottom: 10px;
    .label {
      margin-top: 10px;
      line-height: 20px;
      text-align: right;
      .text-one {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #232426;
      }
    }
    .condition {
      display: inline-block;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
}
</style>
