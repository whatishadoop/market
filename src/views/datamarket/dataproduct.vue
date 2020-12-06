<template>
  <div>
    <!--搜索与分类内容区域-->
    <div class="main-wapper">
      <div class="main-one-content">
        <div class="search-wrapper">
        </div>
      </div>
      <div class="main-two-content">
      </div>
      <div class="data-type-wrapper">
        <div class="data-headline">
          <h3 sytle="font-family: PingFangSC-Medium;font-size: 20px;color: #333333;letter-spacing: 0;line-height: 28px;">数据示例 / Example</h3>
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
      height: 742px;
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
      .data-headline {
        margin-top: 24px;
        margin-left: 24px;
      }
    }
  }

</style>
