<template>
    <div>
      <div class="main-wrapper">
        <el-scrollbar style="height:100%;">
          <div class="case-name-wrapper">
            <el-input v-model="conditons.data.name" placeholder="请输入方案名称" clearable/>
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
                    <el-col :span="21" :offset="1">
                      <el-autocomplete
                        v-model="conditionstrs.monitorwords.company_name"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        style="width:50%"
                        @select="selectCompany"
                      ></el-autocomplete>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">主要人员</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.monitorwords.staffs" :readonly="true" style="width:50%"/>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">分支机构</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.monitorwords.sub_companies" :readonly="true" style="width:50%"/>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">选择竞品</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-autocomplete
                        v-model="conditionstrs.monitorwords.competitor_select"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        clearable
                        style="width:50%"
                        @select="selectCompetitor"
                      ></el-autocomplete>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">竞品公司</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.monitorwords.competitor_company" :readonly="true" clearable placeholder="请选择所属竞品公司" style="width:50%"/>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">所属行业</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-select v-model="value" placeholder="请选择" @change="selectItem" style="width:50%">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">技术方案</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.monitorwords.technologies" placeholder="请输入技术方案" style="width:50%"/>
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
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.excludewords.words" placeholder="请输入, 支持批量添加用;分割" clearable style="width:50%"/>
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
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.alarmmode.words" placeholder="请输入, 支持批量添加用;分割" clearable style="width:50%"/>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">媒体预警</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.alarmmode.mediawords" placeholder="请输入, 支持批量添加用;分割" clearable style="width:50%"/>
                    </el-col>
                  </el-row>
                  <el-row class="left-wrapper">
                    <el-col :span="2">
                      <div class="label">
                        <span class="text-one">作者预警</span>
                      </div>
                    </el-col>
                    <el-col :span="21" :offset="1">
                      <el-input v-model="conditionstrs.alarmmode.authors" placeholder="请输入, 支持批量添加用;分割" clearable style="width:50%"/>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="action-btn-wrapper">
           <el-button @click="savemonitor" size="small" type="primary" style="width: 10%">保存</el-button>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getCompanyFullName, getCompanySimpleInfoWithName, saveMonitorCase, getMonitorCase } from '@/api/opensrcinfo/dataset'

