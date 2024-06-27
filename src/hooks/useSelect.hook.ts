import { useState, useEffect } from 'react';
import {getChannelListApi,getSecretLevelListApi,getStatusListApi,getLinkTypeListApi} from '@/api/select'
import {SelectItem} from '@/types/select'



export const useSelectData = () => {
    const [channelList, setChannelList] = useState<SelectItem[]>([]);
    const [secretLevelList, setSecretLevelList] = useState<SelectItem[]>([]);
    const [statusList, setStatusList] = useState<SelectItem[]>([]);
    const [linkTypeList, setLinkTypeList] = useState<SelectItem[]>([]);
    useEffect(() => {
        // 获取渠道数据
        getChannelListApi().then(data=>{
            setChannelList(data)
        })
        // 获取加密等级数据
        getSecretLevelListApi().then(data=>{
            setSecretLevelList(data)
        })
        // 获取状态数据
        getStatusListApi().then(data=>{
            setStatusList(data)
        })
        // 获取链接类型
        getLinkTypeListApi().then(data=>{
            setLinkTypeList(data)
        })
    },[])
    return {
        channelList,
        secretLevelList,
        statusList,
        linkTypeList
    }
}