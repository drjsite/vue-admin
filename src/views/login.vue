<template>
    <div class="login">
        <el-form ref="form" :model="form">
            <div class="headerPic">
                <img src="../assets/images/touxiang.gif"/>
            </div>
            <el-form-item>
                <el-input v-model="form.userName" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-button type="primary" style="width: 100%;">登录</el-button>
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
                }
            }
        },
        methods: {},
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
