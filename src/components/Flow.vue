<template>
    <div class="flow">
        <FlowItem num="1" :mes="props.mes.mes1" :color="props.success==1?color:{}" :acmp="props.acmp.acmp1"/>
        <el-divider></el-divider>
        <FlowItem num="2" :mes="props.mes.mes2" :color="props.success==2?color:{}" :acmp="props.acmp.acmp2"/>
        <el-divider></el-divider>
        <FlowItem num="3" :mes="props.mes.mes3" :color="props.success==3?color:{}" :acmp="props.acmp.acmp3"/>
    </div>
</template>

<script setup lang='ts'>
import FlowItem from "./FlowItem.vue";
const props = defineProps(['success','mes','acmp'])
const color = {
    'tagColor': "#fff",
    'tagBaColor': "rgb(0, 84, 254)",
    'fontColor': "rgb(84, 84, 84)"
}
</script>

<style lang="scss" scoped>
.flow {
    display: flex;

    .el-divider {
        width: 260px;
        margin-left: 20px;
        margin-right: 20px;
    }
}
</style>
