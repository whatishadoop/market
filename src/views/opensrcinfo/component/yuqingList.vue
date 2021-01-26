<template>
    <div>
      <defaultNoData v-if="isNoShowData"></defaultNoData>
      <div v-else class="list-content">
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
                      <el-button v-if="0 === index" :class="{active: isActives.dateTypes}" @click="getDate(name)" size="mini" round>{{name}}</el-button>
                      <el-button v-else @click="getDate(name)" size="mini" round>{{name}}</el-button>
                    </div>
                    <!--@change="(value) => getPickerDate(value, '111')"同时传递两个值-->
                    <div class="condition">
                      <el-date-picker
                        @change="(value) => getPickerDate(value, '')"
                        v-model="value1"
                        type="datetimerange"
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
                      <el-button v-if="0 === index" :class="{active: isActives.eventsrcTypes}" @click="getEventsrc(name)" size="mini" round>{{name}}</el-button>
                      <el-button v-else @click="getEventsrc(name)" size="mini" round>{{name}}</el-button>
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
                      <el-button v-if="0 === index" :class="{active: isActives.noisefilterTypes}" @click="getNoisefilter(name)" size="mini" round>{{name}}</el-button>
                      <el-button v-else @click="getNoisefilter(name)" size="mini" round>{{name}}</el-button>
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
                      <el-button v-if="0 === index" :class="{active: isActives.importanteventTypes}"  @click="getImportantevent(item.key)" size="mini" round>{{item.name}}</el-button>
                      <el-button v-else @click="getImportantevent(item.key)" size="mini" round>{{item.name}}</el-button>
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
                      <el-button v-if="0 === index" :class="{active: isActives.emotionaloriTypes}" @click="getEmotionalori(name)" size="mini" round>{{name}}</el-button>
                      <el-button v-else @click="getEmotionalori(name)" size="mini" round>{{name}}</el-button>
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
                      <el-button v-if="0 === index" :class="{active: isActives.duplicateinfoTypes}" @click="getDuplicateinfo(item.key)" size="mini" round>{{item.name}}</el-button>
                      <el-button v-else @click="getDuplicateinfo(item.key)" size="mini" round>{{item.name}}</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div class="datalist-area-wrapper">
            <div class="datatabs">
              <el-tabs v-model="activeName">
                <el-tab-pane label="全部" name="first"><yuqingDetail :detailData="detailData" @e-page="getPage"></yuqingDetail></el-tab-pane>
                <el-tab-pane label="预警" name="second">预警</el-tab-pane>
                <el-tab-pane label="收藏" name="third">收藏</el-tab-pane>
              </el-tabs>
              <div class="data-info">
                <div class="sumcount">
                  <span class="text-one">全部 <span style="color: #5075E7">{{detailData.total}}</span> 篇    去重后 <span style="color: #5075E7">{{detailData.filter_total}}</span> 篇</span>
                </div>
                <div class="data-action">
                  <el-button @click="getDetailDatas" size="mini" style="width: 97px;">刷新信息</el-button>
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
    default: '-1'
  },
  data() {
    return {
      caseid: this.cid,
      isNoShowData: true,
      isActives: {
        dateTypes: true,
        eventsrcTypes: true,
        noisefilterTypes: true,
        importanteventTypes: true,
        emotionaloriTypes: true,
        duplicateinfoTypes: true
      },
      activeName: 'first',
      dateTypes: ['今天', '24小时', '三天', '七天'],
      eventsrcTypes: ['全部', '报刊', '微信'],
      noisefilterTypes: ['全部', '精准舆情', '关联舆情'],
      importanteventTypes: [{ key: '全部' ,name: '0' }, { key: '含重大事件' ,name: '1' }, { key: '不含重大事件' ,name: '2' }],
      emotionaloriTypes: ['全部', '正向', '中性', '负向'],
      duplicateinfoTypes: [{ key: '去重', name: '1' }, { key: '不去重', name: '0' }],
      page: 1,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      conditions: {
        date: {
          start_date: new Date().getTime(),
          end_date: new Date().getTime()
        },
        eventsrc: '全部',
        noisefilter: '全部',
        importantevent: 0,
        emotionalori: '全部',
        duplicateinfo: 1,
        order: ''
      },
      options: [{
        value: 'asc',
        label: '降序'
      }, {
        value: 'desc',
        label: '升序'
      }
      ],
      detailData: {}
    }
  },
  // created() {
  //   this.$nextTick(() => {
  //     console.log(this.caseid)
  //
  //   })
  // },
  wacth: {
    cid: {
      handler (val) {
        alert(val + 'haaha')
      }
    }
  },
  mounted() {
    this.getDetailDatas(this.caseid)
  },
  methods: {
    getDate(type) {
      if (type === '今天') {
        let today = new Date()
        this.conditions.date.start_date = today.getTime()
        this.conditions.date.end_date = today.getTime()
      } else if (type === '24小时') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = getTimestamp(-1)
        this.conditions.date.end_date = today.getTime()
        this.isActives.dateTypes = false
      } else if (type === '三天') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = getTimestamp(-3)
        this.conditions.date.end_date = today.getTime()
        this.isActives.dateTypes = false
      } else if (type === '七天') {
        let today = new Date()
        // 计算24小时前时间
        this.conditions.date.start_date = getTimestamp(-7)
        this.conditions.date.end_date = today.getTime()
        this.isActives.dateTypes = false
      }
    },
    getPickerDate(value, name) {
      this.conditions.date.start_date = value[0].getTime()
      this.conditions.date.end_date = value[1].getTime()
      this.isActives.dateTypes = false
    },
    getEventsrc(value) {
      this.eventsrc = value
      this.isActives.eventsrcTypes = false
    },
    getNoisefilter(value) {
      this.noisefilter = value
      this.isActives.noisefilterTypes = false
    },
    getImportantevent(value) {
      this.importantevent = value
      this.isActives.importanteventTypes = false
    },
    getEmotionalori(value) {
      this.emotionalori = value
      this.isActives.emotionaloriTypes = false
    },
    getDuplicateinfo(value) {
      this.duplicateinfo = value
      this.isActives.duplicateinfoTypes = false
    },
    getDetailDatas(caseid) {
      let data = {
        data: {
          page: this.page,
          rows: 10,
          user_id: '',
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
        this.detailData = res
        if (this.detailData.filter_total > 0) {
          this.isNoShowData = false
        }
        rLoading.close()
        console.log(this.detailData)
      }).catch(res => {
        alert(1111)
        this.isNoShowData = true
      })
    },
    getPage(page) {
      this.page = page
      // 发送查询详情请求
      this.getDetailDatas()
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
