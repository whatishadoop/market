<template>
    <div>
      <div class="default-nodata-wrapper">
        <img :src="backgroundImage" class="image-size">
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import backgroundImage from '@/assets/shuju.png'
export default {
  data() {
    return {
      backgroundImage: backgroundImage
    }
  }
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.default-nodata-wrapper {
  height: calc(100vh - 231px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-size {

  }
}
</style>
