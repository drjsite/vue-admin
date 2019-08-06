<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/home'}">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="search">
            <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="success" plain>成功按钮</el-button>
        </div>
        <template>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">

                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>


                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="用户状态">
                    <el-switch
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>

                </el-table-column>

                <el-table-column
                        prop="address"
                        label="操作">
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                </el-table-column>
            </el-table>
        </template>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {},
        created() {

        }
    };
</script>

<style lang="less">

    .search {
        margin: 10px 0;

        .el-input-group {
            width: 47%;
            margin-right: 5px;
        }
    }

</style>

