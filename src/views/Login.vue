<template>
  <div class="login">
    <div class="center">
      <div class="left">

      </div>
      <div class="right">
        <el-card>
      <div class="container">
        <h1>欢迎登录环城网络</h1>
      <h3>员工Id登录</h3>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" size="default" status-icon>
        <el-form-item prop="username" label-width="auto">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" :prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password" label-width="auto">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" :prefix-icon="Unlock" type="password" />
        </el-form-item>
      </el-form>
      <br />
      <!--  @click="submitForm(ruleFormRef)" -->
      <el-button type="primary">登录</el-button>
      </div>
    </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { User, Unlock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
// import {useRouter} from 'vue-router'
import { ref, reactive } from 'vue'
import { RuleForm} from '@/type/index'
// import { login } from '@/api/user'
// const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: '111111'
});

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 20, message: '长度在5-20字符', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    { min: 6, max: 20, message: '长度在6-20字符', trigger: 'blur' },
  ],
});
//登录按钮事件 
// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   await formEl.validate(async (valid, fields) => {
//     if (valid) {//表单校验成功走这里
//       const res: LoginRes = await login(ruleForm);
//       if (res.code == 20000) {
//         router.push('/');
//       }
//     } else {
//       console.log('用户名不正确!', fields)
//     }
//   })
// }
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  background: rgb(75, 60, 249) no-repeat center / cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .center{
    width: 90%;
    height: 623px;
    background-color: rgb(255, 255, 255);
    display: flex;
    border-radius: 10px;
    .left{
      flex: 1;
      background: url(@/assets/login.png) no-repeat center /cover;
    }
    .right{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-card {
    width: 80%;
    height: 80%;
    text-align: center;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

   .container{
    width:80%
    h1 {
      margin-bottom: 20px;
    }
    h3{
      color:rgb(108, 156, 254);
      margin:30px 0;
      border-bottom:3px solid rgb(108, 156, 254);
      display: inline-block;
      padding: 20px;
    }

    :deep(.el-input__wrapper) {
      background: rgba(255, 255, 255);
    }

    :deep(.el-input__inner) {
      color: rgb(204, 204, 204);
    }

    .el-form {
      .el-form-item {
        .el-input {
          height: 40px;
        }
      }
    }

    .el-button {
      width: 80%;
      margin-bottom: 30px;
      height: 40px;
      background-color:rgb(0, 84, 254);
    }
   }
  }
    }
  }
}
</style>
