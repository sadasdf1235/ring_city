<template>
    <div class="accomplish">
        <Flow :mes="mes" :acmp="acmp" success="3" />
        <div class="container">
            <div class="top">
                <svg t="1690615319097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2695" width="50" height="50">
                <path
                    d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m182.613333 297.354667a32 32 0 0 0-45.258666 0.032L458.922667 573.44l-84.341334-83.989333a32 32 0 0 0-45.162666 45.344l106.986666 106.549333a32 32 0 0 0 45.226667-0.064l213.013333-213.333333a32 32 0 0 0-0.032-45.258667z"
                    fill="#52c41a" p-id="2696"></path>
            </svg>
            <h3>操作成功</h3>
            <p>合规部门将随时审计本单发票</p>
            </div>
            <div class="bottom">
                <div>
                    <h4>归属项目:</h4>
                    <p>华大九天项目</p>
                </div>
                <div>
                    <h4>销方名称:</h4>
                    <p>xxxxxxx</p>
                </div>
                <div>
                    <h4>开票日期:</h4>
                    <p>xxxxxxxx</p>
                </div>
                <div>
                    <h4>转账金额:</h4>
                    <p>xxxxxxxxx</p>
                </div>
            </div>
        </div>
        <div class="button">
            <el-button type="primary" @click="add">继续新增</el-button>
            <el-button @click="check">查看明细</el-button>
        </div>
        <Explain />
    </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue"
import Explain from "@/components/Explain.vue";
import Flow from "@/components/Flow.vue";
import {useStore} from '@/store/index'
const store = useStore()
const mes = reactive({
    mes1: '填写转账信息',
    mes2: '确认转账信息',
    mes3: '完成'
})
const acmp = reactive({
    acmp1: false,
    acmp2: false,
    acmp3: true
})
//新增按钮
function add(){
    store.$patch({
        invoiceInfo:1
    })
}
//查看按钮
function check(){
    store.$patch({
        isShowAdd:false
    })
}
</script>

<style lang="scss" scoped>
.accomplish {
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        margin-top: 20px;
        .top{
            display: flex;
            flex-direction: column;
            align-items: center;
            h3{
                margin: 5px 0;
            }
        }
        .bottom{
            margin-top: 25px;
            div{
                display: flex;
                margin: 10px 0;
                p{
                    margin-left: 10px;
                }
            }
        }
    }

    .button {}
}</style>
