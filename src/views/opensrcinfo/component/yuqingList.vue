<template>
    <div>
      <div class="list-content">
        <el-scrollbar style="height:100%;">
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
                    <div class="condition" v-for="(name, index) in dateTypes" :key="index">
                      <el-button :class="{active: isActives.dateTypes === index}" @click="getDate(name, index)" size="mini" round>{{name}}</el-button>
                    </div>
                    <!--@change="(value) => getPickerDate(value, '111')"同时传递两个值-->
                    <div class="condition">
                      <el-date-picker
                        @change="(value) => getPickerDate(value, '')"
                        v-model="value1"
                        type="datetimerange"
                        format="yyyy/MM/dd HH:mm:ss"
                        value-format="yyyy/MM/dd HH:mm:ss"
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
                      <span class="text-one">事件来源:</span>
                    </div>
                  </el-col>
                  <el-col :span="20">
                    <div class="condition" v-for="(name, index) in eventsrcTypes" :key="index">
                      <el-button :class="{active: isActives.eventsrcTypes === index}" @click="getEventsrc(name,index)" size="mini" round>{{name}}</el-button>
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
                    <div class="condition" v-for="(name, index) in noisefilterTypes" :key="index">
                      <el-button :class="{active: isActives.noisefilterTypes === index}" @click="getNoisefilter(name,index)" size="mini" round>{{name}}</el-button>
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
                    <div class="condition" v-for="(item, index) in importanteventTypes" :key="index">
                      <el-button :class="{active: isActives.importanteventTypes === index}" @click="getImportantevent(item.key,index)" size="mini" round>{{item.name}}</el-button>
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
                    <div class="condition" v-for="(name, index) in emotionaloriTypes" :key="index">
                      <el-button :class="{active: isActives.emotionaloriTypes === index}" @click="getEmotionalori(name,index)" size="mini" round>{{name}}</el-button>
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
                    <div class="condition" v-for="(item, index) in duplicateinfoTypes" :key="index">
                      <el-button :class="{active: isActives.duplicateinfoTypes === index}" @click="getDuplicateinfo(item.key, index)" size="mini" round>{{item.name}}</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div class="datalist-area-wrapper">
            <div class="datatabs">
              <el-tabs v-model="activeName">
                <el-tab-pane label="全部" name="first">
                  <defaultNoData v-if="isNoShowData"></defaultNoData>
                  <yuqingDetail v-else :detailData="detailData" :page="page" @e-page="getPage" ref="yuqingDetail"></yuqingDetail>
                </el-tab-pane>
                <el-tab-pane label="预警" name="second">预警</el-tab-pane>
                <el-tab-pane label="收藏" name="third">收藏</el-tab-pane>
              </el-tabs>
              <div class="data-info">
                <div class="sumcount">
                  <span class="text-one">全部 <span style="color: #5075E7">{{detailData.total}}</span> 篇    去重后 <span style="color: #5075E7">{{detailData.filter_total}}</span> 篇</span>
                </div>
                <div class="data-action">
                  <el-button @click="refresh2(caseid)" size="mini" style="width: 97px;">刷新信息</el-button>
                  <el-button size="mini" style="width: 97px;">全部导出</el-button>
                  <el-select @change="currentSel" v-model="conditions.order" placeholder="时间排序" size="mini" style="width: 97px;margin-left: 10px;">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import yuqingDetail from './yuqingDetail'
