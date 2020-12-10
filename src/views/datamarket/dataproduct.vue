<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-one-content">
        <div class="product-wrapper">
          <div class="product-logo">
            <svg-icon icon-class="icon_2_off" style="height: 140px;width: 140px;"/>
          </div>
          <div class="product-detail-wrapper">
            <div class="product-name" v-cloak>{{dataPackageBase.name}}</div>
            <div class="product-info">{{dataPackageBase.detail}}</div>
            <div class="product-format">
              <span style="opacity: 0.65">数据格式：</span><span> {{dataPackageBase.format}}</span>
            </div>
            <div class="product-action">
              <el-button size="medium" round style="background: #fff;color: #5587FF;font-size: 16px;font-weight: bold;">立即下载</el-button>
              <!--<el-button size="medium" round icon="el-icon-star-off" style="background: transparent;border: 1px solid #fff;color: #fff;font-size: 16px;font-weight: bold;">收藏<span style="color: transparent;">..</span></el-button>-->
            </div>
          </div>
        </div>
      </div>
      <div class="main-two-content">
      </div>
      <div class="data-type-wrapper">
        <div class="data-exp-wrapper">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据示例 / Example</h3>
          <img :src="dataPackageBase.imageUrl" class="image-size">
        </div>
        <div class="data-list-wrapper">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据列表 / List</h3>
          <!--<div class="data-action">-->
            <!--<el-button size="medium" round style="background: #FFFFFF;border-radius: 20px;border: 1px solid #DCDFE6;" :key="index">全部</el-button>-->
            <!--<el-button size="medium" round style="background: #FFFFFF;border-radius: 20px;border: 1px solid #DCDFE6;" :key="index">{{dataPackageBase.format}}</el-button>-->
          <!--</div>-->
          <div class="data-list">
            <template>
              <el-table
                :data="tableData"
                height="310"
                stripe
                fit
                style="width: 1136px;margin-top: 20px">
                <el-table-column
                  prop="updateTime"
                  label="发布时间"
                  :formatter="formatter"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="数据包名称">
                </el-table-column>
                <el-table-column
                  prop="format"
                  label="数据格式">
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="数据量">
                </el-table-column>
                <el-table-column
                  prop="size"
                  label="数据大小">
                </el-table-column>
                <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                    <el-button @click="download(scope.row)" type="text" size="small">下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
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
  </div>
</template>

<script type="text/ecmascript-6">
import dataexpImage from '@/assets/dataexp.png'
import { getDataPackageInfoById } from '@/api/datamarket/dataset'
import { formatDate } from '@/utils/date'
export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      dataPackageBase: {},
      // 所有数据包信息
      dataPackageDetailList: [],
      // 一页数据
      tableData: [],
      // 所有数据包类型信息
      dataTypes: [],
      dataexpImage: dataexpImage,
      imageUrl: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this.getDataPackageInfoById(this.$route.query.id)
    })
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
      this.tableData = this.dataPackageDetailList.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    // 下载文件
    download(row) {
      window.location.href = row.url
    },
    formatter(row, column) {
      return formatDate(new Date(row.updateTime), 'yyyy-MM-dd hh:mm:ss')
    },
    // 根据数据包父ID获取数据包的所有信息，包括子数据包信息
    getDataPackageInfoById(id) {
      const rLoading = this.openLoading()
      const params = {
        id: id
      }
      getDataPackageInfoById(params).then(res => {
        this.dataPackageBase = res.dataPackageBase
        this.dataPackageDetailList = res.dataPackageDetailList
        this.total = res.dataPackageDetailList.length
        this.paging()
        rLoading.close()
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
      height: 417px;
      padding-top: 60px;
      background-color: #4C7DFE;
      box-sizing: border-box;
      border-radius: 0 0 12px 12px;
      .product-wrapper {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .product-logo {
          width: 185px;
          height: 170px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #F2F6FC;
          border-radius: 12px;
        }
        .product-detail-wrapper {
          margin-left: 42px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .product-name {
            height: 28px;
            line-height: 28px;
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
          }
          .product-info {
            height: 26px;
            line-height: 26px;
            margin-top: 4px;
            opacity: 0.65;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
          }
          .product-format {
            width: 90px;
            height: 26px;
            margin-top: 16px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 26px;
          }
          .product-action {
            margin-top: 18px;
            .download {
              font-family: PingFangSC-Regular;
            }
            .collect {
              font-family: PingFangSC-Regular;
            }
          }
        }
      }
    }
    .main-two-content {
      height: 705px;
      background: #F0F2F5;
    }
    .data-type-wrapper {
      position: absolute;
      left:0; right:0; top:327px; bottom:0;
      margin: 0 auto;
      width: 1200px;
      height: 820px;
      background-color: #FFFFFF;
      border-radius: 12px;
      .data-exp-wrapper {
        margin-top: 32px;
        margin-left: 32px;
        .image-size {
          height: 300px;
          width: 1136px;
          object-fit: contain;
        }
      }
      .data-list-wrapper {
        width: 100%;
        margin-top: 50px;
        margin-left: 32px;
        .data-list {
           width: 100%;
          .page {
            float: right;
            margin-top: 18px;
            margin-right: 55px;
          }
        }
      }
    }
  }

</style>
