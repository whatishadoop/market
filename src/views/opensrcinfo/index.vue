<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-two-content">
        <div class="ability-wrapper">
          <div class="left-content">
            <el-menu
              :default-active="type"
              class="el-menu-vertical-demo" @select="handleSelect">
              <el-menu-item v-for="(item, index) in allFunctionTypes" :key="index" :index="item.type">
                <i :class=icons[index]></i>
                <span slot="title" style="font-family: PingFangSC-Regular;font-size: 14px;color: #949494;letter-spacing: 0;">{{item.type}}  ({{item.cnt}})</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="right-content">
            <div class="search-wrapper">
              <el-input placeholder="搜索" v-model="input">
                <el-button @click="getFunctionDetailByCondition()" slot="prepend" icon="el-icon-search" style="color: #5075E7;font-weight: bold"></el-button>
              </el-input>
            </div>
            <template v-for="(item, index) in functionTypes">
              <div class="ability-type-wrapper" :key="index">
                <span class="ability-type-name">{{item.type}}</span>
              </div>
              <div class="ability-content-wrapper" :key="item.id">
                <div class="ability-content">
                  <div v-for="item in functionDetailsByType(item.type)" :key="item.id" class="content-item">
                    <div class="content-info">
                      <div class="content-wrapper">
                        <div class="logo">
                          <svg-icon :icon-class="item.iconUrl" style="height: 70px;width: 70px;"/>
                        </div>
                        <div class="detail">
                          <div class="name"><span class="text-one">{{item.name}}</span></div>
                          <div class="duration"><span class="text-two">{{item.useTimeDesc}}</span></div>
                          <div class="price"><span class="text-three">￥{{item.currentPrice}} </span><span class="sub-text-three">{{item.originalPrice}}</span></div>
                        </div>
                      </div>
                      <div class="content-desc" :title="item.detail">
                        <span class="desc">{{item.detail}}</span>
                      </div>
                      <div class="license-code-wrapper">
                        <div class="license-code-btn" @click="buyApp(item)">购买授权码</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!--对话框-->
    <el-dialog title="购买授权码" :visible.sync="dialogFormVisible" :left="true" width="880px" :before-close="handleDialogClose">
      <div class="ability-detail-wrapper">
        <div class="ability-content-wrapper">
          <div class="logo-detail">
            <svg-icon :icon-class="abilituitem.iconUrl" style="height: 100px;width: 100px;"/>
          </div>
          <div class="detail">
            <div class="name"><span class="text-one">{{abilituitem.name}}</span></div>
            <div class="desc"><span class="text-two">{{abilituitem.detail}}</span></div>
            <div class="purchase-info-wrapper">
              <div class="price"><span class="text-three">￥{{abilituitem.currentPrice}} </span><span class="sub-text-three">{{abilituitem.originalPrice}}</span></div>
              <div class="duration"><span class="content">{{abilituitem.useTimeDesc}}</span></div>
            </div>
          </div>
        </div>
        <div class="ability-authcode-wrapper">
          <div class="account-key-wrapper">
            <div class="title">
              <div>
                <span>账号密钥：</span>
              </div>
              <el-button size="small" type="primary" style="color: transparent;background-color: transparent;border: 0px;">下载授权码</el-button>
              <el-button type="primary" size="small" style="color: transparent;background-color: transparent;border: 0px;">一键复制</el-button>
            </div>
            <div class="account-key">
              <el-input
                type="textarea"
                :rows="11"
                placeholder="请输入您的账号密钥，账号密钥在OceanMind系统内“功能授权弹窗”的顶部哦～"
                v-model="textarea1">
              </el-input>
            </div>
          </div>
          <div class="creat-btn-wrapper">
            <el-button type="primary" size="small" @click="genCode">生成授权码</el-button>
          </div>
          <div class="auth-code-wrapper">
            <div class="title">
              <div>
                <span>授权码：</span>
              </div>
              <div><el-button size="small" type="primary" @click="downGenCode">下载授权码</el-button><el-button type="primary" size="small" @click="copy">一键复制</el-button></div>
            </div>
            <div class="auth-code">
              <el-input
                type="textarea"
                :rows="11"
                placeholder="请输入内容"
                v-model="textarea2">
              </el-input>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelPurchase" size="small">取消购买</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllFunctionTypes, getAllFunctionDetails, getFunctionDetailByCondition, getAllTypesByCondition, getFuncCode, downloadFuncCode } from '@/api/abilitymarket/function'
