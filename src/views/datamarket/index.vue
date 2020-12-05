<template>
    <div>
      <!--搜索与分类内容区域-->
      <div class="main-wapper">
        <div class="main-one-content">
          <div class="search-wrapper">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input2"
              style="border-radius: 12px;background: #FFFFFF;"
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
               <div v-for="index in 12" :key="index" class="content-item">
                   <div class="content-info">
                      <img :src="templateImage" class="template-imge">
                   </div>
                   <div class="content-main">
                     <span class="content-name">态势感知系统</span>
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
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      input2: '',
      templateImage: require('../sources/icon_1_off@1x.png')
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
      height: 850px;
      background: #F0F2F5;
    }
    .data-type-wrapper {
      position: absolute;
      left:0; right:0; top:200px; bottom:0;
      margin:auto;
      width: 1200px;
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
            }
            .content-main {
              display: flex;
              align-items: center;
              justify-content: center;
              .content-name {
                font-family: PingFangSC-Medium;
                font-size: 14px;
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
          height: 40px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
</style>
