<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container style="height: 100vh;">
        <el-header style="padding: 0;margin-bottom:20px;overflow: hidden;border-bottom: 1px solid #efefef;">
            <Header />
        </el-header>
        <el-main style="padding: 0;overflow: auto;margin: 0;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped></style>
