<template>
  <div>
    <el-form
      class="login-container"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
    >
      <h1 class="title">添加商品类目</h1>

      <el-form-item prop="parentGkcode">
        <el-cascader
          v-model="values"
          :options="categoryTree"
          :props="optionProps"
          clearable
          filterable
        ></el-cascader>
      </el-form-item>

      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="商品类目名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.login-container {
  border-radius: 10px;
  margin: 0px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: center;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
</style>

<script>
import axios from "axios";
import { constUrl } from "../../js/url.js";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        parentGkcode: "",
      },
      rules: {
        goonamedsCode: [
          { required: true, message: "请输入商品类目编码", trigger: "blur" },
        ],
      },
      values: [],
      optionProps: {
        value: "gkcode",
        label: "name",
        children: "children",
        checkStrictly: true,
        expandTrigger: "hover",
      },
      categoryTree: [],
    };
  },
  created() {
    this.getGoodsCategoryTree();
  },
  methods: {
    getGoodsCategoryTree() {
      var goodsUrl = constUrl.goodsUrl;
      var url = goodsUrl + "/goodsCategory/getCategories";

      axios.defaults.withCredentials = true;
      axios.get(url)
        .then((res) => res.data)
        .then((data) => {
          if (data.code === "200") {
            this.categoryTree = this.getTreeData(data.response);
          }
        });
    },
    getTreeData(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length < 1) {
          data[i].children = undefined;
        } else {
          this.getTreeData(data[i].children);
        }
      }
      return data;
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (this.values.length == 1) {
          this.ruleForm.parentGkcode = this.values[0];
        } else if (this.values.length > 1) {
          this.ruleForm.parentGkcode = this.values[this.values.length - 1];
        }
        for (var cou = 0; cou < this.values.length; cou++) {
          if (
            null != this.ruleForm.gkcodeTreePath &&
            "" != this.ruleForm.gkcodeTreePath
          ) {
            this.ruleForm.gkcodeTreePath =
              this.ruleForm.gkcodeTreePath + "," + this.values[cou];
          } else {
            this.ruleForm.gkcodeTreePath = this.values[cou];
          }
        }

        if (valid) {
          var authorityUrl = constUrl.goodsUrl;
          var url = authorityUrl + "/goodsCategory/insertCategory";
          let formData = JSON.stringify(this.ruleForm);
          
          axios.defaults.withCredentials = true;
          axios.post(url, formData, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              if (res.data.code === "200") {
                this.$message({
                  message: "保存成功",
                  type: "success",
                });
                // this.$router.go(0);
              }
            });
        } else {
          this.$message.error("保存失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>