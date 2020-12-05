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
            text-color="#ffd04b"
            active-text-color="#fff"
          >
            <el-menu-item index="1"><span style="font-size: 16px;font-size: 16px;font-family: Microsoft YaHei;font-weight: bold;line-height: 20px;">数据集市</span></el-menu-item>
            <el-menu-item index="2">能力集市</el-menu-item>
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
import backgroundImage from '@/icons/hairuisi@1x.png'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      activeIndex: '1',
      backgroundImage: backgroundImage
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key == null) {
        return
      }
      let pathName = ''
      if (key === '1') {
        pathName = 'datamarket'
      } else if (key === '2') {
        pathName = 'abilitymarket'
      }

      this.$router.push({ name: pathName })
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
</style>
