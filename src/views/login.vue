<template>

    <div class="login">
        <div class="login-name">阿巴阿巴 再见麻瓜</div>
<!--        <el-form  ref="loginForm" class="login-form"  :model="loginForm"  >
            <h3 class="title">阿巴阿巴<br/>再见麻瓜</h3>
            <el-form-item prop="username" lable="账号" :rules="[{required: true, message: '用户名不能为空', trigger: 'blur'}]">
                <el-input type="text"  v-model="loginForm.userName" auto-complete="off"  placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password" lable="密码">
                <el-input
                        v-model="loginForm.password"
                        type="password"
                        auto-complete="off"
                        placeholder="密码"
                >
                </el-input>
            </el-form-item>

            <el-form-item style="width:100%;">
                <el-button
                        size="medium"
                        type="primary"
                        style="width:100%;"
                        @click="login"
                >
                  <span >登录</span>
                   &lt;!&ndash; <span v-else>登 录 中...</span>&ndash;&gt;
                </el-button>
&lt;!&ndash;                <el-link  style="margin-left: 0" type="primary">忘记密码? </el-link>&nbsp;&ndash;&gt;
               <el-link  style="margin-left: 0" type="primary" @click.native="openRegistration()">免费注册</el-link>



            </el-form-item>
        </el-form>-->

      <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          class="login-form"

      >
        <h3 class="title">阿巴阿巴<br/>再见麻瓜</h3>
        <el-form-item label="" prop="userName" class="elItem">
          <el-input
              type="text"
              autocomplete="off"
              v-model="loginForm.userName"
              prefix-icon="el-icon-user-solid"
              placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
              type="password"
              autocomplete="off"
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login()">登录</el-button>

        </el-form-item>
      </el-form>

        <!--  底部  -->
        <div class="el-login-footer">
            <span>Copyright © Jiahy </span>
        </div>
    </div>
</template>

<script>
  import {login} from '@/api/study/login/login'
    export default {
        name: "login",
        data(){
            return{
              //登录表单
                loginForm:{
                  userName:"",
                  password:""
                },
              rules: {
                userName: [
                  {required: true, message: "用户名不能为空", trigger: "blur"}
                ],
                password: [
                  {required: true, message: "密码不能为空", trigger: "blur"}
                ],
              }

            }
        },

        methods:{
          login(){
            this.$refs["loginForm"].validate(valid => {
              if (valid) {
                login(this.loginForm).then(res => {
                  console.log(res.code)
                  if (res.code === 0){
                    sessionStorage.setItem("token",res.data.token);
                    this.$router.push('/SYSubwayMap')
                  }else {
                    this.$message.error(res.msg)
                  }

                })
              }
            });
          },
          //跳转注册页面
          openRegistration(){
            this.$router.push("/registration")

          }
        },




    }
</script>

<style >
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        background-image: url("../../src/assets/imgs/home.png");
        background-size: cover;
    }
    .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #1890ff;
    }

    .login-form {
        border-radius: 6px;
        background: rgba(255,255,255,0.94);
        box-shadow: 3px 3px 4px rgba(17,43,76,0.4);
        width: 400px;
        padding: 25px 25px 5px 25px;

    }
    .login-tip {
        font-size: 13px;
        text-align: center;
        color: #bfbfbf;
    }
    .login-code {
        width: 33%;
        height: 38px;
        float: right;

    }
    .el-login-footer {
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #222222;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .login-code-img {
        height: 38px;
    }
    .login-name{
        font-size:24px;
        font-weight: bold;
        color:#1d63a9;
        text-shadow:2px 2px 4px rgba(17,43,76,0.3);
        position:absolute;
        left:40px;
        top:18px;
    }

</style>