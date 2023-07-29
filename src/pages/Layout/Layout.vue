<template>
  <div class="layout">
    <el-card class="top">
      <div class="container" v-if="!store.isShowAdd">
        <div class="left">
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div>
          <h2>早安，赵莎莎，祝你开心每一天</h2>
          <p>项目主任 | 环城网络———综合办公室——运营中心</p>
        </div>
        <el-button type="primary" @click="addInvoice">新增发票</el-button>
      </div>
      <div class="right">
        <div class="rLeft">
          <p>待审核发布</p>
          <div>
            <span>8</span>
            <p>/24</p>
          </div>
        </div>
        <div class="rRight">
          <p>发票数据库</p>
          <h2>2,223</h2>
        </div>
      </div>
      </div>
      <div class="add" v-else>
        <h2>新增发票</h2>
        <p>归档至成都环城网络科技有限公司项目数据库</p>
        <el-button type="primary" @click="addInvoice">返回</el-button>
      </div>
    </el-card>
    <el-card class="bottom">
      <div class="container" v-if="!store.isShowAdd">
        <div class="nav">
          <h2>更新动态</h2>
          <p>查看更多</p>
        </div>
        <div class="item" v-for="item in 15" :key="item">
          <div>
            <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <p>运营中心 王小翔 在 芯谷项目 新增了 北京华联 2023年7月14日 ￥3200.00的发票信息</p>
          </div>
          <p>一小时前</p>
        </div>
      </div>
      <div class="add" v-else>
        <UploadInvoice v-if="store.invoiceInfo==1"/>
        <Transfer v-else-if="store.invoiceInfo==2"/>
        <Accomplish v-else/>
      </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import UploadInvoice from "./UploadInvoice.vue";
import Transfer from "./Transfer.vue";
import Accomplish from "./Accomplish.vue";
import {useStore} from '@/store/index'
const store = useStore()
//新增发票按钮
function addInvoice(){
  store.$patch({
    isShowAdd:!store.isShowAdd
  })
}
</script>

<style lang="scss" scoped>
.layout {
 .top {
    margin: 20px 40px;
    padding: 20px;

    .container{
      padding: 0;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
      div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        p{
          color:rgb(172, 175, 186);
          margin-top: 10px;
        }
      }
    }

    .right {
      display: flex;

      .rLeft {
        display: flex;
        flex-direction: column;
        border-right: 1px solid rgb(233, 233, 233);
        align-items: center;
        justify-content: center;
        padding-right: 20px;

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          p{
            color:rgb(252, 252, 253)
          }
          span {
            font-size: 23px;
            font-weight: bold;
          }
        }
      }

      .rRight {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
      }
    }
    }
    .add{
      display: flex;
      flex-direction: column;
      p{
        margin-top: 10px;
      }
    }
  }

  .bottom {
    margin: 20px 40px;
    .container{
      padding: 20px;
      .nav{
        display: flex;
        justify-content: space-between;
        p{
          color:rgb(16, 140, 254)
        }
        margin-bottom: 20px;
      }
      .item{
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        background-color: rgb(248, 249, 251);
        div{
          display: flex;
          align-items: center;
        }
      }
    }
    .add{
      display: flex;
      justify-content: center;
    }
  }
}</style>
