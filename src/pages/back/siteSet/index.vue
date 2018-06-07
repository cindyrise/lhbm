<template>
  <div class="page">
    <div class="page-title">
      <div class="left title">网址设置</div>
      <div class="right btn">
        <el-button size="small" type="primary" round @click="handle({})">新建网址</el-button>
      </div>
    </div>
    <div class="page-content">
      <el-table :data="siteList" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="60">
        </el-table-column>
         <el-table-column prop="name" label="网址名字">
        </el-table-column>
        <el-table-column prop="url" label="网址地址"  min-width="200">
        </el-table-column>
         <el-table-column prop="dict_name" label="网址类型"  min-width="200">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
                  <el-button
                      size="mini"
                      @click="handle(scope.row)">编辑</el-button>
                   <el-button
                      size="mini"
                      type="danger"
                      @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
   </el-table>
  </div>
  <div class="model">
      <el-dialog title="新建网址"  :visible.sync="visible" width="36%">
        <div class="dialog-content">
              <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="网址名字：">
                 <el-input v-model="form.name"></el-input>
                </el-form-item>
                 <el-form-item label="网址地址：">
                 <el-input v-model="form.url"></el-input>
                </el-form-item>
                <el-form-item label="网址类型：">
                  <el-select v-model="form.code" placeholder="请选择网址类型">
                     <el-option v-for="item in dictType " :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="网址备注：">
                  <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
          </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
           <el-button type="primary" size="medium" round @click="submit">确 定</el-button>
           <el-button size="medium" round @click="visible = false">取 消</el-button>
        </div>
      </el-dialog>
  </div>
 </div>
</template>

<script>
import api from "@/api/back.js";
export default {
  data() {
    return {
      visible: false,
      form: {
        name: "htt",
        url:'',
        code:"",
        remark: ""
      },
      siteList: []
    };
  },
  mounted() {
    this.getSiteList({});
  },
  computed: {
    dictType() {
      return this.$store.state.app.dictType;
    }
  },
  methods: {
    checkDict(e) {
      console.log(e);
    },
    getSiteList(params){
      api.getSite(params).
      then(ret => {
       this.siteList=ret.data;
      });
    },
    handle(item) {
      this.visible = true;
    },
    del(rows) {
      console.log(rows);
    },
    submit() {
      api.createSite(this.form).then(ret => {
           this.getSiteList({});
           this.$message.success("创建成功！");
      });
    }
  }
};
</script>
