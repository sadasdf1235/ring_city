import { defineStore } from 'pinia'
import {reactive, ref} from 'vue'
export const useStore = defineStore('main', ()=>{
    //是否展示查看更多页面
    let showMore = ref(false)
    //控制菜单显示隐藏
    let collapse = ref(false)
    //控制首页是否是添加发票
    let isShowAdd = ref(false)
    /*
    1.上传发票
    2.转账
    3.完成
    */
    let invoiceInfo = ref(1)
    return {
        collapse,
        invoiceInfo,
        isShowAdd,
        showMore,
    }
})