<template>
    <div>
      <div class="main-wapper">
        <div class="action-type">
          <el-checkbox v-model="checked" style="margin-right: 20px;">全部</el-checkbox>
          <el-button size="mini" icon="el-icon-download">导出</el-button>
          <el-button size="mini" icon="el-icon-bell">预警</el-button>
          <el-button size="mini" icon="el-icon-star-off">收藏</el-button>
          <el-button size="mini" icon="el-icon-delete">忽略</el-button>
          <el-button size="mini" icon="el-icon-edit">修改倾向性</el-button>
        </div>
        <div class="detail-infos-wrapper">
          <div v-for="o in 4" class="single-detail-info">
            <div class="headline">
              <el-checkbox v-model="checked" style="margin-right: 20px;"/>
              <el-tag size="mini">中性</el-tag>
              <div class="text-wrapper">
                <div class="text">
                  <span class="name">对目前行情把握不准确</span>
                  <span class="num">相似舆情：2条</span>
                </div>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="one-content">
                这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很这里说新闻信息的摘要，可能很长很长很很长很很长很很长很很长很很长很很长很很长很很长很很长很很长很很长很很长很很长很，最多2行以省略号展示。。。。。不超过120字
              </div>
              <div class="two-content">
                <div class="part-one">
                  <svg-icon icon-class="标签" style="height: 20px;width: 20px;"/>
                  <el-tag size="small">重大事件1</el-tag>
                  <el-tag size="small">重大事件2</el-tag>
                  <el-tag size="small">重大事件3</el-tag>
                </div>
                <div class="part-two">
                  <svg-icon icon-class="关键字" style="height: 20px;width: 20px;"/>
                  <el-tag size="small">关键字1</el-tag>
                  <el-tag size="small">关键字2</el-tag>
                  <el-tag size="small">关键字3</el-tag>
                </div>
              </div>
              <div class="three-content">
                <div class="part-one">
                  <span>新浪微博</span>   <span>老黄看市</span>    <span>2021-01-07 12:00:00</span>
                </div>
                <div class="part-two">
                  <el-button size="mini" icon="el-icon-download">导出</el-button>
                  <el-button size="mini" icon="el-icon-bell">预警</el-button>
                  <el-button size="mini" icon="el-icon-star-off">收藏</el-button>
                  <el-button size="mini" icon="el-icon-delete">忽略</el-button>
                  <el-button size="mini" icon="el-icon-edit">修改倾向性</el-button>
                </div>
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
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      date: '',
      activeName: 'first',
      checked: false,
      total: 0,
      currentPage: 1,
      pageSize: 20
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.main-wapper {
  height: 100%;
  width: 100%;
  .action-type {

  }
  .detail-infos-wrapper {
    width: 100%;
    margin-top: 30px;
    .single-detail-info {
      width: 100%;
      .headline {
        width: 100%;
        .text-wrapper {
          display: inline-block;
          margin-left: 10px;
          width: calc(100% - 100px);
          .text {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name {
              width: 200px;
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: rgba(0,0,0,0.65);
              text-align: left;
              line-height: 22px;
            }
            .num {
              flex: 1;
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: #5075E7;
              text-align: right;
              line-height: 22px;
            }
          }
        }
      }
      .content-wrapper {
        width: 100%;
        padding: 0px 30px 0px 30px;
        .one-content {
          width: calc(100% - 60px);
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(0,0,0,0.45);
          text-align: left;
          line-height: 22px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .two-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .part-one {
            flex: 1;
          }
          .part-two {
            flex: 1;
          }
        }
        .three-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .part-one {
            flex: 1;
          }
          .part-two {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
