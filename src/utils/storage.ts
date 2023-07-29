import {TOKENKEY} from './const'
export function getToken():string{
    const token:string|null = localStorage.getItem(TOKENKEY)
    if(token != null){
        return token
    }
    return  ''
}
export function setToken(value:string):void{
    localStorage.setItem(TOKENKEY,value)
}
export function removeToken(){
    localStorage.removeItem(TOKENKEY)
}