import { getDay, getTimestamp } from '@/utils/date'
import { delMonitorCase, getDataDetailByCondition, getMonitorCase, saveMonitorCase } from '@/api/opensrcinfo/dataset'
import defaultNoData from './defaultNoData'
export default {
  components: {
    yuqingDetail,
    defaultNoData
  },
  props: {
    cid: String,
    userid: String,
    isNewCreate: Boolean
  },
  data() {
    return {
      caseid: this.cid,
      isNoShowData: true,
      isActives: {
        dateTypes: 0,
        eventsrcTypes: 0,
        noisefilterTypes: 0,
        importanteventTypes: 0,
        emotionaloriTypes: 0,
        duplicateinfoTypes: 0
      },
      activeName: 'first',
      dateTypes: ['今天', '24小时', '三天', '七天'],
      eventsrcTypes: ['全部', '报刊', '微信'],
      noisefilterTypes: ['全部', '精准', '关联'],
      importanteventTypes: [{ name: '全部', key: 0 }, { name: '含重大事件', key: 1 }, { name: '不含重大事件', key: 2 }],
      emotionaloriTypes: ['全部', '正面', '中立', '负面'],
      duplicateinfoTypes: [{ name: '去重', key: 1 }, { name: '不去重', key: 0 }],
      page: 1,
      value1: [new Date(2021, 1, 0, 10, 10), new Date(2021, 1, 0, 10, 10)],
      conditions: {
        date: {
          start_date: Math.floor(getTimestamp(-1) / 1000),
          end_date: Math.floor(new Date().getTime() / 1000)
        },
        eventsrc: '全部',
        noisefilter: '全部',
        importantevent: 0,
        emotionalori: '全部',
        duplicateinfo: 1,
        order: 'desc'
      },
      options: [{
        value: 'asc',
        label: '升序'
      }, {
        value: 'desc',
        label: '降序'
      }
      ],
      detailData: {
        case_id: '',
        total: 0,
        filter_total: 0,
        rows: []
      }
    }
  },
  created() {
    if (!this.isNewCreate) {
      this.$nextTick(() => {
        this.getDetailDatas(this.caseid)
      })
    }
  },
  // wacth: {
  //   cid: {
  //     handler (val) {
  //       alert(val + 'haaha')
  //     }
  //   }
  // },
  methods: {
    getDate(type, index) {
      if (type === '今天') {
        let today = new Date()
        this.conditions.date.start_date = Math.floor(getTimestamp(-1) / 1000)
        this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
      } else if (type === '24小时') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = Math.floor(getTimestamp(-1) / 1000)
        this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
      } else if (type === '三天') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = Math.floor(getTimestamp(-3) / 1000)
        this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
      } else if (type === '七天') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = Math.floor(getTimestamp(-7) / 1000)
        this.conditions.date.end_date = Math.floor(today.getTime() / 1000)
      }
      this.isActives.dateTypes = index
      this.refresh2(this.caseid)
    },
    getPickerDate(value, name) {
      debugger
      /* eslint-disable */
      let start_date = Date.parse(value[0])
      let end_date = Date.parse(value[1])
      this.conditions.date.start_date = Math.floor(start_date / 1000)
      this.conditions.date.end_date = Math.floor(end_date / 1000)
      this.isActives.dateTypes = -1
      this.refresh2(this.caseid)
    },
    getEventsrc(value, index) {
      this.conditions.eventsrc = value
      this.isActives.eventsrcTypes = index
      this.refresh2(this.caseid)
    },
    getNoisefilter(value, index) {
      this.conditions.noisefilter = value
      this.isActives.noisefilterTypes = index
      this.refresh2(this.caseid)
    },
    getImportantevent(value, index) {
      this.conditions.importantevent = value
      this.isActives.importanteventTypes = index
      this.refresh2(this.caseid)
    },
    getEmotionalori(value, index) {
      this.conditions.emotionalori = value
      this.isActives.emotionaloriTypes = index
      this.refresh2(this.caseid)
    },
    getDuplicateinfo(value, index) {
      this.conditions.duplicateinfo = value
      this.isActives.duplicateinfoTypes = index
      this.refresh2(this.caseid)
    },
    refresh(caseid) {
      this.page = 1
      // 按钮初始化
      this.isActives.dateTypes = 0
      this.isActives.eventsrcTypes = 0
      this.isActives.noisefilterTypes = 0
      this.isActives.importanteventTypes = 0
      this.isActives.emotionaloriTypes = 0
      this.isActives.duplicateinfoTypes = 0
      this.caseid = caseid

      this.conditions.date.start_date = Math.floor(getTimestamp(-1) / 1000)
      this.conditions.date.end_date = Math.floor(new Date().getTime() / 1000)
      this.conditions.eventsrc = '全部'
      this.conditions.noisefilter = '全部'
      this.conditions.importantevent = 0
      this.conditions.emotionalori =  '全部'
      this.conditions.duplicateinfo = 1
      this.conditions.order = 'desc'
      let data = {
        data: {
          page: this.page,
          rows: 20,
          user_id: this.userid,
          conditions: {
            case_id: caseid,
            type_full_alarm_favorite: '全部', // 包括：全部, 预警，收藏 三种
            date: { // timestamp时间格式，精确到秒
              start_date: Math.floor(getTimestamp(-1) / 1000),
              end_date: Math.floor(new Date().getTime() / 1000)
            },
            media_type: '全部', // 包括网媒、报纸、微博、微信公众号、论坛、其他
            relevant_or_precise: '全部', // 包括：精准，关联 两种
            is_contain_important_events: 0, // 0:全部， 1：含重大事件， 2：不含重大事件
            sentiment_type: '全部', // 包括：全部，正面，负面，中立 四种，
            is_repeat: 1, // 0: 不去重， 1：去重
            time_order_type: 'desc' // 查询结果的时间排序方式， 包括： ‘asc’和’desc’，非这两种时，默认’desc’
          }
        }
      }
      debugger
      getDataDetailByCondition(data).then(res => {
        const rLoading = this.openLoading()
        this.detailData.total = res.total
        this.detailData.filter_total = res.filter_total
        this.detailData.rows = res.rows
        if (this.detailData.filter_total > 0) {
          this.isNoShowData = false
        } else {
          this.isNoShowData = true
        }
        this.$nextTick(() => {
          if (!this.isNoShowData) {
            // 不去重
            if (this.conditions.duplicateinfo === 0) {
              this.$refs.yuqingDetail.refreshPage(this.detailData.total)
            } else {
              this.$refs.yuqingDetail.refreshPage(this.detailData.filter_total)
            }
          }
        })
        rLoading.close()
        console.log(this.detailData)
      }).catch(res => {
        console.log(res)
        this.isNoShowData = true
      })
    },
    refresh2(caseid) {
      this.page = 1
      this.caseid = caseid
      let data = {
        data: {
          page: this.page,
          rows: 20,
          user_id: this.userid,
          conditions: {
            case_id: caseid,
            type_full_alarm_favorite: '全部', // 包括：全部, 预警，收藏 三种
            date: { // timestamp时间格式，精确到秒
              start_date: this.conditions.date.start_date,
              end_date: this.conditions.date.end_date
            },
            media_type: this.conditions.eventsrc, // 包括网媒、报纸、微博、微信公众号、论坛、其他
            relevant_or_precise: this.conditions.noisefilter, // 包括：精准，关联 两种
            is_contain_important_events: this.conditions.importantevent, // 0:全部， 1：含重大事件， 2：不含重大事件
            sentiment_type: this.conditions.emotionalori, // 包括：全部，正面，负面，中立 四种，
            is_repeat: this.conditions.duplicateinfo, // 0: 不去重， 1：去重
            time_order_type: this.conditions.order // 查询结果的时间排序方式， 包括： ‘asc’和’desc’，非这两种时，默认’desc’
          }
        }
      }
      debugger
      getDataDetailByCondition(data).then(res => {
        const rLoading = this.openLoading()
        this.detailData.total = res.total
        this.detailData.filter_total = res.filter_total
        this.detailData.rows = res.rows
        if (this.detailData.filter_total > 0) {
          this.isNoShowData = false
        } else {
          this.isNoShowData = true
        }
        this.$nextTick(() => {
          if (!this.isNoShowData) {
            // 不去重
            if (this.conditions.duplicateinfo === 0) {
              this.$refs.yuqingDetail.refreshPage(this.detailData.total)
            } else {
              this.$refs.yuqingDetail.refreshPage(this.detailData.filter_total)
            }
          }
        })
        rLoading.close()
        console.log(this.detailData)
      }).catch(res => {
        console.log(res)
        this.isNoShowData = true
      })
    },
    getDetailDatas(caseid) {
      debugger
      let data = {
        data: {
          page: this.page,
          rows: 20,
          user_id: this.userid,
          conditions: {
            case_id: caseid,
            type_full_alarm_favorite: '全部', // 包括：全部, 预警，收藏 三种
            date: { // timestamp时间格式，精确到秒
              start_date: this.conditions.date.start_date,
              end_date: this.conditions.date.end_date
            },
            media_type: this.conditions.eventsrc, // 包括网媒、报纸、微博、微信公众号、论坛、其他
            relevant_or_precise: this.conditions.noisefilter, // 包括：精准，关联 两种
            is_contain_important_events: this.conditions.importantevent, // 0:全部， 1：含重大事件， 2：不含重大事件
            sentiment_type: this.conditions.emotionalori, // 包括：全部，正面，负面，中立 四种，
            is_repeat: this.conditions.duplicateinfo, // 0: 不去重， 1：去重
            time_order_type: this.conditions.order // 查询结果的时间排序方式， 包括： ‘asc’和’desc’，非这两种时，默认’desc’
          }
        }
      }
      getDataDetailByCondition(data).then(res => {
        const rLoading = this.openLoading()
        this.detailData.total = res.total
        this.detailData.filter_total = res.filter_total
        this.detailData.rows = res.rows
        if (this.detailData.filter_total > 0) {
          this.isNoShowData = false
        }
        rLoading.close()
        console.log(this.detailData)
      }).catch(res => {
        console.log(res)
        this.isNoShowData = true
      })
    },
    getPage(page) {
      this.page = page
      // 发送查询详情请求
      this.getDetailDatas(this.caseid)
    },
    currentSel(selVal) {
      this.conditions.order = selVal
      // 发送查询详情请求
      this.getDetailDatas()
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.list-content {
  width: 100%;
  height: calc(100vh - 231px);
  .query-area-wrapper {
    height: 100%;
    weight: 100%;
    .left-wrapper {
      height: 100%;
      weight: 100%;
      margin-bottom: 5px;
      .label {
        margin-top: 10px;
        line-height: 20px;
        text-align: right;
        padding-top: 2px;
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
        .active {
          color: #00bdff;
          background: rgb(236, 245, 255);
          border-color: rgb(179, 216, 255);
        }
      }
    }
    .right-wrapper {
      height: 100%;
      weight: 100%;
      margin-bottom: 5px;
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
        .active {
          color: #00bdff;
          background: rgb(236, 245, 255);
          border-color: rgb(179, 216, 255);
        }
      }
    }
  }
  .datalist-area-wrapper {
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 31px;
    .datatabs {
      position: relative;
      .data-info {
        position: absolute;
        top: 5px;
        right: 0px;
        width: 515px;
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
}
</style>
