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
            <div class="product-name">手机号码归属地-基础版</div>
            <div class="product-info">手机号码段(前7位)，对应的省市及运营商信息。</div>
            <div class="product-format">
              <span style="opacity: 0.65">数据格式：</span><span> xlsx</span>
            </div>
            <div class="product-action">
              <template v-for="index in 2">
                <el-button size="medium" round style="background: #FFFFFF;border-radius: 20px;border: 1px solid #DCDFE6;" :key="index">小型按钮</el-button>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="main-two-content">
      </div>
      <div class="data-type-wrapper">
        <div class="data-exp-wrapper">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据示例 / Example</h3>
          <img :src="dataexpImage" class="image-size">
        </div>
        <div class="data-list-wrapper">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据列表 / List</h3>
          <div class="data-action">
            <template v-for="index in 2">
              <el-button size="small" round style="background: #FFFFFF;border-radius: 20px;border: 1px solid #DCDFE6;" :key="index">小型按钮</el-button>
            </template>
          </div>
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
                  label="发布时间">
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
                    <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import dataexpImage from '@/assets/dataexp.png'
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
      dataTypes: [],
      dataexpImage: dataexpImage,
      tableData: [
        {
          id: 10010011,
          parentId: 1,
          name: '北京POI数据信息-01',
          amount: '53264',
          format: 'TXT',
          sort: 1,
          size: '53.12MB',
          url: '/dataset/typename/poi/北京POI-01.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-01.jpg',
          detail: '北京POI数据信息-01',
          remark: '北京POI数据信息-01',
          downloadCnt: 0,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        },
        {
          id: 10010012,
          parentId: 1,
          name: '北京POI数据信息-02',
          amount: '1000',
          format: 'TXT',
          sort: 1,
          size: '1.12MB',
          url: '/dataset/typename/poi/北京POI-02.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
          detail: '北京POI数据信息-02',
          remark: '北京POI数据信息-02',
          downloadCnt: 12,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        },
        {
          id: 10010012,
          parentId: 1,
          name: '北京POI数据信息-02',
          amount: '1000',
          format: 'TXT',
          sort: 1,
          size: '1.12MB',
          url: '/dataset/typename/poi/北京POI-02.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
          detail: '北京POI数据信息-02',
          remark: '北京POI数据信息-02',
          downloadCnt: 12,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        },
        {
          id: 10010012,
          parentId: 1,
          name: '北京POI数据信息-02',
          amount: '1000',
          format: 'TXT',
          sort: 1,
          size: '1.12MB',
          url: '/dataset/typename/poi/北京POI-02.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
          detail: '北京POI数据信息-02',
          remark: '北京POI数据信息-02',
          downloadCnt: 12,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        },
        {
          id: 10010012,
          parentId: 1,
          name: '北京POI数据信息-02',
          amount: '1000',
          format: 'TXT',
          sort: 1,
          size: '1.12MB',
          url: '/dataset/typename/poi/北京POI-02.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
          detail: '北京POI数据信息-02',
          remark: '北京POI数据信息-02',
          downloadCnt: 12,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        },
        {
          id: 10010012,
          parentId: 1,
          name: '北京POI数据信息-02',
          amount: '1000',
          format: 'TXT',
          sort: 1,
          size: '1.12MB',
          url: '/dataset/typename/poi/北京POI-02.zip',
          imageUrl: '/dataset/typename/poi/poi-exapmle-02.jpg',
          detail: '北京POI数据信息-02',
          remark: '北京POI数据信息-02',
          downloadCnt: 12,
          createPerson: 'admin',
          updatePerson: 'rhino',
          createTime: 1606978445000,
          updateTime: 1606978448000
        }
      ]
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
    handleClick(row) {
      console.log(row)
    },
    selectItem(index) {
      this.isSelect = index
    },
    unselectItem() {
      this.isSelect = -1
    },
    editApplication() {
      const routeUrl = this.$router.resolve({
        path: '/dataproduct',
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
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 28px;
          }
          .product-info {
            margin-top: 4px;
            opacity: 0.65;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 26px;
          }
          .product-format {
            margin-top: 16px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 26px;
          }
          .product-action {
            margin-top: 18px;
          }
        }
      }
    }
    .main-two-content {
      height: 745px;
      background: #F0F2F5;
    }
    .data-type-wrapper {
      position: absolute;
      left:0; right:0; top:327px; bottom:0;
      margin: 0 auto;
      width: 1200px;
      height: 860px;
      background-color: #FFFFFF;
      border-radius: 12px;
      .data-exp-wrapper {
        margin-top: 32px;
        margin-left: 32px;
        .image-size {
          height: 251px;
          width: 100%;
          margin-left: -14px;
          object-fit: cover;
        }
      }
      .data-list-wrapper {
        width: 100%;
        margin-top: 65px;
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
