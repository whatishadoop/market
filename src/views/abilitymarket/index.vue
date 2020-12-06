<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-one-content">
        <div class="search-wrapper">
          <el-input
            placeholder="能力数据"
            prefix-icon="el-icon-search"
            v-model="input"
          >
          </el-input>
        </div>
      </div>
      <div class="main-two-content">
      </div>
      <div class="data-type-wrapper">
        <div class="data-headline">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据块分类</h3>
        </div>
        <div class="data-type-btn">
          <template v-for="index in 8">
            <el-button size="small" round style="background: #F2F6FC;border-radius: 18px;border: 1px solid #DCDFE6;" :key="index">小型按钮</el-button>
          </template>
        </div>
        <div class="data-type-content-wrapper">
          <div class="data-type-content">
            <div v-for="(item , index) in dataPackages" :key="index" class="content-item" @mouseover="selectItem(index)" @mouseout="unselectItem(index)">
              <div class="content-info">
                <svg-icon icon-class="icon_2_off" style="height: 141px;width: 141px;"/>
                <div v-show="isSelect === index" class="content-menu">
                  <div class="content-btn" @click="editApplication">下载数据</div>
                </div>
              </div>
              <div class="content-main">
                <span class="content-name">{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page">
          <el-pagination
            background
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40, 50, 100]"
            :page-size="10"
            :total="1000"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getAllDataPackages } from '@/api/datamarket/dataset'
export default {
  data() {
    return {
      currentPage: 1,
      isSelect: -1,
      input: '',
      // 所有数据包信息
      dataPackages: [],
      // 所有数据包类型信息
      dataTypes: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.getAllDataPackages()
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    selectItem(index) {
      this.isSelect = index
    },
    unselectItem() {
      this.isSelect = -1
    },
    editApplication() {
      const routeUrl = this.$router.resolve({
        path: '/about',
        query: {
          id: 1,
          name: '可视化模板'
        }
      })
      window.open(routeUrl.href, '_blank')
    },
    // 获取所有数据包信息接口
    getAllDataPackages() {
      /*
      const sort = 'id,desc'
      const params = { sort: sort }
      if (this.deptName) { params['name'] = this.deptName }
      getDepts(params).then(res => {
        this.deptDatas = res.content
      })
       */
      getAllDataPackages().then(res => {
        this.dataPackages = res
      })
    }
  }
}
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-wapper {
    width: 100%;
    height: 100%;
    .main-one-content {
      height: 262px;
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
      height: 600px;
      background: #F0F2F5;
    }
    .data-type-wrapper {
      position: absolute;
      left:0; right:0; top:200px; bottom:0;
      margin: 0 auto;
      width: 1200px;
      height: 700px;
      background-color: #FFFFFF;
      border-radius: 12px;
      .data-headline {
        margin-top: 24px;
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
      }
      .page {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: -15px;
        height: 40px;
      }
    }
  }

  /**修改搜索框样式**/
  .search-wrapper /deep/ .el-input__inner {
    border-radius: 12px;
    height: 45px;
    line-height: 45px;
  }
</style>
