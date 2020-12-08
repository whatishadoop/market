<template>
  <div>
    <h1>正在开发....</h1>
    <!--<div class="main-wapper">-->
      <!--<div class="main-one-content">-->
        <!--1111-->
      <!--</div>-->
      <!--<div class="main-two-content">-->
        <!--2222-->
        <!--<div class="data-type-wrapper">-->
          <!--3333-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  .main-wapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main-one-content {
      flex: 0 1 300px;
      background-color: red;
      border-radius: 0 0 12px 12px;
    }
    .main-two-content {
      flex: 1 1 auto;
      background: blue;
      padding-bottom: 20px;
      .data-type-wrapper {
        position: relative;
        top: -100px;
        flex: 1 1 auto;
        height: 1600px;
        margin-left: 100px;
        margin-right: 100px;
        background: green;
      }
    }
  }
</style>
