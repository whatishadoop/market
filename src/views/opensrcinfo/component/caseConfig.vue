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
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in monitorwords.company"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">主要人员</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in monitorwords.staff"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">分支机构</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in monitorwords.sub_company"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">行业</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in monitorwords.industry"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">技术</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in monitorwords.technology"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
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
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in excludewords.words"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
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
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in alarmmode.words"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">媒体预警</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in alarmmode.mediawords"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">作者预警</span>
                      </div>
                    </el-col>
                    <el-col :span="22">
                      <el-tag
                        class="condition"
                        :key="tag"
                        v-for="tag in alarmmode.author"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="action-btn-wrapper">
            <el-button size="small" type="primary">开始监控</el-button><el-button size="small" type="primary">保存</el-button><el-button size="small">返回</el-button>
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
      monitorwords:{
        company: ['南京中新赛克有限责任有限公司','南京中新赛克'],
        staff: ['凌东胜', '王明意'],
        sub_company: ['南京中新赛克有限责任公司北京分公司','南京中新赛克有限责任北京分公司'],
        industry: ['计算机软件'],
        technology: ['java','c++']
      },
      excludewords: {
        words: ['排除词1']
      },
	    alarmmode: {
        words: ['冻结', '处罚'],
        mediawords: ['新浪微博'],
        author: ['李嘉诚']
      },
      date: '',
      activeName: 'first',
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.main-wrapper {
  width: 100%;
  height: calc(100vh - 218px);
  .case-name-wrapper {
    width: 400px;
    display: flex;
    padding-left: 20px;
    padding-right: 5px;
  }
  .word-monitor-wrapper {
    height: 100%;
    weight: 100%;
    padding-left: 20px;
    padding-right: 5px;
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
    padding-left: 20px;
    padding-right: 5px;
    margin-left: 20px;
    margin-top: 60px;
  }
}
</style>
