<template>
   <div>
     <el-main class="bat-main">
       <el-carousel height="150px" :autoplay="false">
            <el-carousel-item v-for="item in adList" :key="item.id">
             <img :src="`${server_url}/${item.img_url}`">
            </el-carousel-item>
        </el-carousel>
      <el-row :gutter="20">
            <el-col :span="6"  v-for="item in iconList" :key="item.id">
                 <a class="item" v-if="item.type=='font'" :href="item.url">
                   <i :style="{color:`${item.color}`}" :class="`iconfont icon-${item.class_name}`"></i>
                   <div class="icon-title">{{item.name}}</div>
                 </a>
                  <a class="item" v-if="item.type!='font'" :href="item.url">
                   <img :src="`${server_url}/${item.icon_url}`"/>
                   <div class="icon-title">{{item.name}}</div>
                 </a>
            </el-col>
      </el-row>
    </el-main>
    <el-footer>
       <el-row :gutter="10">
            <el-col :span="24/navList.length"  v-for="item in navList" :key="item.value">
                 <span class="foot-item"  @click="getIconList(item.value)">
                    {{item.label}}
                 </span>
            </el-col>
      </el-row>
    </el-footer>
   </div>
</template>
<script>
import api from "@/api/front.js";
import localDb from '@/utils/localDb'
import config from '@/contants/config'
export default {
  name: "Home",
  data() {
    return {
      adList: [],
      navList: [],
      iconList: [],
      city_code:'',
      server_url:config.server_url
    };
  },
  mounted() {
    let city_code =localDb.get("cityInfo").code||'';
    this.city_code=city_code;
    api.getAdList({ city_code }).then(ret => {
      this.adList = ret.data;
    });
    api.getDictByCode({ code: "0000" }).then(ret => {
      this.navList = ret.data || [];
      this.getIconList(this.navList[0].value);
    });
  },
  methods: {
    getIconList(dict_code) {
     let params={dict_code,city_code:this.city_code};
      api.getIconList(params).then(ret => {
        this.iconList = ret.data;
      });
    }
  }
};
</script>

<style lang="scss">
.bat-main {
  padding: 0px;
  .el-col-6 {
    margin-top: 10px;
  }
  .el-row {
    margin: 0 -5px 60px !important;
    overflow-y: scroll;
    max-height: 540px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  img {
    height: 160px;
    width: 100%;
  }
}
.item {
  display: block;
  border: 1px solid #eee;
  height: 68px;
  text-align: center;
  padding-top: 12px;
  text-decoration: none;
  .iconfont {
    line-height: 40px;
    font-size: 20px;
  }
  .icon-hangban {
    color: #1296db;
  }
  .icon-title {
    font-size: 14px;
  }
  img {
    width: 30px;
    height: 30px;
    margin: 0 auto;
  }
}
.el-footer {
  padding: 0px 10px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px !important;
}
.foot-item {
  background: #1296db;
  height: 35px;
  width: 100%;
  line-height: 35px;
  display: inline-block;
  color: white;
  text-align: center;
}
</style>
