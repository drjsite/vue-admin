<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <div class="logo "></div>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {

        }
    };
</script>

<style lang="less">


    .home{
        height: 100%;
        .el-container{
            height: 100%;
            .el-aside{
                background: grey;
                .logo{
                    height: 60px;
                    background: url("../assets/images/touxiang.gif");
                    background-size: cover;
                }
            }
            .el-header{
                background: grey;
            }
        }
    }


</style>

