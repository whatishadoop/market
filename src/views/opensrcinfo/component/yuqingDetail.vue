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
                    <svg-icon icon-class="标签" style="height: 20px;width: 20px;margin-right: 10px;"/>
                    <el-tag size="small" style="margin-right: 5px;">重大事件1</el-tag>
                    <el-tag size="small" style="margin-right: 5px;">重大事件2</el-tag>
                    <el-tag size="small" style="margin-right: 5px;">重大事件3</el-tag>
                  </div>
                  <div class="part-two">
                    <svg-icon icon-class="关键字" style="height: 20px;width: 20px;margin-right: 10px;"/>
                    <el-tag size="small" style="margin-right: 5px;" type="success" plain>关键字1</el-tag>
                    <el-tag size="small" style="margin-right: 5px;" type="success" plain>关键字2</el-tag>
                    <el-tag size="small" style="margin-right: 5px;" type="success" plain>关键字3</el-tag>
                  </div>
                </div>
                <div class="three-content">
                  <div class="part-one">
                    <span class="text">新浪微博</span><span class="text" style="margin-right: 43px;">老黄看市</span><span class="text">2021-01-07 12:00:00</span>
                  </div>
                  <div class="part-two">
                    <div class="text">导出 <span style="color: #D8D8D8;">|</span></div>
                    <div class="text">预警 <span style="color: #D8D8D8;">|</span></div>
                    <div class="text">收藏 <span style="color: #D8D8D8;">|</span></div>
                    <div class="text">忽略 <span style="color: #D8D8D8;">|</span></div>
                    <div class="text">修改倾向性</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="page-wrapper">
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
      total: 200,
      currentPage: 5,
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
    height: 100%;
    width: 100%;
  }
  .detail-infos-wrapper {
    width: 100%;
    margin-top: 15px;
    .single-detail-info {
      width: 100%;
      border-bottom: 1px solid #e4e4e4;
      padding-top: 16px;
      padding-bottom: 12px;
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
          margin-top: 10px;
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
          margin-top: 10px;
          width: 660px;
          .part-one {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .part-two {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: 54px;
          }
        }
        .three-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          .part-one {
            width: 370px;
            .text {
              display: inline-block;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: rgba(0,0,0,0.45);
              text-align: left;
              line-height: 22px;
              margin-right: 33px;
              &:last-child {
                margin: 0px;
              }
            }
          }
          .part-two {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            margin-right: 30px;
            .text {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #1890FF;
              line-height: 22px;
              cursor: pointer;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .page-wrapper {
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 50px;
    .page {
      position: absolute;
      right: 0px;
      top: 10px;
    }
  }
}
</style>
