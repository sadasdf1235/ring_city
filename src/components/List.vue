<template>
  <div class="list" :style="{ width: width + 'px' }">
    <p>{{ firstName }}</p>
    <!-- <p :style="{color:props.lastColor}">{{ props.lastName }}</p> -->
    <el-input v-model="inputValue"  :style="{ color: lastColor }" @input="handleInput"></el-input>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
const props = defineProps(['firstName', 'lastName', 'width', 'lastColor'])
const emit = defineEmits(['updateInputValue'])
const {width,firstName,lastName,lastColor} = props
let inputValue = ref(lastName)
function handleInput(value:string){
  inputValue.value = value
  emit('updateInputValue',value)
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid rgb(237, 238, 238);
  text-align: center;
  display: flex;
  height: 60px;
  width: 330px;

  p {
    text-align: center;
    line-height: 60px;
    border-right: 1px solid rgb(237, 238, 238);
    color: rgb(50, 54, 58);
    background-color: rgb(246, 249, 254);
    display: inline-block;
    width: 100px;
  }

  // p {
  //   text-align: center;
  //   line-height: 60px;

  //   &:nth-child(1) {
  //     border-right: 1px solid rgb(237, 238, 238);
  //     color: rgb(50, 54, 58);
  //     background-color: rgb(246, 249, 254);
  //     display: inline-block;
  //     width: 100px;
  //   }

  //   &:nth-child(2){
  //       color:rgb(126, 130, 148);
  //       padding-left: 10px;
  //   }
  // }

  .el-input {
    color: rgb(126, 130, 148);
    padding-left: 10px;
    margin: 0;
    padding: 0;
  }
}
</style>