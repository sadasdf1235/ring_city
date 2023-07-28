<template>
    <div class="header">
        <div class="left">
            <el-icon :size="30" color="rgb(167, 171, 191)">
                <Operation />
            </el-icon>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="right">
            <el-dropdown>
                <div class="person">
                    <el-icon>
                        <BellFilled/>
                    </el-icon>
                    <el-avatar size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <p>赵莎莎</p>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>登出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1px;
        margin-left: 30px;

        .el-icon {
            display: inline-block;
            margin-right: 30px;
        }
    }

    .right {
        margin-right: 30px;
        .person{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
