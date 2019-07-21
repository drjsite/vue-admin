<template>
    <div class="login">
        <el-form ref="form" :model="form" :rules="rules">
            <div class="headerPic">
                <img src="../assets/images/touxiang.gif"/>
            </div>
            <el-form-item prop="userName">
                <el-input v-model="form.userName" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-button type="primary" style="width: 100%;" @click="loginForm('ruleForm')">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    userName: "",
                    password: ""
                },
                rules: {
                    userName: [
                        {required: true, message: '请输入用户名称', trigger: 'blur'},
                        {min: 5, max: 20, message: '账号长度在 5 到 20 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入用户密码', trigger: 'blur'},
                        {min: 5, max: 20, message: '密码长度在 5 到 20 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            loginForm(){
                this.$refs.form.validate(flag=>{
                    if (flag) {
                        if (this.form.userName === 'admin' && this.form.password === '123456') {
                            this.$message({
                                message: '登录成功!',
                                type: 'success'
                            });
                            this.$router.push("/home");
                        }else {
                            this.$message.error('账号密码错误!');
                        }
                    }
                })
            }
        },
        created() {

        }
    }
</script>

<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: #2f4050;

        .el-form {
            width: 400px;
            padding: 70px 20px 20px 20px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;

            .headerPic {
                width: 100px;
                height: 100px;
                border-radius: 100%;
                box-shadow: 0px 3px 5px #ccc;
                position: absolute;
                top: -50px;
                left: 170px;

                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 100%;
                }
            }
        }
    }
</style>
