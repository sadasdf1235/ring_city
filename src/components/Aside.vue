<template>
  <div class="aside">
    <el-menu default-active="1" class="el-menu-vertical" :collapse="store.collapse" background-color="rgb(255, 255, 255)"
      text-color="rgb(135, 139, 155)">
      <el-menu-item index="1" @click="check(1)">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <span>工作台</span>
      </el-menu-item>
      <el-menu-item index="2" @click="check(2)">
        <el-icon>
          <List />
        </el-icon>
        <span>发票列表</span>
      </el-menu-item>
      <el-menu-item index="3" @click="check(3)">
        <el-icon>
          <Menu />
        </el-icon>
        <span>项目管理</span>
      </el-menu-item>
      <el-menu-item index="4" @click="check(4)">
        <el-icon>
          <Calendar />
        </el-icon>
        <span>发票检索</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {List} from '@element-plus/icons-vue'
import {useStore} from '@/store/index'
const router = useRouter()
let switchColor = ref(1)
const store = useStore()
function check(index: number) {
  switch (index) {
    case 1:
      switchColor.value = 1;
      router.push('/');
      break;
    case 2:
      switchColor.value = 2;
      router.push('/invoice');
      break;
    case 3:
      switchColor.value = 3;
      router.push('/pm');
      break;
    case 4:
      switchColor.value = 4;
      router.push('/retrieval');
      break;
  }
}
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  border: 1px solid rgb(220, 223, 230);
  .el-menu {
    .el-menu-item{
      &:hover {
      background-color: rgb(0, 84, 254);
      border-radius: 5px;
      color: white;
    }
    }
  }
}
</style>