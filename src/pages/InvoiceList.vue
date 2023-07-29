<template>
    <div class="invoice">
        <div class="show" v-if="flag == 0">
            <el-card class="top">
                <Category />
            </el-card>
            <el-card class="bottom">
                <el-table :data="form" border>
                    <el-table-column label="所属项目" width="150" prop="project"></el-table-column>
                    <el-table-column label="销方公司" prop="company"></el-table-column>
                    <el-table-column label="开票金额" width="200" prop="price"></el-table-column>
                    <el-table-column label="管理人员" width="150" prop="person"></el-table-column>
                    <el-table-column label="开票时间" prop="date"></el-table-column>
                    <el-table-column label="操作" width="100" class="handle">
                        <a href="javascript:;"
                            style="border-right: 1px solid rgb(75, 134, 254);margin-right: 5px;padding: 5px;"
                            @click="detail">明细</a>
                        <a href="javascript:;" @click="edit">修改</a>
                    </el-table-column>
                </el-table>
            </el-card>
        </div>
        <div class="detail" v-else>
            <h2>{{ flag == 1 ? '发票明细' : '发票修改' }}</h2>
            <el-card>
                <div class="container">
                    <div class="item">
                        <h3>基本类型</h3>
                        <div class="itemTab">
                            <List first-name="发票种类" last-name="电子发票" />
                            <List first-name="开票日期" last-name="电子发票" />
                        </div>
                    </div>
                    <div class="item">
                        <h3>基本信息</h3>
                        <div style="display: flex;flex-direction: column;">
                            <List first-name="购方名称" last-name="电子发票" width="650" />
                            <div class="itemTable" style="margin: 0;">
                                <List first-name="商品名称" last-name="电子发票" />
                                <List first-name="摘要备注" last-name="电子发票" />
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h3>价税信息</h3>
                        <div class="itemTable">
                            <List first-name="合计金额" last-name="电子发票" />
                            <List first-name="合计税额" last-name="电子发票" last-color="rgb(160, 191, 254)" />
                                <List first-name="价税合计" last-name="电子发票" />
                        </div>
                    </div>
                    <div class="item">
                        <h3>发票照片</h3>
                        <img style="width: 330px;height: 160px;" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1e27ol?w=300&h=157&q=60&m=6&f=jpg&u=t" alt="">
                    </div>
                    <el-button type="primary" v-if="flag==2" @click="save">保存</el-button>
                    <el-button type="default" @click="cancel">取消</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from "vue"
import Category from "@/components/Category.vue";
import List from '@/components/List.vue'
/*
0 表示展示
1 表示明细
2 表示修改
*/
let flag = ref(0)
let form = reactive([
    {
        project: '芯谷项目',
        company: '成都天大xxxxxxxx',
        price: '￥3800.00',
        person: '赵莎莎',
        date: '2021-02-19 11:00:00'
    }
])
function detail() {
    flag.value = 1
}
function edit() {
    flag.value = 2
}
function cancel(){
    flag.value = 0
}
function save(){
    flag.value = 0
}
</script>

<style lang="scss" scoped>
.invoice {
    .show {

        .top,
        .bottom {
            margin: 20px;
        }
    }

    .detail {
        margin: 20px;

        h2 {
            margin-bottom: 20px;
        }

        .el-card {
            .container {
                .item {
                    margin: 10px 0;
                    display: flex;
                    flex-direction: column;
                    h3{
                        margin-bottom: 10px;
                    }
                    .itemTable {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row;
                    }
                }
            }
        }
    }
}
</style>
