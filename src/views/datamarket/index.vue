<template>
    <div>
      <!--搜索与分类内容区域-->
      <div class="main-wapper">
        <div class="main-one-content">
          <div class="search-wrapper">
            <el-input placeholder="请输入内容" v-model="input">
              <el-button @click="getDataPackagesByCondition()" slot="prepend" icon="el-icon-search" style="color: #5075E7;font-weight: bold"></el-button>
            </el-input>
          </div>
        </div>
        <div class="main-two-content">
          <div class="data-type-wrapper">
            <div class="data-headline">
              <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;margin: 0px">数据块分类</h3>
            </div>
            <div class="data-type-btn">
              <template v-for="(item , index) in dataTypes">
                <el-button size="small" round style="background: #F2F6FC;border-radius: 18px;border: 1px solid #DCDFE6;" :key="index" @click="getAllDataPackages(item.type)">{{item.type}}</el-button>
              </template>
            </div>
            <div class="data-type-content-wrapper">
              <div class="data-type-content">
                <div v-for="(item , index) in tableData" :key="index" class="content-item" @mouseover="selectItem(index)" @mouseout="unselectItem(index)">
                  <div class="content-info">
                    <svg-icon icon-class="icon_2_off" style="height: 141px;width: 141px;"/>
                    <div v-show="isSelect === index" class="content-menu">
                      <div class="content-btn" @click="editApplication(item.id)">下载数据</div>
                    </div>
                  </div>
                  <div class="content-main">
                    <span class="content-name">{{item.name}}</span>
                  </div>
                </div>
              </div>
              <div class="page">
                <el-pagination
                  background
                  :current-page="currentPage"
                  :page-size="pageSize"
                  :total="total"
                  layout="prev, pager, next"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--对话框-->
      <el-dialog title="需求提交" :visible.sync="dialogFormVisible" :center="true">
        <el-form :model="form" :rules="rules" ref="ruleform">
          <el-form-item label="需求类型" label-width="100px" prop="type">
            <el-radio v-model="form.type" label="1">API</el-radio>
            <el-radio v-model="form.type" label="2">数据块</el-radio>
          </el-form-item>
          <el-form-item label="需求描述" label-width="100px" prop="desc">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="form.desc">
            </el-input>
          </el-form-item>
          <el-form-item label="您的称呼" label-width="100px" prop="name">
            <el-input
              placeholder="请输入内容"
              v-model="form.name"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="联系方式" label-width="100px" prop="phone">
            <el-input
              placeholder="请输入内容"
              v-model="form.phone"
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
import { getAllDataPackages, getAllTypes, getDataPackagesByType, getDataPackagesByCondition } from '@/api/datamarket/dataset'
export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      isSelect: -1,
      input: '',
      // 所有数据包信息
      dataPackages: [],
      // 所有数据包类型信息
      dataTypes: [],
      // 前端分页显示数据
      tableData: [],
      // 需求反馈对话框
      dialogFormVisible: false,
      form: {
        type: '1',
        desc: '',
        name: '',
        phone: ''
      },
      rules: {
        type: [
          { required: true, message: '需求类型不能为空' }
        ],
        desc: [
          { required: true, message: '需求描述不能为空' }
        ],
        name: [
          { required: true, message: '称呼不能为空' }
        ],
        phone: [
          { required: true, message: '联系方式不能为空' }
        ]
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    this.$nextTick(() => {
      this.getAllDataPackages('全部')
      this.getAllTypes()
    })
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color: #F0F2F5;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.paging()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.paging()
    },
    // 分页方法
    paging() {
      this.tableData = this.dataPackages.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    selectItem(index) {
      this.isSelect = index
    },
    unselectItem() {
      this.isSelect = -1
    },
    editApplication(id) {
      const routeUrl = this.$router.resolve({
        path: '/dataproduct',
        query: {
          id: id
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    submitForm(formName) {
      this.dialogFormVisible = false
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          this.resetForm(formName)
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 获取所有数据包信息接口
    getAllDataPackages(type) {
      // 重置当前页
      this.currentPage = 1
      if (type === '全部') {
        const rLoading = this.openLoading()
        getAllDataPackages().then(res => {
          this.dataPackages = res.rows
          this.total = res.rows.length
          this.paging()
          rLoading.close()
        })
      } else if (type === '需求反馈') {
        this.dialogFormVisible = true
      } else {
        const params = {
          type: type,
          pageNum: '0',
          rowsNum: '500'
        }
        const rLoading = this.openLoading()
        getDataPackagesByType(params).then(res => {
          this.dataPackages = res.rows
          this.total = res.rows.length
          this.paging()
          rLoading.close()
        })
      }
    },
    getDataPackagesByCondition() {
      const rLoading = this.openLoading()
      // 重置当前页
      this.currentPage = 1
      const params = {
        condition: this.input,
        pageNum: '0',
        rowsNum: '500'
      }
      getDataPackagesByCondition(params).then(res => {
        this.dataPackages = res.rows
        this.total = res.rows.length
        this.paging()
        rLoading.close()
      })
    },
    // 获取所有数据包类型
    getAllTypes() {
      getAllTypes().then(res => {
        let all = [
          {
            type: '全部',
            cnt: 0
          }
        ]
        let feedback = {
          type: '需求反馈',
          cnt: 0
        }
        this.dataTypes = all.concat(res)
        this.dataTypes.push(feedback)
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
      .search-wrapper {
        width: 800px;
        margin-top: 62px;
      }
    }
    .main-two-content {
      flex: 1 1 auto;
      background: #F0F2F5;
      .data-type-wrapper {
        position: relative;
        top: -115px;
        padding-top: 6px;
        flex: 1 1 auto;
        margin: 0 auto;
        width: 1200px;
        background-color: #FFFFFF;
        border-radius: 12px;
        .data-headline {
          margin-left: 24px;
        }
        .data-type-btn {
          display: flex;
          margin-top: 20px;
          margin-left: 24px;
        }
        .data-type-content-wrapper {
          position: relative;
          left: 0px;
          top: 0px;
          width: 100%;
          margin-top: 41px;
          background: #fff;
          border-radius: 12px;
          .data-type-content {
            display: flex;
            flex-wrap: wrap;
            padding-left: 8px;
            background: #fff;
            border-radius: 12px;
            .content-item {
              flex: none;
              width: 218px;
              margin-left: 16px;
              margin-bottom: 28px;
              &.content-item-add {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                height: 184px;
                width: 258px;
                font-size: 14px;
                border: 1px solid #00baff;
                color: #8eeeff;
                background-image: linear-gradient(-90deg,rgba(0,222,255,.39),rgba(0,174,255,.19));
              }
              .content-info {
                position: relative;
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 12px;
                background: #F2F6FC;
                border-radius: 12px;
                &:hover {
                  background: #4C7DFE;
                  border-radius: 12px;
                }
                .template-imge {
                  width: 141px;
                  height: 141px;
                  /*&.default {*/
                  /*  filter: grayscale(1);*/
                  /*  opacity: 0.07;*/
                  /*}*/
                }
                .content-menu {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: flex-end;
                  justify-content: center;
                  /*background-color: rgba(29,38,46,.8);*/
                  .content-btn {
                    display: inline-block;
                    vertical-align: bottom;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 30px;
                    margin-bottom: 10px;
                    box-sizing: border-box;
                    outline: 0;
                    text-align: center;
                    font-size: 14px;
                    font-weight: bold;
                    background: #00bdff;
                    color: #fff;
                    border: none;
                    border-radius: 3px;
                    transition: .5s ease;
                    cursor: pointer;
                  }
                }
              }
              .content-main {
                display: flex;
                align-items: center;
                justify-content: center;
                .content-name {
                  font-family: PingFangSC-Medium;
                  font-size: 14px;
                  font-weight: bold;
                  color: #303133;
                  letter-spacing: 0;
                  text-align: center;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
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

  /**修改搜索框样式**/
  .search-wrapper /deep/ .el-input__inner {
    height: 45px;
    line-height: 45px;
    padding-left: 0px;
    border: 0px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .search-wrapper /deep/ .el-input-group__prepend {
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 10px;
    background: #FFFFFF;
    border-radius: 12px 0px 0px 12px;
    border: 0px;
  }
</style>
