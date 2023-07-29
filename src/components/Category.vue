<template>
  <div class="category">
    <el-form :model="form">
    <el-form-item label="所属项目">
      <el-input v-model="form.name" placeholder="请输入规则编号"/>
    </el-form-item>
    <el-form-item label="销方名称">
      <el-select v-model="form.region" placeholder="请选择状态">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="开票时间">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="请选择时间"
        />
    </el-form-item>
    </el-form>
    <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
    <el-button :icon="RefreshLeft" @click="reset">重置</el-button>
  </div>
</template>

<script setup lang='ts'>
import {reactive} from "vue"
import {Search,RefreshLeft} from '@element-plus/icons-vue'
//表单数据
let form = reactive({
    name:'',
    region:'',
    date:''
})
//搜索按钮
function search(){

}
//重置按钮
function reset(){
    Object.assign(form,{
    name:'',
    region:'',
    date:''
})
}
</script>

<style lang="scss" scoped>
.category{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .el-form{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
