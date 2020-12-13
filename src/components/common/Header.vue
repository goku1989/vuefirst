<template>
  <div class="header-class">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div class="header-logo">
          <img :src="loginLogo" class="logoClass">
        </div>
      </el-col>
      <el-col :span="10">
        <div class="header-search">
          <el-input placeholder="请输入内容" v-model="input1" >
            <el-button type="primary" slot="append" icon="el-icon-search" >  搜索</el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-cart">
          <el-button >我的购物车  <i class="el-icon-shopping-cart-1 el-icon--right"></i></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        loginLogo:require("../../assets/login-logo.jpg"),
        input1: ''
      }
    }
  }
</script>

<style scoped>
  .header-class {
    width: 95%;
  }
  .header-logo {
    position:relative;
    left: 80px;
  }
  .logoClass {
    width: 80px;
    height: 80px;
  }
  .header-search {
    position:relative;
    top: 20px;
  }
  .header-cart {
    position:relative;
    left: 180px;
    top: 20px;
  }

.el-button {
  background-color: #f5f5f5;
}
  
</style>
