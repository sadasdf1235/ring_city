import {CommonReturnSuccess} from './index'
//登录表单
export interface RuleForm {
    username: string,
    password: string
}
interface LoginResRet{
    token:string
}
//登录 返回
export interface LoginRes extends CommonReturnSuccess{
    data:LoginResRet,
}