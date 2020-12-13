<template>
  <div>
    <el-form class="login-container" ref="ruleForm" :model="ruleForm" :rules="rules">
      <h1 class="title">用户注册</h1>
      <el-form-item prop="nickName">
        <el-input v-model="ruleForm.nickName" placeholder="注册用户名"></el-input>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="真实姓名"></el-input>
      </el-form-item>
      <el-form-item prop="userPassword">
        <el-input type="password" v-model="ruleForm.userPassword" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="userPasswordConfirm">
        <el-input type="password" v-model="ruleForm.userPasswordConfirm" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="ruleForm.userEmail" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="ruleForm.userPhone" placeholder="电话"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">注册</el-button>
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
  import axios from 'axios'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.userPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          nickName: '',
          userName: '',
          userPassword: '',
          userPasswordConfirm: '',
          userEmail: '',
          userPhone: ''
        },
        rules :{
          nickName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          userName: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
          ],
          userPassword: [
            { validator: validatePass, trigger: 'blur' },
          ],
          userPasswordConfirm: [
            { validator: validatePass2, trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = "http://192.168.50.110:9001/db-authority/v1/user/userInfo"
            let formData = JSON.stringify(this.ruleForm)
            axios.post(url, formData,{headers: {
              'Content-Type': 'application/json'
            }}).then(res => {
              if (res.data.code === "200") {
                alert("成功");
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$router.push({
          name:'Login'
        });
      }
    }
  }
</script>