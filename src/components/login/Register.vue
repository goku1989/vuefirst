<template>
  <div class="login-wrap">
    <el-form class="login-container">
      <h1 class="title">用户注册</h1>
      <el-form-item label="">
        <el-input type="text" placeholder="用户账号" v-model="nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="text" placeholder="真实姓名" v-model="userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="password" placeholder="用户密码" v-model="userPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="password" placeholder="确认密码" v-model="password1" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="text" placeholder="手机号" v-model="userPhone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister()" style="width: 88%;">用户注册</el-button>
        <el-button type="primary" @click="doGetUsers()" style="width: 88%;">获取用户</el-button>
        <el-button style="width: 88%;" @click="gotoLogin">返回登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript" src="../../js/app.js"></script>
<script>
/*  import axios from 'axios'
  import qs from 'qs' */
  export default{
      data:function(){
        return{
          nickName:null,
          userName:null,
          userPassword:null,
          password1:null,
          userPhone:null
        }
      },
      methods:{
        gotoLogin:function(){
          this.$router.push('/');
        },
        doRegister:function(){
          let params={
            nickName:this.nickName,
            userName:this.userName,
            userPassword:this.userPassword,
            methodName:'userLogin'
          };

          console.log(params);

          var serverUrl = app.serverUrl;

          this.$http.post(
            'http://192.168.50.110:9001/v1/user/userInfo',
            {
              nickName: '9988'
            }
          )
        },
        doGetUsers:function(){
          var serverUrl = app.serverUrl;
          console.log(serverUrl);
          
          this.$http.get(
            'http://192.168.50.110:9001' + '/v1/user/userInfos?userId=1',
          ).then(function(response){
            console.log(response);
          }).catch(function(error){
            console.log(error);
          });
        }
      }
  }
</script>
//scoped="scoped" 表示样式仅仅规范当前VUE
<style scoped="scoped">
  .login-wrap {
  		box-sizing: border-box;
  		width: 100%;
  		height: 100%;
  		padding-top: 10%;
  		
  		/* background-color: #112346; */
  		background-repeat: no-repeat;
  		background-position: center right;
  		background-size: 100%;
  	}

  	.login-container {
  		border-radius: 10px;
  		margin: 0px auto;
  		width: 350px;
  		padding: 30px 35px 15px 35px;
  		background: #fff;
  		border: 1px solid #eaeaea;
  		text-align: left;
  		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  	}

  	.title {
  		margin: 0px auto 40px auto;
  		text-align: center;
  		color: #505458;
  	}
</style>