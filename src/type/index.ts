export interface CommonReturn{
    code:number,
    message:string,
}
export interface CommonReturnSuccess extends CommonReturn{
    success:boolean
}
export interface CommonReturnOk extends CommonReturn{
    ok:boolean
}
export interface CommonReturnDataNull extends CommonReturnOk{
    data:null
}
export interface RuleForm{
    username:string,
    password:string
}