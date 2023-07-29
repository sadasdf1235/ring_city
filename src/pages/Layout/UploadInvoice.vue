<template>
    <div class="uploadInvoice">
        <Flow success="1" :mes="mes" :acmp="acmp"/>
        <el-form :model="form">
            <el-form-item label="所属项目">
                <el-input v-model="form.project" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="保管人员">
                <el-col :span="7">
                    <el-select v-model="form.person" placeholder="请选择人员">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select></el-col>
                <el-col :span="2">
                    <span>&nbsp;&nbsp;</span>
                </el-col>
                <el-col :span="15">
                    <el-input v-model="form.container" placeholder="">
                    </el-input></el-col>
            </el-form-item>
            <el-button type="primary" @click="update">上传发票</el-button>
        </el-form>
        <Explain/>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue"
import Flow from "@/components/Flow.vue";
import Explain from "@/components/Explain.vue";
import {useStore} from '@/store/index'
const store = useStore()
let form = reactive({
    project: '',
    person: '',
    container: ''
})
const mes = reactive({
  mes1:'填写基本信息',
  mes2:'确认发票信息',
  mes3:'完成'
})
const acmp = reactive({
    acmp1:true,
    acmp2:true,
    acmp3:true
})
//上传发票按钮
function update(){
    store.$patch({
  invoiceInfo:2
})
}
</script>

<style lang="scss" scoped>
.uploadInvoice {
    display: flex;
    flex-direction: column;
    align-items: center;

    .el-form {
        margin-top: 50px;
        text-align: center;
        .el-button{
            margin-top: 30px;
            border-radius: 10px;
            background-color: #0054fe;
        }
    }
}
</style>
