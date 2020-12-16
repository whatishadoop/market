<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-one-content">

      </div>
      <div class="main-two-content">
        <div class="ability-wrapper">
          <div class="left-content">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">

              <el-menu-item v-for="(item, index) in allFunctionTypes" :key="index"  index="1 + index">
                <i class="el-icon-menu"></i>
                <span slot="title" style="font-family: PingFangSC-Regular;font-size: 14px;color: #949494;letter-spacing: 0;">{{item.type}}  ({{item.cnt}})</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="right-content">
            <div class="search-wrapper">
              <el-input placeholder="搜索" v-model="input">
                <el-button @click="getDataPackagesByCondition()" slot="prepend" icon="el-icon-search" style="color: #5075E7;font-weight: bold"></el-button>
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
                          <svg-icon icon-class="音频文件转写" style="height: 70px;width: 70px;"/>
                        </div>
                        <div class="detail">
                          <div class="name"><span class="text-one">{{item.name}}</span></div>
                          <div class="duration"><span class="text-two">{{item.useTimeDesc}}</span></div>
                          <div class="price"><span class="text-three">￥{{item.currentPrice}} </span><span class="sub-text-three">{{item.originalPrice}}</span></div>
                        </div>
                      </div>
                      <div class="content-desc">
                        <span class="desc">{{item.detail}}</span>
                      </div>
                      <div class="license-code-wrapper">
                        <div class="license-code-btn" @click="editApplication(item.id)">购买授权码</div>
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
    <el-dialog title="需求提交" :visible.sync="dialogFormVisible" :center="true">
      <el-form :model="form" :rules="rules" ref="ruleform">
        <el-form-item label="需求类型" label-width="100px" prop="type">
          <el-radio v-model="form.requireType" label="1">API</el-radio>
          <el-radio v-model="form.requireType" label="2">数据块</el-radio>
        </el-form-item>
        <el-form-item label="需求描述" label-width="100px" prop="desc">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.requireDetail">
          </el-input>
        </el-form-item>
        <el-form-item label="您的称呼" label-width="100px" prop="name">
          <el-input
            placeholder="请输入内容"
            v-model="form.customerName"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="联系方式" label-width="100px" prop="phone">
          <el-input
            placeholder="请输入内容"
            v-model="form.contactInfo"
            clearable>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleform')">重 置</el-button>
        <el-button type="primary" @click="submitForm('ruleform')">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllFunctionTypes, getAllFunctionDetails } from '@/api/abilitymarket/function'
export default {
  computed: {
    functionDetailsByType () {
      return function(type) {
        return this.allFunctions.filter(item => item.type === type)
      }
    },
    functionTypes() {
      return this.noAllFunctionTypes
    }
  },
  data() {
    return {
      input: '',
      type: '全部',
      // 所有能力包信息
      allFunctions: [],
      // 获取所有能力类型信息
      allFunctionTypes: [],
      // 获取所有能力类型信息,不包括全部
      noAllFunctionTypes: [],
      // 需求反馈对话框
      dialogFormVisible: false,
      form: {
        requireType: '1',
        requireDetail: '',
        customerName: '',
        contactInfo: ''
      },
      rules: {
        requireType: [
          { required: true, message: '需求类型不能为空' }
        ],
        requireDetail: [
          { required: true, message: '需求描述不能为空' }
        ],
        customerName: [
          { required: true, message: '称呼不能为空' }
        ],
        contactInfo: [
          { required: true, message: '联系方式不能为空' }
        ]
      }
    }
  },
  created() {
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    editApplication(id) {
    },
    submitForm(formName) {
      this.dialogFormVisible = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          this.resetForm(formName)
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    getAllFunctionDetails() {
      getAllFunctionDetails().then(res => {
        this.allFunctions = res.rows
      })
    },
    getAllFunctionTypes() {
      getAllFunctionTypes().then(res => {
        this.allFunctionTypes = res
        this.noAllFunctionTypes = res.filter(item => item.type !== '全部')
      })
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
    .main-one-content {
      flex: 0 1 262px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #4C7DFE;
      border-radius: 0 0 12px 12px;
    }
    .main-two-content {
      flex: 1 1 auto;
      background: #F0F2F5;
      .ability-wrapper {
        position: relative;
        top: -200px;
        flex: 1 1 auto;
        margin: 0 auto;
        width: 1200px;
        display: flex;
        background-color: #FFFFFF;
        border-radius: 12px;
        .left-content {
          width: 194px;
          padding-top: 23px;
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
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
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
