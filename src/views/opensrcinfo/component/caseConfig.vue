<template>
    <div>
      <div class="main-wrapper">
        <el-scrollbar style="height:100%;">
          <div class="case-name-wrapper">
            <el-input v-model="name" placeholder="请输入内容" style="margin-right: 10px;"></el-input><el-button @click="saveName" size="small" type="primary">确定</el-button>
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
                        @close="handleClose(tag, tagTypes[0])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'company'"
                        v-model="inputValue"
                        ref="company"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[0])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[0])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[1])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'staff'"
                        v-model="inputValue"
                        ref="staff"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[1])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[1])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[2])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'subcompany'"
                        v-model="inputValue"
                        ref="subcompany"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[2])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[2])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[3])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'industry'"
                        v-model="inputValue"
                        ref="industry"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[3])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[3])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[4])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'technology'"
                        v-model="inputValue"
                        ref="technology"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[4])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[4])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[5])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'excludewords'"
                        v-model="inputValue"
                        ref="excludewords"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[5])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[5])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[6])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'alarmwords'"
                        v-model="inputValue"
                        ref="alarmwords"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[6])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[6])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[7])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'mediawords'"
                        v-model="inputValue"
                        ref="mediawords"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[7])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[7])" icon="el-icon-plus" round>添加</el-button>
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
                        @close="handleClose(tag, tagTypes[8])">
                        {{tag}}
                      </el-tag>
                      <el-input
                        class="input-new-tag condition"
                        v-if="inputVisible === 'author'"
                        v-model="inputValue"
                        ref="author"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm(tagTypes[8])"
                      >
                      </el-input>
                      <el-button v-else class="button-new-tag condition" size="small" @click="showInput(tagTypes[8])" icon="el-icon-plus" round>添加</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="action-btn-wrapper">
            <el-button size="small" type="primary">开始监控</el-button><el-button @click="saveConfigInfo" size="small" type="primary">保存</el-button><el-button size="small">返回</el-button>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getMonitorCase, saveMonitorCase } from '@/api/opensrcinfo/dataset'

export default {
  props: {
    caseid: String,
    isNewCreate: Boolean
  },
  data() {
    return {
      userid: 'admin',
      name: '未命名',
      monitorwords: {
        company: [],
        staff: [],
        sub_company: [],
        industry: [],
        technology: []
      },
      excludewords: {
        words: []
      },
      alarmmode: {
        words: [],
        mediawords: [],
        author: []
      },
      tagTypes: ['company', 'staff', 'subcompany', 'industry', 'technology', 'excludewords', 'alarmwords', 'mediawords', 'author'],
      date: '',
      activeName: 'first',
      inputVisible: '',
      inputValue: ''
    }
  },
  created() {
    if (!this.isNewCreate) {
      this.$nextTick(() => {
        this.getCusMonitorCase()
      })
    }
  },
  methods: {
    getCusMonitorCase() {
      getMonitorCase().then(res => {
        this.monitorwords = res.monitorwords
        this.excludewords = res.excludewords
        this.alarmmode = res.alarmmode
      })
    },
    saveName() {
      // 1.向后台发送保存公司名请求
      let data = {
        userid: this.userid,
        name: this.name,
        monitorwords: this.monitorwords,
        excludewords: this.excludewords,
        alarmmode: this.alarmmode
      }
      console.log(data)
      // saveMonitorCase(data).then(res => {
      //   console.log(res)
      // })
      // 2.向父组件传值
      this.$emit('e-name', this.name) // 使用$emit()触发一个事件，发送数据，事件名自定义
    },
    handleClose(tag, tagType) {
      if (tagType === 'company') {
        this.monitorwords.company.splice(this.monitorwords.company.indexOf(tag), 1)
      } else if (tagType === 'staff') {
        this.monitorwords.staff.splice(this.monitorwords.staff.indexOf(tag), 1)
      } else if (tagType === 'subcompany') {
        this.monitorwords.sub_company.splice(this.monitorwords.sub_company.indexOf(tag), 1)
      } else if (tagType === 'industry') {
        this.monitorwords.industry.splice(this.monitorwords.industry.indexOf(tag), 1)
      } else if (tagType === 'technology') {
        this.monitorwords.technology.splice(this.monitorwords.technology.indexOf(tag), 1)
      } else if (tagType === 'excludewords') {
        this.excludewords.words.splice(this.excludewords.words.indexOf(tag), 1)
      } else if (tagType === 'alarmwords') {
        this.alarmmode.words.splice(this.alarmmode.words.indexOf(tag), 1)
      } else if (tagType === 'mediawords') {
        this.alarmmode.mediawords.splice(this.alarmmode.mediawords.indexOf(tag), 1)
      } else if (tagType === 'author') {
        this.alarmmode.author.splice(this.alarmmode.author.indexOf(tag), 1)
      }
    },
    showInput(tagType) {
      this.inputVisible = tagType
      this.$nextTick(_ => {
        this.$refs[tagType].$refs.input.focus()
      })
    },
    handleInputConfirm(tagType) {
      let inputValue = this.inputValue
      if (inputValue) {
        if (tagType === 'company') {
          this.monitorwords.company.push(inputValue)
        } else if (tagType === 'staff') {
          this.monitorwords.staff.push(inputValue)
        } else if (tagType === 'subcompany') {
          this.monitorwords.sub_company.push(inputValue)
        } else if (tagType === 'industry') {
          this.monitorwords.industry.push(inputValue)
        } else if (tagType === 'technology') {
          this.monitorwords.technology.push(inputValue)
        } else if (tagType === 'excludewords') {
          this.excludewords.words.push(inputValue)
        } else if (tagType === 'alarmwords') {
          this.alarmmode.words.push(inputValue)
        } else if (tagType === 'mediawords') {
          this.alarmmode.mediawords.push(inputValue)
        } else if (tagType === 'author') {
          this.alarmmode.author.push(inputValue)
        }
      }
      this.inputVisible = ''
      this.inputValue = ''
    },
    saveConfigInfo() {
      let data = {
        userid: '',
        name: this.name,
        monitorwords: this.monitorwords,
        excludewords: this.excludewords,
        alarmmode: this.alarmmode
      }
      let tmpData = JSON.parse(JSON.stringify(data))
      console.log(tmpData)
      // 保存配置属性
      saveMonitorCase(tmpData).then(res => {
        console.log(res)
        let aaa = {
          id: '111',
          name: 'test'
        }
        // 2.向父组件传值
        this.$emit('e-addCaseItem', aaa) // 使用$emit()触发一个事件，发送数据，事件名自定义
      })
    },
    startMonitor() {
      // 开启监控
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
  height: calc(100vh - 240px);
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
    margin-top: 113px;
    margin-bottom: 20px;
  }
}
</style>
