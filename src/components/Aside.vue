<template>
  <div class="aside">
    <el-menu default-active="1" class="el-menu-vertical" :collapse="false" background-color="rgb(255, 255, 255)"
      text-color="rgb(135, 139, 155)">
      <el-menu-item index="1" @click="switchColor = 1" :class="{ active: switchColor == 1 }">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <template #title>工作台</template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <List/>
          </el-icon>
          <span>发票列表</span>
        </template>
        <el-menu-item index="3">用户管理</el-menu-item>
        <el-menu-item index="role">角色管理</el-menu-item>
        <el-menu-item index="menu">菜单管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <Menu />
          </el-icon>
          <span>项目管理</span>
        </template>
        <el-menu-item index="attr">平台属性管理</el-menu-item>
        <el-menu-item index="spu">spu管理</el-menu-item>
        <el-menu-item index="sku">sku管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon>
           <Calendar/>
          </el-icon>
          <span>发票检索</span>
        </template>
        <el-menu-item index="attr">平台属性管理</el-menu-item>
        <el-menu-item index="spu">spu管理</el-menu-item>
        <el-menu-item index="sku">sku管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
let switchColor = ref(1)
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
}

.active {
  background-color: rgb(0, 84, 254);
  border-radius: 5px;
  color: white;
}</style>