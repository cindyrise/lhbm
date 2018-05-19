<template>
   <div>
     <el-main class="bat-main">
       <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
      <el-row :gutter="20">
            <el-col :span="6"  v-for="item in 8" :key="item">
                 <a class="item">
                   <i class="iconfont icon-hangban"></i>
                   <div class="icon-title" >航班</div>
                 </a>
            </el-col>
      </el-row>
    </el-main>
    <el-footer>
       <el-row :gutter="10">
            <el-col :span="8"  v-for="item in 3" :key="item">
                 <a class="foot-item">
                    航班
                 </a>
            </el-col>
      </el-row>
    </el-footer>
   </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your HOME !!!"
    };
  }
};
</script>

<style lang="scss">
  .bat-main{
    padding:0px;
    .el-col-6{
    margin-top: 10px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .item{
       display: block;
       border:1px solid #eee;
       height:80px;
       text-align: center;
         .iconfont{
            line-height: 40px;
            font-size:20px;
       }
       .icon-hangban{
         color:#1296db;
       }
       .icon-title{
         font-size:22px;
       }
  }
  .el-footer{
    padding: 0px 10px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height:40px !important;
  }
 .foot-item{
   background:#1296db;
   height:35px;
   width: 100%;
   line-height:35px;
   display: inline-block;
   color:white;
   text-align: center;
}
</style>
