<template>
  <div class="page">
    <div class="page-title">
      <div class="left title">广告设置</div>
      <div class="right btn">
        <el-button size="small" type="primary" round @click="handle({})">新建广告</el-button>
      </div>
    </div>
    <div class="page-content">
      <el-table :data="adList" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="60">
        </el-table-column>
         <el-table-column prop="name" label="名字">
        </el-table-column>
        <el-table-column prop="img_url" label="图片地址"  width="200">
        </el-table-column>
        <el-table-column prop="city_name" label="城市名称">
        </el-table-column>
        <el-table-column prop="sort" label="排序标识">
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
      <el-dialog title="新建广告"  :visible.sync="visible" width="36%">
        <div class="dialog-content">
              <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="图片名字：">
                 <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="所在城市：">
                  <el-cascader
                    expand-trigger="hover"
                    :options="cityTree"
                    v-model="form.city_id"
                    @change="checkCity">
                  </el-cascader>
                </el-form-item>
                 <el-form-item label="上传图片：">
                 <el-upload
                      :action="upload"
                      :on-remove="handleRemove"
                      :on-change="changeFile"
                      :limit="1"
                      :auto-upload="false">
                       <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                       <span slot="tip" class="el-upload__tip">&nbsp;&nbsp;只能上传jpg/png且不超过500kb</span>
                  </el-upload>
                </el-form-item>
                <el-form-item label="排序顺序：">
                  <el-select v-model="form.sort" placeholder="请选择排序顺序">
                     <el-option v-for="item in 4" :key="item" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="备注：">
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
        city_id: [],
        sort: "",
        remark: ""
      },
      adList: []
    };
  },
  mounted() {
    api.getAd({}).then(ret => {
       this.adList=ret.data;
    });
  },
  computed: {
    cityTree() {
      return this.$store.state.app.zone;
    }
  },
  methods: {
    changeFile(file, fileList) {
      this.form.fileList.push(file);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    checkCity(e) {
      console.log(e);
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
      console.log(this.form.fileList.length ,this.form.fileList[0]);
      const formData = new FormData();
      formData.append("adFile", this.form.fileList[0].raw);
      formData.append("name", this.form.name);
      formData.append("city_id", this.form.city_id);
      formData.append("sort", this.form.sort);
      formData.append("remark", this.form.remark);
      api.createAd(formData).then(ret => {
           this.$message.success("新建成功！");
                this.visible = false;
      });
    }
  }
};
</script>
