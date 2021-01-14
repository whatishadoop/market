<template>
    <div>
      <div class="query-area-wrapper">
        <el-row>
          <el-col :span="16" style="margin-left: -20px;">
            <el-row class="left-wrapper">
              <el-col :span="4">
                <div class="label">
                  <span class="text-one">时间:</span>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
                <div class="condition">
                  <el-date-picker
                    v-model="date"
                    size="mini"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="4">
                <div class="label">
                  <span class="text-one">时间来源:</span>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="condition" v-for="(item, index) in 11" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="4">
                <div class="label">
                  <span class="text-one">噪音过滤:</span>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="left-wrapper">
              <el-col :span="4">
                <div class="label">
                  <span class="text-one">重大事件:</span>
                </div>
              </el-col>
              <el-col :span="20">
                <div class="condition" v-for="(item, index) in 4" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row class="right-wrapper">
              <el-col :span="6">
                <div class="label">
                  <span class="text-one">情感倾向度：</span>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="condition" v-for="(item, index) in 3" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="right-wrapper">
              <el-col :span="6">
                <div class="label">
                  <span class="text-one">重复信息：</span>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="condition" v-for="(item, index) in 3" :key="index">
                  <el-button size="mini" round>媒体{{index}}</el-button>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="datalist-area-wrapper">
        <div class="datatabs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="全部" name="first"><yuqingDetail></yuqingDetail></el-tab-pane>
            <el-tab-pane label="预警" name="second">预警</el-tab-pane>
            <el-tab-pane label="收藏" name="third">收藏</el-tab-pane>
          </el-tabs>
          <div class="data-info">
            <div class="sumcount">
              <span class="text-one">全部 <span style="color: #5075E7">1314</span> 篇    去重后 <span style="color: #5075E7">314</span> 篇</span>
            </div>
            <div class="data-action">
              <el-button size="mini">刷新信息</el-button>
              <el-button size="mini">全部导出</el-button>
              <el-button size="mini">时间排序</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import yuqingDetail from './yuqingDetail'
export default {
  components: {
    yuqingDetail
  },
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
.datalist-area-wrapper {
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 31px;
  .datatabs {
    position: relative;
    .data-info {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 470px;
      height: 28px;
      display: flex;
      justify-content: right;
      align-items: center;
      .sumcount {
        line-height: 19px;
        width: 200px;
        .text-one {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #37383A;
          text-align: right;
        }
      }
      .data-action {
        flex: 1;
      }
    }
  }
}
</style>
