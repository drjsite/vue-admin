<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <div class="logo"></div>
                <el-menu default-active="2"
                         class="el-menu-vertical-demo"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="yellow"
                         :router="true"
                >
                    <el-submenu :index="index+''" :key="menu.id" v-for="(menu,index) in menuList">
                        <template slot="title">
                            <i :class="'el-icon-' + menu.icon"></i>
                            <span>{{menu.name}}</span>
                        </template>
                        <el-menu-item :key="menuItem.id" v-for="menuItem in menu.child" :index="'/home'+menuItem.path">
                            <i :class="'el-icon-' + menuItem.icon"></i>{{menuItem.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <i class="el-icon-tickets"></i>
                    <h3>北塔后台管理系统</h3>
                    <div>您好,dongrj <span>退出</span></div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            getMenus() {
                this.axios.post("menus").then(resp => {
                    this.menuList=resp.data;
                })
            }
        },
        created() {
            this.getMenus();
        }
    };
</script>

<style lang="less">
    .el-menu {
        border-right: none !important;
    }

    .home {
        height: 100%;

        .el-container {
            height: 100%;

            .el-aside {
                background: grey;

                .logo {
                    height: 60px;
                    background: url("../assets/images/touxiang.gif");
                    background-size: cover;
                }
            }

            .el-header {
                background: grey;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;

                i {
                    cursor: pointer;
                    font-size: 35px;
                }

                span {
                    cursor: pointer;
                    color: #409EFF;
                }
            }
        }
    }


</style>

