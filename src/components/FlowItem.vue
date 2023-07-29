<template>
    <div class="flowItem">
        <span v-if="acmp" :style="{ background: props.color.tagBaColor, color: props.color.tagColor }">{{ props.num }}</span>
        <svg v-else t="1690609363756" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2491" width="30" height="30">
                <path
                    d="M511.396232 14.306221c278.295908-0.465617 500.87635 220.72309 500.850767 497.724479-0.025583 277.006506-222.646959 498.179863-500.917284 497.657962-277.651207-0.516784-498.66083-220.144906-499.571598-496.450427C10.847349 236.436396 232.818908 14.776955 511.396232 14.306221zM947.137321 528.158457c8.872313-226.070014-165.161125-437.629141-417.715045-448.967691-234.052026-10.504532-442.234148 170.620617-452.441913 416.66101-9.378864 226.105831 165.125309 437.624024 417.612712 448.957458C728.501834 955.308649 936.428122 774.311418 947.137321 528.158457z"
                    p-id="2492" fill="#3a7afe"></path>
                <path
                    d="M286.58492 511.80045c47.92277 38.134573 94.371938 75.097427 141.03089 112.224014 96.700025-126.990736 226.622615-214.777515 351.106181-311.503123 6.134892 8.202029 11.604617 15.513756 17.949293 23.986968-147.549533 125.36875-244.786809 286.272803-328.551881 450.46176-80.132234-75.941678-161.26222-152.835057-245.032409-232.23049C247.631679 538.146205 266.13869 525.625703 286.58492 511.80045z"
                    p-id="2493" fill="#3a7afe"></path>
            </svg>
        <p :style="{ color: props.color.fontColor }">{{ props.mes }}</p>
    </div>
</template>

<script setup lang='ts'>
import { } from "vue"
const props = defineProps(['num', 'mes', 'color','acmp'])
</script>

<style lang="scss" scoped>
.flowItem {
    display: flex;
    align-items: center;

    span {
        border-radius: 50%;
        background-color: white;
        border: 1px solid rgb(205, 205, 205);
        width: 30px;
        height: 30px;
        color: rgb(205, 205, 205);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
    }
    svg{
        margin-right: 5px;
    }

    p {
        color: rgb(205, 205, 205);
    }
}</style>