import { getToken, setToken } from '@/utils/auth'
export default {
  computed: {
    functionDetailsByType () {
      return function(type) {
        return this.allFunctions.filter(item => item.type === type)
      }
    },
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
      input: '',
      type: '全部',
      icons: ['el-icon-menu', 'el-icon-mic', 'el-icon-view', 'el-icon-tickets', 'el-icon-link'],
      // 所有能力包信息
      allFunctions: [],
      // 获取所有能力类型信息
      allFunctionTypes: [],
      // 需求反馈对话框
      dialogFormVisible: false,
      abilituitem: {},
      textarea1: '',
      textarea2: ''
    }
  },
  created() {
    let that = this
    document.onkeypress = function(e) {
      let keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        that.getFunctionDetailByCondition()
        return false
      }
    }
    this.$nextTick(() => {
      this.getAllFunctionDetails()
      this.getAllFunctionTypes()
    })
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color: #F0F2F5;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    copy () {
      this.$copyText(this.textarea2).then(function (e) {
        this.$message({
          message: '复制成功',
          type: 'success'
        })
      }, function (e) {
        this.$message({
          message: '复制失败',
          type: 'warning'
        })
      })
    },
    downGenCode () {
      if (this.textarea1 === '' || this.textarea1 === null) {
        this.$message.error('请输入您的账号密钥')
        return
      }
      let data = {
        key: this.textarea1,
        funcId: this.abilituitem.functionId,
        funcName: this.abilituitem.name,
        days: this.abilituitem.useTime
      }
      downloadFuncCode(data).then(res => {
        window.location.href = res.downLoadPath
      })
    },
    genCode() {
      if (this.textarea1 === '' || this.textarea1 === null) {
        this.$message.error('请输入您的账号密钥')
        return
      }
      let data = {
        key: this.textarea1,
        funcId: this.abilituitem.functionId,
        funcName: this.abilituitem.name,
        days: this.abilituitem.useTime
      }
      getFuncCode(data).then(res => {
        this.textarea2 = res.funcCode
        // 保存在cookies中，有效期1天
        setToken(this.textarea1, true)
      })
    },
    handleSelect(key, keyPath) {
      this.type = key
    },
    buyApp(item) {
      this.abilituitem = item
      let keyValue = getToken()
      if (keyValue !== '' || keyValue !== null) {
        this.textarea1 = keyValue
      }
      this.dialogFormVisible = true
    },
    getAllFunctionDetails() {
      const rLoading = this.openLoading()
      const params = {
        page: '0',
        rows: '5000'
      }
      getAllFunctionDetails(params).then(res => {
        this.allFunctions = res.rows
        rLoading.close()
      })
    },
    getAllFunctionTypes() {
      getAllFunctionTypes().then(res => {
        this.allFunctionTypes = res
      })
    },
    getFunctionDetailByCondition() {
      const rLoading = this.openLoading()
      const params1 = {
        condition: this.input
      }
      const params2 = {
        condition: this.input,
        page: '0',
        rows: '5000'
      }
      getAllTypesByCondition(params1).then(res => {
        this.allFunctionTypes = res
      })
      getFunctionDetailByCondition(params2).then(res => {
        this.allFunctions = res.rows
        rLoading.close()
      })
    },
    /**
     * 点击 X 关闭对话框的回调
     **/
    handleDialogClose(done) {
      this.textarea1 = ''
      this.textarea2 = ''
      done()
    },
    cancelPurchase() {
      this.textarea1 = ''
      this.textarea2 = ''
      this.dialogFormVisible = false
    }
  }
}
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-wapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main-two-content {
      flex: 1 1 auto;
      background: #F0F2F5;
      .ability-wrapper {
        position: relative;
        top: 0px;
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        border-radius: 12px;
        .left-content {
          width: 194px;
          padding-top: 8px;
          padding-left: 8px;
          flex: 0 1 194px;
          box-shadow: inset -1px 0 0 0 #E4E7ED;
        }
        .right-content {
          width: 1006px;
          padding-left: 16px;
          padding-top: 16px;
          flex: 0 1 1006px;
          .search-wrapper {
            width: 432px;
            margin-bottom: 30px;
          }
          .ability-type-wrapper {
            display: flex;
            margin-top: 20px;
            .ability-type-name {
              font-family: PingFangSC-Medium;
              font-size: 16px;
              font-weight: bold;
              line-height: 16px;
              color: #000000;
              text-align: center;
            }
          }
          .ability-content-wrapper {
            position: relative;
            left: 0px;
            top: 0px;
            width: 100%;
            margin-top: 14px;
            background: #fff;
            border-radius: 12px;
            .ability-content {
              display: flex;
              flex-wrap: wrap;
              background: #fff;
              border-radius: 12px;
              .content-item {
                flex: none;
                width: 234px;
                margin-right: 12px;
                margin-bottom: 12px;
                .content-info {
                  position: relative;
                  width: 100%;
                  height: 184px;
                  border: 1px solid #EBEEF5;
                  border-radius: 5px;
                  .content-wrapper {
                    display: flex;
                    height: 92px;
                    .logo {
                      flex: 0 1 76px;
                      margin: 12px;
                    }
                    .detail {
                      flex: 1 1 auto;
                      .name {
                        width: 128px;
                        margin-top: 12px;
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
                      .duration {
                        width: 96px;
                        height: 17px;
                        margin-top: 4px;
                        background: #FFF2E8;
                        border-radius: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .text-two {
                          font-family: PingFangSC-Regular;
                          font-size: 12px;
                          line-height: 17px;
                          color: #FD6700;
                          letter-spacing: 0;
                        }
                      }
                      .price {
                        margin-top: 8px;
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
                    }
                  }
                  .content-desc {
                    margin: 0px 12px 0px;
                    .desc {
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
                  .license-code-wrapper {
                    position: absolute;
                    top: 142px;
                    left: 0;
                    width: 100%;
                    height: 44px;
                    padding: 12px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    .license-code-btn {
                      display: inline-block;
                      vertical-align: bottom;
                      height: 32px;
                      width: 208px;
                      line-height: 32px;
                      box-sizing: border-box;
                      outline: 0;
                      text-align: center;
                      font-size: 12px;
                      color: #5587FF;
                      border: 1px solid #5587FF;
                      border-radius: 8px;
                      transition: .5s ease;
                      cursor: pointer;
                      &:hover {
                        background: #5587FF;
                        color: #fff;
                      }
                    }
                  }
                }
              }
            }
            .page {
              display: flex;
              justify-content: center;
              align-items: center;
              padding-bottom: 10px;
            }
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
  /**修改搜索框样式**/
  .search-wrapper /deep/ .el-input__inner {
    height: 45px;
    line-height: 45px;
    padding-left: 0px;
    border: 0px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: #F5F7FA;
  }
  .search-wrapper /deep/ .el-input-group__prepend {
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 10px;
    background: #F5F7FA;
    border-radius: 12px 0px 0px 12px;
    border: 0px;
  }
  .left-content /deep/ .el-menu {
    border-top-left-radius: 12px;
  }
  .left-content /deep/ .el-menu-item.is-active {
    border-left: 2px solid #65A7FF;
  }
</style>
