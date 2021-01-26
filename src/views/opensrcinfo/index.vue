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
                <div @click="newCase" class="create"><i class="el-icon-circle-plus" style="font-size: 20px;"></i></div>
              </div>
              <el-menu
                v-if="!isNewCreate"
                :default-active="caseid"
                class="el-menu-vertical-demo"
                style="overflow-y: hidden"
                @select="handleSelect">
                <el-menu-item v-for="(item, index) in allMonitorCase" :key="index" :index="item.id">
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
              <div v-if="isNewCreate" class="creat-btn-wrapper">
                <img :src="backgroundImage" class="image-size">
                <el-button @click="creaeCase" type="primary" style="width: 200px;height: 32px;margin-top: 21px;padding: 0px;"><span class="create-btn">立即新增</span></el-button>
              </div>
            </el-scrollbar>
          </div>
          <div class="right-content">
            <div v-show="isShowConfigCase">
              <div class="monitor-name-wrapper">
                <div class="name"><span style="font-family: PingFangSC-Semibold;font-size: 20px;color: #FFFFFF;">{{name}}</span></div>
                <div class="date"><span style="font-family: PingFangSC-Regular;font-size: 14px;color: rgba(255,255,255,0.62);">数据截止：{{date}}</span></div>
              </div>
              <div class="search-wrapper">
                <el-tabs @tab-click="handleClick" v-model="activeName" type="card">
                  <el-tab-pane label="舆情列表" name="first">
                    <!--<defaultNoData v-if="isNoShowData"></defaultNoData>-->
                    <yuqingList :cid="caseid"></yuqingList>
                  </el-tab-pane>
                  <el-tab-pane label="舆情分析" name="second">
                    <defaultNoData></defaultNoData>
                  </el-tab-pane>
                  <el-tab-pane label="舆情预警" name="third">
                    <defaultNoData></defaultNoData>
                  </el-tab-pane>
                  <el-tab-pane label="舆情事件" name="fourth">
                    <defaultNoData></defaultNoData>
                  </el-tab-pane>
                  <el-tab-pane label="方案设置" name="five">
                    <caseConfig ref="caseconfig" :userid="userid" :cid="caseid" :is-new-create="isNewCreate" @e-name="renameCompany" @e-refreshCaseItem="refreshCaseItem" @e-refreshDefaultCaseItem="getDefaultAllDataMonitorCaseTree"></caseConfig>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div v-show="!isShowConfigCase" class="blank-data-wrapper">
              <img :src="backgroundImage2" class="image-size">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import yuqingList from './component/yuqingList'
import defaultNoData from './component/defaultNoData'
import caseConfig from './component/caseConfig'
import backgroundImage from '@/assets/fangan.png'
import backgroundImage2 from '@/assets/shuju.png'
import { getAllDataMonitorCase, delMonitorCase } from '@/api/opensrcinfo/dataset'
export default {
  components: {
    yuqingList,
    caseConfig,
    defaultNoData
  },
  data() {
    return {
      userid: 'admin',
      isNewCreate: true,
      isShowConfigCase: false,
      isNoShowData: true,
      name: '未命名',
      date: '暂无时间', // 2020-01-07  14:13:14
      backgroundImage: backgroundImage,
      backgroundImage2: backgroundImage2,
      activeName: 'five',
      input: '',
      caseid: '',
      // 获取所有监控方案信息
      allMonitorCase: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.getAllDataMonitorCaseTree()
    })
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color: #F0F2F5;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    newCase() {
      // 加号创建
      if (this.isNewCreate) {
        return
      }
      this.activeName = 'five'
      // 2. 右侧tab页自由方案设置中有显示，其余提示没有数据
      this.isNoShowData = true
      // 舆情列表显示为空
      this.isShowConfigCase = true
      // 调用子组件方法保存方案默认值
      this.$refs.caseconfig.saveDefaultConfigInfo(this.userid, '未命名')
    },
    creaeCase() {
      // 新建
      this.isShowConfigCase = true
      this.isNoShowData = true
      this.caseid = ''
    },
    refreshCaseItem(data) {
      this.getAllDataMonitorCaseTree()
    },
    getAllDataMonitorCaseTree() {
      const rLoading = this.openLoading()
      let data = {
        data: {
          userid: this.userid
        }
      }
      getAllDataMonitorCase(data).then(res => {
        debugger
        this.allMonitorCase = res.caseinfo.reverse()
        if (this.allMonitorCase.length > 0) {
          this.activeName = 'first'
          this.isNewCreate = false
          this.isNoShowData = false
          this.isShowConfigCase = true
          // 默认显示第一个方案的详情信息
          this.caseid = this.allMonitorCase[0].id
        } else {
          this.activeName = 'five'
          this.isNewCreate = true
          this.isNoShowData = true
          this.isShowConfigCase = false
          this.$refs.caseconfig.saveDefaultConfigInfo(this.userid, '未命名')
        }
        rLoading.close()
      })
    },
    getDefaultAllDataMonitorCaseTree() {
      const rLoading = this.openLoading()
      let data = {
        data: {
          userid: this.userid
        }
      }
      getAllDataMonitorCase(data).then(res => {
        debugger
        this.allMonitorCase = res.caseinfo.reverse()
        if (this.allMonitorCase.length > 0) {
          this.activeName = 'five'
          this.isNewCreate = false
          this.isNoShowData = false
          this.isShowConfigCase = true
          // 默认显示最后一个方案的详情信息
          let size = res.caseinfo.length
          this.caseid = this.allMonitorCase[0].id
        }
        rLoading.close()
      })
    },
    handleNewCreate(size) {
      // 根据当前用户名查询对应的方案列表，若size数量为0，则显示新建状态
      this.isNewCreate = true
    },
    renameCompany(name) {
      this.name = name
    },
    handleSelect(key, keyPath) {
      // 设置caseid
      this.caseid = key
      // 设置公司名称
      alert(this.caseid)
      // 调用tab子类方法进行刷新，直接刷新fist和five tab页
    },
    handleClick(tab, event) {
      // 点击tab页显示事件
      if (tab.name == 'first'){
        alert(1)
      } else if(tab.name == 'five') {
        alert(5)
      }
    },
    deleteCaseById(caseId) {
      debugger
      this.$confirm('此操作将删除该监控方案, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 向后台发送删除请求
        let data = {
          data: {
            userid: this.userid,
            id: caseId
          }
        }
        delMonitorCase(data).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getAllDataMonitorCaseTree()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
              display: inline-block;
              font-size: 14px;
              cursor: pointer;
            }
          }
          .creat-btn-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 53px;
            .image-size {
              height: 139px;
              width: 235px;
              object-fit: contain;
            }
            .create-btn {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #FFFFFF;
              text-align: center;
            }
          }
        }
        .right-content {
          height: calc(100vh - 88px);
          margin-left: 10px;
          flex: 1;
          border-radius: 12px;
          .blank-data-wrapper {
            height: 100%;
            background-color: #FFFFFF;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            .image-size {
              height: 285px;
              width: 482px;
              object-fit: contain;
            }
          }
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
