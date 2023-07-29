<template>
  <div class="transfer">
    <Flow :mes="mes" :acmp="acmp" success="2"/>
    <div class="title">
        请确认xxxxxxxxxxxxxxxxxxxxx
    </div>
    <el-form :model="form">
      <el-form-item label="发票种类:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="开票日期:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="销方名称:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="商品名称:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="合计金额:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="合计税额:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="价格合计:">
        <el-input  placeholder=""></el-input>
      </el-form-item>
      <div class="button">
        <el-button type="primary" @click="commit">提交</el-button>
    <el-button @click="cancel">取消</el-button>
      </div>
    </el-form>
    <Explain/>
  </div>
</template>

<script setup lang='ts'>
import {reactive} from "vue"
import Flow from "@/components/Flow.vue";
import Explain from "@/components/Explain.vue";
import {useStore} from '@/store/index'
const store = useStore()
let form = reactive({})
const mes = reactive({
  mes1:'填写基本信息',
  mes2:'确认转账信息',
  mes3:'完成'
})
const acmp = reactive({
    acmp1:false,
    acmp2:true,
    acmp3:true
})
//提交按钮
function commit(){
    store.$patch({
        invoiceInfo:3
    })
}
//取消按钮
function cancel(){
    store.$patch({
        invoiceInfo:1
    })
}
</script>

<style lang="scss" scoped>
.transfer{
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        width: 60%;
        height: 45px;
        background-color: #ffcbc0;
        color: #050404;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    .el-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        .button{
            display: flex;
        }
    }
}
</style>
