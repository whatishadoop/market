<template>
  <div>
    <el-container class="container">
      <el-header height="58px" class="header-wapper">
        <div class="logo-wrapper">
          <img :src="backgroundImage" class="image-size">
          <h4 style="font-size: 12px;color: #FFFFFF;font-family: PingFang SC;margin-top: 26px;margin-left: 12px">轻量化数据中台生态引领者</h4>
        </div>
        <div class="menu-wrapper">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#4C7DFE"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="1"><span style="font-size: 16px;font-size: 16px;font-family: Microsoft YaHei;font-weight: bold;line-height: 20px;">数据集市</span></el-menu-item>
            <el-menu-item index="2"><span style="font-size: 16px;font-size: 16px;font-family: Microsoft YaHei;font-weight: bold;line-height: 20px;">能力集市</span></el-menu-item>
          </el-menu>
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
import backgroundImage from '@/assets/hairuisi@1x.png'
const localStorage = window.localStorage
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
  created() {
    this.init()
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key == null) {
        return
      }
      let pathName = ''
      if (key === '1') {
        pathName = 'datamarket'
      } else if (key === '2') {
        pathName = 'abilitymarket'
      }
      localStorage.setItem('pathName', pathName)
      localStorage.setItem('keepAlive', key)
      this.$router.push({ name: pathName })
    },
    init() {
      this.activeIndex = localStorage.getItem('keepAlive')
      if (this.activeIndex === null) {
        this.activeIndex = '1'
      }
      this.pathName = localStorage.getItem('pathName')
      if (this.pathName === null) {
        this.pathName = 'datamarket'
      }
    }
  }
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
          height: 23px;
          width: 88px;
          margin-left: 40.5px;
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
