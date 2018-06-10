<template>
  <div class="page">
    <div class="page-title">
      <div class="left title">图表设置</div>
      <div class="right btn">
        <el-button size="small" type="primary" round @click="handle({})">新建图表</el-button>
      </div>
    </div>
    <div class="page-content">
      <el-table :data="iconList" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="60">
        </el-table-column>
         <el-table-column prop="name" label="图标描述">
        </el-table-column>
        <el-table-column prop="city_name" label="所在城市">
        </el-table-column>
        <el-table-column prop="dict_name" label="连接类型">
        </el-table-column>
        <el-table-column prop="url_name" label="连接简称">
        </el-table-column>
        <el-table-column prop="type" label="图标类型">
        </el-table-column>
        <el-table-column prop="icon_url" label="图标地址" width="200">
        </el-table-column>
        <el-table-column prop="class_name" label="图标编码">
        </el-table-column>
        <el-table-column prop="color" label="图标颜色" >
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
      <el-dialog title="新建图标"  :visible.sync="visible" width="36%">
        <div class="dialog-content">
              <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="图标名字：">
                 <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所在城市：">
                  <el-cascader
                    expand-trigger="hover"
                    :options="cityTree"
                    v-model="form.city_code"
                    @change="checkCity">
                  </el-cascader>
                </el-form-item>
                <el-form-item label="网址类型：">
                  <el-cascader
                    expand-trigger="hover"
                    :options="dictTree"
                    v-model="form.dict_code"
                    @change="checkDict">
                  </el-cascader>
                 </el-form-item>
                 <el-form-item label="网址选择：">
                    <el-select v-model="form.site_id" placeholder="请选择图标连接网址">
                       <el-option v-for="item in siteOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                 </el-form-item>
                 <el-form-item label="图标类型：">
                    <el-radio-group v-model="form.type">
                      <el-radio  label="font"></el-radio>
                      <el-radio   label="png"></el-radio>
                    </el-radio-group>
                 </el-form-item>
                 <el-form-item v-if="form.type!='font'" label="上传图标：">
                    <el-upload
                      :action="upload"
                      :on-remove="handleRemove"
                      :on-change="changeFile"
                      :limit="1"
                      :auto-upload="false">
                       <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                       <span slot="tip" class="el-upload__tip">&nbsp;&nbsp;只能上传jpg/png且不超过500kb,建议上传png图标</span>
                  </el-upload>
                </el-form-item>
                <el-form-item v-if="form.type=='font'" label="图标颜色：">
                  <el-input v-model="form.color"></el-input>
                </el-form-item>
                <el-form-item v-if="form.type=='font'" label="图标样式：">
                  <el-input v-model="form.class_name"></el-input>
                </el-form-item>
                <el-form-item label="图标备注：">
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
      upload: "",
      limit: 1,
      visible: false,
      itemData: {},
      form: {
        name: "",
        fileList: [],
        city_code: [],
        dict_code: [],
        site_id: "",
        type: "font",
        color: "",
        class_name: "",
        remark: ""
      },
      iconList: [],
      siteOption: []
    };
  },
  mounted() {
   this.getIconList({});
  },
  computed: {
    cityTree() {
      return this.$store.state.app.zone;
    },
    dictTree() {
      return this.$store.state.app.dict;
    }
  },
  methods: {
    getIconList(params){
     api.getIconList(params).then(ret => {
        this.iconList=ret.data;
     });
    },
    getSiteOption(params) {
      api.getSiteOption(params).then(ret => {
        this.siteOption = ret.data;
      });
    },
    changeFile(file, fileList) {
      this.form.fileList.push(file);
    },
    checkCity(e) {
      console.log(e);
    },
    checkDict(data) {
      let params = { dict_code: data[1] };
      this.getSiteOption(params);
    },
    handleRemove(file, fileList) {
      this.form.fileList = 0;
    },
    handle(item) {
      this.visible = true;
      this.itemData = item;
    },
    del(rows) {
      console.log(rows);
    },
    submit() {
      const formData = new FormData();
      formData.append("iconFile",this.form.fileList.length ? this.form.fileList[0].raw : "empty");
      formData.append("name", this.form.name);
      formData.append("city_code", this.form.city_code[1].toString());
      formData.append("dict_code", this.form.dict_code[1]);
      formData.append("site_id", this.form.site_id);
      formData.append("type", this.form.type);
      formData.append("color", this.form.color);
      formData.append("class_name", this.form.class_name);
      formData.append("remark", this.form.remark);
      api.createIcon(formData).then(ret => {
        this.visible=false;
        this.getIconList({});
        this.$message.success("提交成功！");
      });
    }
  }
};
</script>
