<template>
  <el-container>
  <el-header>
    <div class="logo left"> <img src="../assets/imgs/logo.png"></div>
    <div class="right">  <i class="iconfont icon-person"></i></div>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="2">
         <i class="el-icon-menu"></i>
         <span slot="title">广告展示</span>
        </el-menu-item>
        <el-menu-item index="3">
         <i class="el-icon-document"></i>
         <span slot="title">图标展示</span>
        </el-menu-item>
        <el-menu-item index="4">
         <i class="el-icon-setting"></i>
         <span slot="title">网址暂时</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main><div class="back"><router-view/></div></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="scss">
.el-header {
  background-color: #001529;
  color: #333;
  //text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  //text-align: center;
  line-height: 60px;
}
.logo {
  width: 160px;
  line-height: 60px;
  img {
    height: 45px;
    margin-top: 5px;
  }
}
 .icon-person{
   color:#1296db;
   font-size:36px;
 }

.el-aside {
  background-color: #d3dce6;
  color: #333;
  min-height: 800px;
  .el-menu-vertical{
     background-color: #d3dce6;
  }
}
.right{
  float:right;
}
.left{
  float:left;
}
.clearfix{
  clear: both;
}
.el-main {
  background-color: #eee;
  color: #333;
  //text-align: center;
  min-height: 800px;
  .back{
    .page-title{
      background: #fff;
      height: 40px;
      padding:0 20px;
      font-size: 14px;
      line-height: 40px;
      border-bottom:1px solid #eee;
    }
    .page-content{
      padding:20px;
      background: #fff;
      min-height: 600px;
    }
  }
}
.el-dialog{
  .el-dialog__header{
    height:40px;
    border-bottom: 1px solid #ddd;
    padding:0 15px !important;
    line-height: 40px;
    .el-dialog__headerbtn{
      top:5px;
      right:10px;
      font-size:20px;
    }
  }
  .el-dialog__footer{
    padding: 0 15px 10px;
  }
}
</style>
