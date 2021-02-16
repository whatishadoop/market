<template>
    <div>
      <div class="main-wapper">
        <div class="left-wrapper">
          left
        </div>
        <div class="right-wrapper">
          right
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
.main-wapper {
  width: 100%;
  height: 100%;
  display: flex;
  .left-wrapper {
    height: calc(100vh - 248px);
    margin-left: 20px;
    margin-bottom: 20px;
    flex: 1 0 331px;
    background: #FFFFFF;
    border: 1px solid #E7E8F2;
    box-shadow: 0 2px 10px 0 rgba(56,56,56,0.12);
    border-radius: 2px;
    border-radius: 2px;
  }
  .right-wrapper {
    height: calc(100vh - 248px);
    width: 100%;
    margin-left: 13px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border: 1px solid #E7E8F2;
    box-shadow: 0 2px 10px 0 rgba(56,56,56,0.12);
    border-radius: 2px;
    border-radius: 2px;
  }
}
</style>
