<template>
    <div>
      <div class="main-wrapper">
        <el-scrollbar style="height:100%;">
          <div class="case-name-wrapper">
            <el-input v-model="input" placeholder="请输入内容" style="margin-right: 10px;"></el-input><el-button size="small" type="primary">确定</el-button>
          </div>
          <div class="word-monitor-wrapper">
            <div class="word-monitor">
              <span class="name">监测词设置</span>
            </div>
            <div class="word-monitor-config">
              <el-row>
                <el-col :span="24">
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">企业名称</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 4" :key="index">
                        <el-tag size="media" type="info" closable>媒体{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">主要人员</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 18" :key="index">
                        <el-tag size="media" type="info" closable>媒体{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">分支机构</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 4" :key="index">
                        <el-tag size="media" type="info" closable>媒体{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">行业</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 4" :key="index">
                        <el-tag size="media" type="info" closable>媒体{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">技术</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 4" :key="index">
                        <el-tag size="media" type="info" closable>媒体{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="word-monitor-wrapper">
            <div class="word-monitor">
              <span class="name">排除词设置</span>
            </div>
            <div class="word-monitor-config">
              <el-row>
                <el-col :span="24">
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">排除词</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 14" :key="index">
                        <el-tag size="media" type="info" closable>排除词{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="word-monitor-wrapper">
            <div class="word-monitor">
              <span class="name">预警方式</span>
            </div>
            <div class="word-monitor-config">
              <el-row>
                <el-col :span="24">
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">预警词</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 4" :key="index">
                        <el-tag size="media" type="info" closable>预警词{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">媒体预警</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 11" :key="index">
                        <el-tag size="media" type="info" closable>网易微博{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">作者预警</span>
                      </div>
                    </el-col>
                    <el-col :span="2">
                      <el-button class="condition" size="mini" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                    <el-col :span="20">
                      <div class="condition" v-for="(item, index) in 14" :key="index">
                        <el-tag size="media" type="info" closable>李嘉诚{{index}}</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="action-btn-wrapper">
            <el-button size="small" type="primary">开始监控</el-button><el-button size="small">返回</el-button>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      input: '南京中新赛克科技有限公司监控方案',
      date: '',
      activeName: 'first'
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.main-wrapper {
  width: 100%;
  height: calc(100vh - 218px);
  padding-left: 20px;
  padding-right: 5px;
  .case-name-wrapper {
    width: 400px;
    display: flex;
  }
  .word-monitor-wrapper {
    height: 100%;
    weight: 100%;
    .word-monitor {
      margin-top: 25px;
      .name {
        font-family: PingFangSC-Semibold;
        font-weight: bold;
        font-size: 18px;
        color: #303133;
      }
    }
    .word-monitor-config {
      margin-top: 15px;
      margin-left: -20px;
      .left-wrapper {
        height: 100%;
        weight: 100%;
        margin-bottom: 5px;
        .label {
          margin-top: 14px;
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
    }
  }
  .action-btn-wrapper {
    margin-left: 20px;
    margin-top: 60px;
  }
}
</style>
