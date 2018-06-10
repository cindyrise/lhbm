<template>
  <div class="login">
    <div class="login-content">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="登录账号：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="登录密码：">
          <el-input type="password" v-model="form.pwd"></el-input>
        </el-form-item>
      </el-form>
      <div  class="login-btn"> <el-button type="primary" size="medium" round @click="submit">登录</el-button></div>
    </div>
  </div>
</template>

<script>
import api from "@/api/back.js";
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(121313, 1212, this.form);
      api.login(this.form).then(ret => {
        if(ret.result){
          this.$message.success("提交成功！");
          this.$router.push({ name: "ad"});
        }else{
             this.$message.success("账号或者密码有误");
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login {
  background-image: url("../../assets/imgs/bg.png");
  background-size: 100% 100%;
  height: 100%;
  position: relative;
  .login-content {
    position: absolute;
    top: 50%;
    left: 40%;
    margin-left: 10%;
    transform: translate3d(-50%, -50%, 0);
    background: #fff;
    border-radius: 5px;
    width: 360px;
    padding:30px 20px;
    padding-left:10px;
    padding-right:20px;
    .login-btn{
      margin-left:15px;
    }
  }
}
</style>
