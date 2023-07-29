<template>
    <el-card>
        <div class="loadmore">
            <LoadMoreItem :bill-info="billInfo"/>
            <el-button type="primary" @click="showLoadMore">返回</el-button>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import {reactive } from "vue"
import LoadMoreItem from '@/components/LoadMoreItem.vue'
import { useStore } from '@/store/index'
const store = useStore()
const billInfo = reactive({
    src:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    person:'运营中心 王小翔',
    project:'芯谷项目',
    company:'北京华联',
    date:'2023年7月14日',
    price:'3200.00'
})
function showLoadMore() {
    store.showMore = false
}
</script>

<style lang="scss" scoped>
.el-card{
    .loadmore {
    margin: 20px;
}
}
</style>