export default {
  props: {
    cid: String,
    isNewCreate: Boolean,
    userid: String
  },
  data() {
    return {
      caseid: this.cid,
      isReadOnly: false,
      companys: [],
      options: [{
        value: '1',
        label: '大数据'
      }, {
        value: '2',
        label: '人工智能'
      }, {
        value: '3',
        label: '金融'
      }],
      value: '',
      conditionstrs: {
        monitorwords: {
          company_name: '',
          company_id: '',
          staffs: '',
          sub_companies: '',
          competitor_select: '',
          competitor_company: '',
          competitor_ids: '',
          industry_names: '',
          industry_ids: '',
          technologies: ''
        },
        excludewords: {
          words: ''
        },
        alarmmode: {
          words: '',
          mediawords: '',
          authors: ''
        }
      },
      conditons: {
        data: {
          userid: this.userid,
          caseid: this.caseid, // 若为空表示新建，不是''表示修改
          name: '',
          monitorwords: {
            company_name: '南京中新赛克有限责任有限公司',
            company_id: '',
            staffs: [],
            sub_companies: [],
            competitor_info: [],
            industry_info: [],
            technologies: []
          },
          excludewords: {
            words: []
          },
          alarmmode: {
            words: [],
            mediawords: [],
            authors: []
          }
        }
      }
    }
  },
  created() {
    this.$nextTick(() => {
      debugger
      this.getMonitorCase(this.caseid)
    })
  },
  mounted() {
  },
  methods: {
    refresh(caseId) {
      this.getMonitorCase(caseId)
    },
    selectItem(value) {
      this.conditionstrs.monitorwords.industry_ids = value
      var obj = {}
      obj = this.options.find((item) => {
        return item.value === value
      })
      this.conditionstrs.monitorwords.industry_names = obj.label
    },
    querySearchAsync(queryString, cb) {
      const _this = this
      let data2 = {
        data: {
          text: queryString
        }
      }
      getCompanyFullName(data2).then(res => {
        debugger
        _this.companys.length = 0
        if (res.length > 0) {
          res.forEach(item => {
            _this.companys.push({ 'value': item })
          })
          console.log(_this.companys)
          cb(_this.companys)
        }
      }).catch(err => {
        console.log(err)
      })
      console.log(this.companys)
    },
    // 选择公司
    selectCompany(item) {
      debugger
      const _this = this
      const data = {
        data: {
          company_name: item.value
        }
      }
      // 1.组装公司名
      _this.conditionstrs.monitorwords.company_name = item.value
      getCompanySimpleInfoWithName(data).then(res => {
        debugger
        // 2.组装公司id
        _this.conditionstrs.monitorwords.company_id = res.id
        // 3. 组装组织人员
        _this.conditionstrs.monitorwords.staffs = ''
        res.leading_member.forEach(item => {
          _this.conditionstrs.monitorwords.staffs += item + ';'
        })
        // 4. 组装子机构
        _this.conditionstrs.monitorwords.sub_companies = ''
        res.sub_companies.forEach(item => {
          _this.conditionstrs.monitorwords.sub_companies += item + ';'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    // 选择竞品公司
    selectCompetitor(item) {
      const _this = this
      const data = {
        data: {
          company_name: item.value
        }
      }
      // 5.组装竞品公司
      _this.conditionstrs.monitorwords.competitor_company += item.value + ';'
      getCompanySimpleInfoWithName(data).then(res => {
        debugger
        // 2.组装竞品公司id
        _this.conditionstrs.monitorwords.competitor_ids += res.data.id + ';'
      }).catch(err => {
        console.log(err)
      })
    },
    setIndustry(params) {
      this.industry_names = params.name
    },
    savemonitor() {
      debugger
      console.log(this.conditionstrs)
      this.conditons.data.userid = this.userid
      this.conditons.data.monitorwords.company_name = this.conditionstrs.monitorwords.company_name
      this.conditons.data.monitorwords.company_id = this.conditionstrs.monitorwords.company_id + ''
      this.conditons.data.monitorwords.staffs = this.conditionstrs.monitorwords.staffs.split(';').filter(item => item !== '')
      this.conditons.data.monitorwords.sub_companies = this.conditionstrs.monitorwords.sub_companies.split(';').filter(item => item !== '')
      const competitor_ids = this.conditionstrs.monitorwords.competitor_ids.split(';').filter(item => item !== '')
      // 组装竞品公司{id,name}
      const competitor_companys = this.conditionstrs.monitorwords.competitor_company.split(';').filter(item => item !== '')
      const competitor_info = competitor_ids.map((date, i) => ({ id: date, name: competitor_companys[i] }))
      this.conditons.data.monitorwords.competitor_info = competitor_info

      // 组装行业信息
      this.conditons.data.monitorwords.industry_info = [{
        id: this.conditionstrs.monitorwords.industry_ids,
        name: this.conditionstrs.monitorwords.industry_names
      }]
      this.conditons.data.monitorwords.technologies = this.conditionstrs.monitorwords.technologies.split(';')

      this.conditons.data.excludewords.words = this.conditionstrs.excludewords.words.split(';')

      this.conditons.data.alarmmode.words = this.conditionstrs.alarmmode.words.split(';')
      this.conditons.data.alarmmode.mediawords = this.conditionstrs.alarmmode.mediawords.split(';')
      this.conditons.data.alarmmode.authors = this.conditionstrs.alarmmode.authors.split(';')
      console.log(this.conditons)
      // 保存监控方案
      saveMonitorCase(this.conditons).then(res => {
        debugger
        this.setReadOnly(true)
        // 1.刷新方案名称
        this.$emit('e-name', this.name)
        // 2.向父组件传值
        this.$emit('e-refreshCaseItem') // 使用$emit()触发一个事件，发送数据，事件名自定义
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getMonitorCase(caseId) {
      debugger
      if (caseId !== '') {
        const data = {
          data: {
            case_id: caseId,
            user_id: this.userid
          }
        }
        getMonitorCase(data).then(res => {
          debugger
          // 根据caseid加载详情
          this.conditons.data.userid = this.userid
          this.conditons.data.caseid = caseId
          this.conditons.data.name = res.data.name

          this.conditons.data.monitorwords.company_name = res.data.monitorwords.company_name
          this.conditons.data.monitorwords.company_id = res.data.monitorwords.company_id + ''
          this.conditons.data.monitorwords.staffs = res.data.monitorwords.staffs
          this.conditons.data.monitorwords.sub_companies = res.data.monitorwords.sub_companies
          this.conditons.data.monitorwords.competitor_info = res.data.monitorwords.competitor_info
          this.conditons.data.monitorwords.industry_info = res.data.monitorwords.industry_info
          this.conditons.data.monitorwords.technologies = res.data.monitorwords.technology

          this.conditons.data.excludewords.words = res.data.excludewords.words

          this.conditons.data.alarmmode.words = res.data.alarmmode.words
          this.conditons.data.alarmmode.mediawords = res.data.alarmmode.mediawords
          this.conditons.data.alarmmode.authors = res.data.alarmmode.authors

          // 处理字符串显示
          this.conditionstrs.monitorwords.company_name = res.data.monitorwords.company_name
          this.conditionstrs.monitorwords.company_id = res.data.monitorwords.company_id + ''
          this.conditionstrs.monitorwords.staffs = res.data.monitorwords.staffs.join(';')
          this.conditionstrs.monitorwords.sub_companies = res.data.monitorwords.sub_companies.join(';')
          this.conditionstrs.monitorwords.competitor_select = ''

          // 拼接字符串
          this.conditionstrs.monitorwords.competitor_company = ''
          this.conditionstrs.monitorwords.competitor_ids = ''
          res.data.monitorwords.competitor_info.forEach(item => {
            this.conditionstrs.monitorwords.competitor_company += item.name + ';'
            this.conditionstrs.monitorwords.competitor_ids += item.id + ';'
          })

          this.conditionstrs.monitorwords.industry_names = ''
          this.conditionstrs.monitorwords.industry_ids = ''
          res.data.monitorwords.industry_info.forEach(item => {
            this.conditionstrs.monitorwords.industry_names += item.name
            this.conditionstrs.monitorwords.industry_ids += item.id
          })

          this.conditionstrs.monitorwords.technologies = res.data.monitorwords.technology.join(';')

          this.conditionstrs.excludewords.words = res.data.excludewords.words.join(';')
          this.conditionstrs.alarmmode.words = res.data.alarmmode.words.join(';')
          this.conditionstrs.alarmmode.mediawords = res.data.alarmmode.mediawords.join(';')
          this.conditionstrs.alarmmode.authors = res.data.alarmmode.authors.join(';')
        }).catch(err => {
          console.log(err)
        })
      } else {
        // 新建时清空数据
        this.conditons.data.userid = ''
        this.conditons.data.caseid = ''
        this.conditons.data.name = ''

        this.conditons.data.monitorwords.company_name = ''
        this.conditons.data.monitorwords.company_id = ''
        this.conditons.data.monitorwords.staffs = []
        this.conditons.data.monitorwords.sub_company = []
        this.conditons.data.monitorwords.competitor_info = []
        this.conditons.data.monitorwords.industry_info = []
        this.conditons.data.monitorwords.technologies = []

        this.conditons.data.excludewords.words = []

        this.conditons.data.alarmmode.words = []
        this.conditons.data.alarmmode.mediawords = []
        this.conditons.data.alarmmode.authors = []

        this.conditionstrs.monitorwords.company_name = ''
        this.conditionstrs.monitorwords.company_id = ''
        this.conditionstrs.monitorwords.staffs = ''
        this.conditionstrs.monitorwords.sub_companies = ''
        this.conditionstrs.monitorwords.competitor_select = ''
        this.conditionstrs.monitorwords.competitor_company = ''
        this.conditionstrs.monitorwords.competitor_ids = ''
        this.conditionstrs.monitorwords.industry_names = ''
        this.conditionstrs.monitorwords.industry_ids = ''
        this.conditionstrs.monitorwords.technologies = ''

        this.conditionstrs.excludewords.words = ''
        this.conditionstrs.alarmmode.words = ''
        this.conditionstrs.alarmmode.mediawords = ''
        this.conditionstrs.alarmmode.authors = ''
      }
    },
    saveDefaultConfigInfo(userid, name) {
      // 新建时清空数据
      this.conditons.data.userid = userid
      this.conditons.data.caseid = ''
      this.conditons.data.name = name

      this.conditons.data.monitorwords.company_name = ''
      this.conditons.data.monitorwords.company_id = ''
      this.conditons.data.monitorwords.staffs = []
      this.conditons.data.monitorwords.sub_company = []
      this.conditons.data.monitorwords.competitor_info = []
      this.conditons.data.monitorwords.industry_info = []
      this.conditons.data.monitorwords.technologies = []

      this.conditons.data.excludewords.words = []

      this.conditons.data.alarmmode.words = []
      this.conditons.data.alarmmode.mediawords = []
      this.conditons.data.alarmmode.authors = []

      this.conditionstrs.monitorwords.company_name = ''
      this.conditionstrs.monitorwords.company_id = ''
      this.conditionstrs.monitorwords.staffs = ''
      this.conditionstrs.monitorwords.sub_companies = ''
      this.conditionstrs.monitorwords.competitor_select = ''
      this.conditionstrs.monitorwords.competitor_company = ''
      this.conditionstrs.monitorwords.competitor_ids = ''
      this.conditionstrs.monitorwords.industry_names = ''
      this.conditionstrs.monitorwords.industry_ids = ''
      this.conditionstrs.monitorwords.technologies = ''

      this.conditionstrs.excludewords.words = ''
      this.conditionstrs.alarmmode.words = ''
      this.conditionstrs.alarmmode.mediawords = ''
      this.conditionstrs.alarmmode.authors = ''
    },
    setReadOnly(flag) {
      this.isReadOnly = flag
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.main-wrapper {
  width: 100%;
  height: calc(100vh - 231px);
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
        margin-bottom: 15px;
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
    margin-left: 120px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
