<template>
    <div class="item">
        <div>
            <el-avatar :size="30" :src="props.billInfo.src" />
            <p>{{ props.billInfo.person }}</p>&nbsp;&nbsp;
            <p> 在</p>&nbsp;
            <p>{{ props.billInfo.project }}</p>&nbsp;
            <p>新增了 </p>&nbsp;
            <p>{{ props.billInfo.company }}</p>&nbsp;
            <p> {{ props.billInfo.date }}</p>&nbsp;
            <p>￥{{ props.billInfo.price }}</p>&nbsp;
            <p>的发票信息</p>
        </div>
        <p>一小时前</p>
    </div>
</template>

<script setup lang='ts'>
import { } from "vue"
const props = defineProps(['billInfo'])
</script>

<style lang="scss" scoped>
.item {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: rgb(248, 249, 251);

    div {
        display: flex;
        align-items: center;
        p{
            &:nth-child(2){
                color:#45494c;
                font-size: 20px;
                font-weight: bold;
            }
            &:nth-child(3),&:nth-child(5),&:nth-child(7),&:nth-child(9){
                color:#848899;
            }
            &:nth-child(4),&:nth-child(6){
                color:#1c67fd;
                font-size: 15px;
                font-weight: bold;
            }
            &:nth-child(8){
                color:#fe952b;
            }
        }
    }
}
</style>
