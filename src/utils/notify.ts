/**
 * antd的静态方法，消费 context
 */

import { notification } from 'antd';

export const $popSuccess = (description:string ,message?:string)=>{
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
