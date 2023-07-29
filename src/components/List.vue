<template>
  <div class="list" :style="{width: props.width+'px'}">
    <p>{{ props.firstName }}</p>
    <p :style="{color:props.lastColor}">{{ props.lastName }}</p>
  </div>
</template>

<script setup lang='ts'>
import {} from "vue"
const props = defineProps(['firstName','lastName','width','lastColor'])
</script>

<style lang="scss" scoped>
.list{
    border: 1px solid rgb(237, 238, 238);
    text-align: center;
    display: flex;
    height: 60px;
    width: 330px;
    p{
      text-align: center;
      line-height: 60px;
        &:nth-child(1){
            border-right: 1px solid rgb(237, 238, 238);
            color:rgb(50, 54, 58);
            background-color: rgb(246, 249, 254);
            display: inline-block;
            width: 100px;
        }
        &:nth-child(2){
            color:rgb(126, 130, 148);
            padding-left: 10px;
        }
    }
}
</style>
