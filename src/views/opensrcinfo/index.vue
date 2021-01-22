<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-content">
        <div class="ability-wrapper">
          <div class="left-content">
            <el-scrollbar style="height:100%;">
              <div class="headline">
                <div class="name"><span style="font-size: 16px;font-weight: bold;font-family: PingFangSC-Semibold;color: #333436;letter-spacing: 0;">监控方案</span></div>
                <div class="create"><i class="el-icon-circle-plus" style="font-size: 20px;"></i></div>
              </div>
              <el-menu
                :default-active="type"
                class="el-menu-vertical-demo"
                style="overflow-y: hidden"
                @select="handleSelect">
                <el-menu-item v-for="(item, index) in allFunctionTypes" :key="index" :index="item.type">
                  <div class="menu-content-wrapper">
                    <div class="menu-content-name">
                      <span slot="title" style="font-family: PingFangSC-Regular;font-size: 14px;color: #949494;letter-spacing: 0;">{{item.name}}</span>
                    </div>
                    <div class="menu-content-icon">
                      <i @click="deleteCaseById(item.id)" class="el-icon-delete"></i>
                    </div>
                  </div>
                </el-menu-item>
              </el-menu>
            </el-scrollbar>
          </div>
          <div class="right-content">
            <div class="monitor-name-wrapper">
              <div class="name"><span style="font-family: PingFangSC-Semibold;font-size: 20px;color: #FFFFFF;">南京中新赛克责任有限公司</span></div>
              <div class="date"><span style="font-family: PingFangSC-Regular;font-size: 14px;color: rgba(255,255,255,0.62);">最后更新时间: 2020-03-02</span></div>
            </div>
            <div class="search-wrapper">
              <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="舆情列表" name="first">
                  <keep-alive>
                    <yuqingList :caseid="caseid"></yuqingList>
                  </keep-alive>
                </el-tab-pane>
                <el-tab-pane label="舆情分析" name="second">舆情分析</el-tab-pane>
                <el-tab-pane label="舆情预警" name="third">舆情预警</el-tab-pane>
                <el-tab-pane label="舆情事件" name="fourth">舆情事件</el-tab-pane>
                <el-tab-pane label="方案设置" name="five"><caseConfig></caseConfig></el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import yuqingList from './component/yuqingList'
import caseConfig from './component/caseConfig'

export default {
  components: {
    yuqingList,
    caseConfig
  },
  computed: {
    functionTypes() {
      if (this.type === '全部') {
        return this.allFunctionTypes.filter(item => item.type !== this.type)
      } else {
        return this.allFunctionTypes.filter(item => item.type === this.type)
      }
    }
  },
  data() {
    return {
      activeName: 'first',
      input: '',
      caseid: '',
      type: '全部',
      // 获取所有能力类型信息
      allFunctionTypes: [
        {
          name: '南京中新赛克科技有限责任公司监控方案',
          id: 22
        },
        {
          name: '监控方案1',
          id: 11
        },
        {
          name: '监控方案2',
          id: 6
        },
        {
          name: '监控方案3',
          id: 2
        },
        {
          name: '监控方案4',
          id: 3
        },
        {
          name: '南京中新赛克科技有限责任公司监控方案',
          id: 22
        },
        {
          name: '监控方案1',
          id: 11
        },
        {
          name: '监控方案2',
          id: 6
        },
        {
          name: '监控方案3',
          id: 2
        },
        {
          name: '监控方案4',
          id: 3
        }
      ]
    }
  },
  created() {
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color: #F0F2F5;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    handleSelect(key, keyPath) {
      this.type = key
    },
    deleteCaseById(caseId) {
      console.log(caseId)
    }
  }
}
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-wapper {
    width: 100%;
    height: calc(100vh - 58px);
    display: flex;
    flex-direction: column;
    .main-content {
      flex: 1 1 auto;
      background: #F0F2F5;
      .ability-wrapper {
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        padding: 14px 10px 0px 10px;
        display: flex;
        box-sizing: border-box;
        .left-content {
          width: 252px;
          height: calc(100vh - 88px);
          background: #FFFFFF;
          border-radius: 12px;
          .headline {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px 0px 20px;
            .name {
              flex: 1;
              letter-spacing: 0;
              line-height: 64px;
            }
            .create {
              font-size: 14px;
            }
          }
        }
        .right-content {
          height: calc(100% - 88px);
          margin-left: 10px;
          flex: 1;
          border-radius: 12px;
          .monitor-name-wrapper {
            height: 73px;
            margin-bottom: 15px;
            padding-left: 42px;
            box-sizing: border-box;
            background-image: linear-gradient(90deg, #5075E7 0%, #5996FB 74%);
            border: 1px solid #5075E7;
            border-radius: 12px;
            .name {
              margin-top: 9px;
            }
            .date {
              margin-top: 4px;
            }
          }
          .search-wrapper {
            background-color: #FFFFFF;
            border-radius: 12px;
            height: 100%;
          }
        }
      }
    }
  }
  .ability-detail-wrapper {
    height: 100%;
    width: 100%;
    .ability-content-wrapper {
      display: flex;
      .logo-detail {
        flex: 0 1 76px;
        margin: 0 18px 0 0;
      }
      .detail {
        flex: 1 1 auto;
        .name {
          width: 128px;
          margin-right: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .text-one {
            font-family: PingFangSC-Medium;
            font-size: 16px;
            line-height: 20px;
            color: #303133;
            letter-spacing: 0;
          }
        }
        .desc {
          margin-top: 8px;
          height: 34px;
          .text-two {
            /*多行文本溢出*/
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            line-height: 17px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #909399;
            letter-spacing: 0;
          }
        }
        .purchase-info-wrapper {
          display: flex;
          align-items: center;
          margin-top: 18px;
          .price {
            display: inline-block;
            .text-three {
              font-family: DINPro-Bold;
              font-size: 18px;
              font-weight: bolder;
              line-height: 18px;
              color: #FD6700;
              letter-spacing: 0;
            }
            .sub-text-three {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #C0C4CC;
              letter-spacing: 0;
              text-decoration: line-through;
            }
          }
          .duration {
            margin-left: 8px;
            width: 96px;
            height: 17px;
            background: #FFF2E8;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            .content {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              line-height: 17px;
              color: #FD6700;
              letter-spacing: 0;
            }
          }
        }
      }
    }
    .ability-authcode-wrapper {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .account-key-wrapper {
        flex: 1 1 auto;
        .title {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #303133;
          letter-spacing: 0;
        }
        .account-key {
          margin-top: 10px;
        }
      }
      .creat-btn-wrapper {
        flex: 0 1 80px;
        margin-left: 5px;
        margin-right: 5px;
      }
      .auth-code-wrapper {
        flex: 1 1 auto;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: bold;
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #303133;
          letter-spacing: 0;
        }
        .auth-code {
          margin-top: 10px;
        }
      }
    }
  }

  .left-content /deep/ .el-menu-item {
    padding: 0 10px 0px 20px;
  }
  .left-content /deep/ .el-menu-item.is-active {
    border-left: 2px solid #65A7FF;
  }
  .left-content /deep/ .menu-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-content-name {
      width: 168px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .menu-content-icon {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      justify-content: right;
    }
  }
</style>
