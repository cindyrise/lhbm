<template>
  <div class="page">
    <div class="page-title">
      <div class="left title">广告设置</div>
      <div class="right btn">
        <el-button size="small" type="primary" round @click="handle({})">新建广告</el-button>
      </div>
    </div>
    <div class="page-content">
      <el-table :data="tableData6" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="图片地址">
        </el-table-column>
        <el-table-column prop="amount1" label="城市名称">
        </el-table-column>
        <el-table-column prop="amount2" label="排序表识">
        </el-table-column>
        <el-table-column prop="amount3" label="备注">
        </el-table-column>
        <el-table-column prop="amount3" label="操作">
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
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                 <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="即时配送">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                  <el-input type="textarea" v-model="form.desc"></el-input>
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
  export default {
    methods: {
      handle(item) {
        console.log(item, 'item');
        this.visible = true;
        this.itemData = item;
      },
      del(rows) {
        console.log(rows);
      },
      submit() {
        this.$message.success('提交成功！');
        this.visible = false;
        console.log(this.form, '990990');
      }
    },
    data() {
      return {
        visible: false,
        itemData: {},
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData6: [{
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        }]
      };
    }
  };
</script>
