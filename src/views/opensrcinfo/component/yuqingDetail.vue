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
            <div v-for="(item, index) in detailData.rows" class="single-detail-info" :key="item.id">
              <div class="headline">
                <el-checkbox v-model="checked" style="margin-right: 20px;"/>
                <el-tag size="mini">{{item.text_sentiment}}</el-tag>
                <div class="text-wrapper">
                  <div class="text">
                    <span class="name">{{item.title}}</span>
                    <span class="num">相似舆情：{{item.sim_text_count}}条</span>
                  </div>
                </div>
              </div>
              <div class="content-wrapper">
                <div class="one-content">
                  {{item.content}}
                </div>
                <div class="two-content">
                  <div class="part-one">
                    <svg-icon icon-class="标签" style="height: 20px;width: 20px;margin-right: 10px;"/>
                    <el-tag v-for="(event, index) in item.important_events" size="small" style="margin-right: 5px;" :key="index">{{event}}</el-tag>
                  </div>
                  <div class="part-two">
                    <svg-icon icon-class="关键字" style="height: 20px;width: 20px;margin-right: 10px;"/>
                    <el-tag v-for="(keyword, index) in item.match_key_words" size="small" style="margin-right: 5px;" type="success" plain :key="index">{{keyword}}</el-tag>
                  </div>
                </div>
                <div class="three-content">
                  <div class="part-one">
                    <span class="text">{{item.website_name}}</span><span class="text" style="margin-right: 43px;">{{item.publisher}}</span><span class="text" style="width: 160px;">{{item.date}}</span>
                  </div>
                  <div class="part-two">
                    <div class="text">预警 <span
                      style="color: #D8D8D8;">|</span></div>
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
              layout="total, prev, pager, next, jumper"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    detailData: {
      type: Object,
      default: () => ({}) // 若page没有传递给子组件，则使用默认值
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      date: '',
      activeName: 'first',
      checked: false,
      total: this.detailData.filter_total,
      currentPage: this.page,
      pageSize: 20
    }
  },
  methods: {
    refreshPage(total) {
      this.total = total
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      debugger
      console.log(`当前页: ${val}`)
      this.currentPage = val
      // 向父组件传值
      this.$emit('e-page', this.currentPage) // 使用$emit()触发一个事件，发送数据，事件名自定义
      // 发送查询数据conditions
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
              width: 600px;
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: rgba(0,0,0,0.65);
              text-align: left;
              line-height: 22px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
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
          height: 44px;
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
            width: 500px;
            .text {
              width: 70px;
              display: inline-block;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: rgba(0,0,0,0.45);
              text-align: left;
              line-height: 22px;
              margin-right: 21px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
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
