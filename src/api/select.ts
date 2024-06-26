
import http from '@/utils/http';
import {SelectItem} from '@/types/select';

// 获取渠道列表
export const getChannelListApi = () => {
    return http.get<SelectItem []>('/channel');
}


// 获取保密等级列表
export const getSecretLevelListApi = () => {
    return http.get<SelectItem []>('/secretLevel');
}


// 获取状态列表
export const getStatusListApi = () => {
    return http.get<SelectItem []>('/status');
}


// 获取链接类型
export const getLinkTypeListApi = () => {
    return http.get<SelectItem []>('/linkType');
}