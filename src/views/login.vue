<template>
   <!-- <div class="login">
        <div class="login-name">铁岭市市本级行政事业单位固定资产二维码管理系统</div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
            <h3 class="title">铁岭市市本级行政事业单位<br/>固定资产二维码管理系统</h3>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
                    <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                        v-model="loginForm.password"
                        type="password"
                        auto-complete="off"
                        placeholder="密码"
                        @keyup.enter.native="handleLogin"
                >
                    <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input
                        v-model="loginForm.code"
                        auto-complete="off"
                        placeholder="验证码"
                        style="width: 63%"
                        @keyup.enter.native="handleLogin"
                >
                    <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
                </el-input>
                <div class="login-code">
                    <img :src="codeUrl" @click="getCode" class="login-code-img"/>
                </div>
            </el-form-item>
            <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button
                        :loading="loading"
                        size="medium"
                        type="primary"
                        style="width:100%;"
                        @click.native.prevent="handleLogin"
                >
                    <span v-if="!loading">登 录</span>
                    <span v-else>登 录 中...</span>
                </el-button>
            </el-form-item>
        </el-form>
        &lt;!&ndash;  底部  &ndash;&gt;
        <div class="el-login-footer">
            <span>Copyright © 2019-2020 </span>
        </div>
    </div>-->
    <div class="login">
        <div class="login-name">阿巴阿巴 再见麻瓜</div>
        <el-form  class="login-form"  :model="loginForm"  >
            <h3 class="title">阿巴阿巴<br/>再见麻瓜</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号">
                 <!--   <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />-->
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                        v-model="loginForm.passWord"
                        type="password"
                        auto-complete="off"
                        placeholder="密码"

                >
                 <!--   <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />-->
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input
                        auto-complete="off"
                        placeholder="验证码"
                        style="width: 63%"
                >
                  <!--  <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />-->
                </el-input>
                <div class="login-code">
                  <!--  <img :src="codeUrl" @click="getCode" class="login-code-img"/>-->
                </div>
            </el-form-item>
            <el-checkbox style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button
                        size="medium"
                        type="primary"
                        style="width:100%;"

                >
                    <span >登 录</span>
                   <!-- <span v-else>登 录 中...</span>-->
                </el-button>
                <el-link  style="margin-left: 0" type="primary">忘记密码? </el-link>&nbsp;

               <el-link style="margin-left: 0" type="primary">免费注册</el-link>
            </el-form-item>

        </el-form>

        <!--  底部  -->
        <div class="el-login-footer">
            <span>Copyright © 2019-2020 </span>
        </div>
    </div>
</template>

<script>



    export default {
        name: "login",

        data(){
            return{
                loginForm:{
                    userName:"",
                    passWord:"" ,
                },
            }
        },

        methods:{
            a(){
                alert(1)
                this.$router.push({ name: 'Home'})
            }
        }



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