<template>
  <div class="explain"> 
            <h3>说明</h3>
            <p>上传发票仅能识别一张发票，发票图片需清晰扫描，缺角缺边，过度曝光等都不能成功识别发票</p>
        </div>
</template>

<script setup lang='ts'>
import {} from "vue"
</script>

<style lang="scss" scoped>
.explain{
        margin-top: 30px;
        background-color: #f8f9fb;
        border-radius: 10px;
        height: 150px;
        width: 100%;
        padding: 30px;
        h3{
            margin-bottom: 10px;
        }
    }
</style>
