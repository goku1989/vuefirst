<template>
  <div>
      <div class="header">
        <div class="header-font">
          <img :src="loginLogo" class="logoClass">
        </div>
      </div>
      <div class="main">
        <div class="login-cart" style="display: flex;justify-content: flex-end;margin-top: 50px; margin-right: 100px">
          <el-card style="width: 400px">
            <div slot="header" class="clearfix">
              <span>登录</span>
            </div>
            <table>
              <tr height="100px">
                <td>用户名：</td>
                <td>
                  <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
                </td>
              </tr>
              <tr>
                <td>密码：</td>
                <td>
                  <el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
                  <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
                </td>
              </tr>
              
              <tr height="120px">
                <!-- 占两列-->
                <td colspan="2">
                  <!-- 点击事件的两种不同的写法v-on:click和 @click-->
                  <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
                  <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td style="text-align: right">
                  <el-button type="text" @click="doRegister">注册</el-button>
                </td>
              </tr>
            </table>
          </el-card>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-font">
          关于我们 | 联系我们 | 人才招聘 | 商家入驻 | 广告服务 | 手机京东 | 友情链接 | 销售联盟 | 服务社区 | English Site
        </div>
      </div>
  </div>

</template>

<style scoped>
  /* 头部样式 */
  .header {
    position: absolute;
    line-height: 100px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #ffffff;
  }
  
  /* 主区域 */
  .main {
    position: absolute;
    top: 100px;
    left: 0px;
    bottom: 100px;
    right: 0px;  /* 距离右边0像素 */
    padding: 10px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    /* background-color: red; */
    background-color: #84c0f1;
  }

  /* 左侧样式 */
  .bottom {
    position: absolute;
    top: 600px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
    background-color: #ffffff;
  }

  .header-font {
    position: absolute;
    line-height: 50px;
    top: 15px;
    left: 100px;    
  }

  .logoClass {
    width: 80px;
    height: 80px;
  }

  .bottom-font {
    position:relative;
    top:20px;
    text-align: center;
  }
  
</style>

<script>
  export default {
    //单页面中不支持前面的data:{}方式
    data() {
      //相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
      return{
        loginLogo:require("../../assets/login-logo.jpg"),
        user:{
          username:'',
          password:'',
          //为了登录方便，可以直接在这里写好用户名和密码的值
        }
      }
    },
    methods:{
      doLogin(){//一点击登录按钮，这个方法就会执行
        alert(JSON.stringify(this.user))//可以直接把this.user对象传给后端进行校验用户名和密码
      },
      doRegister:function(){
        this.$router.push({
            name:'Register'
          });
      }
    }
  }
</script>