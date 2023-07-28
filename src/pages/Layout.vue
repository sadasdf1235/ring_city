<template>
  <div class="layout">
    <el-card class="top">
      <div class="container">
        <div class="left">
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div>
          <h2>早安，赵莎莎，祝你开心每一天</h2>
          <p>项目主任 | 环城网络———综合办公室——运营中心</p>
        </div>
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
    </el-card>
    <el-card class="bottom">
      <div class="container">
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
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { } from "vue"
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
  }
}</style>
