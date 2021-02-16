<template>
  <div>
    <el-container class="container">
      <el-header height="58px" class="header-wapper">
        <div class="logo-wrapper">
          <img :src="backgroundImage" class="image-size">
          <span style="font-size: 20px;color: #FFFFFF;font-family: PingFang SC;margin-left: 12px;line-height: 28px">企业开源商情监测管家</span>
        </div>
      </el-header>
      <el-main style="padding: 0px;">
        <!--根据顶部菜单选项切换不同内容-->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import backgroundImage from '@/assets/ruiqi@2x.png'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      activeIndex: '1',
      backgroundImage: backgroundImage,
      pathName: 'datamarket'
    }
  },
  methods: {
  }
  // 监听,当路由发生变化的时候执行
  // watch: {
  //   $route(to, from) {
  //     console.log(to.path)
  //     if (to.path === 'datamarket') {
  //       this.activeIndex = '1'
  //     } else {
  //       this.activeIndex = '2'
  //     }
  //   }
  // }
}
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .container {
    .header-wapper {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0px;
      background-color: #4C7DFE;
      .logo-wrapper {
        width: 290px;
        height: 100%;
        display: flex;
        align-items: center;
        .image-size {
          height: 28px;
          width: 40px;
          margin-left: 20px;
          object-fit: contain;
        }
      }
      .menu-wrapper {
        margin-left: 200px;
        align-items: center;
      }
    }
  }

  /*修改菜单样式*/
  .menu-wrapper /deep/ .el-menu.el-menu--horizontal {
    border-bottom: 0px;
  }
  .menu-wrapper /deep/ .el-menu-item {
    padding: 0px;
    margin-right: 20px;
  }
  .menu-wrapper /deep/ .el-menu-item is-active {
    background-color: #4C7DFE !important;
  }
  .menu-wrapper /deep/ .el-menu-item:hover {
    background-color: #4C7DFE !important;
  }
  .menu-wrapper /deep/ .el-menu-item:focus, .el-menu-item:hover {
    background: transparent;
  }
</style>
