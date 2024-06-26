import { notification } from 'antd';



export const $popSucess = (description:string ,message?:string)=>{
    notification.success({
        message: message || '请求成功',
        description:description,
        duration:2.5
    })
}

export const $popError = (description:string ,message?:string)=>{
    notification.error({
        message: message || '请求失败',
        description:description,
        duration:2.5
    })
}
