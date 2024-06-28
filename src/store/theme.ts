import {createSlice} from '@reduxjs/toolkit'

import {getStorage,setStorage} from '@/utils/storage'

export interface ThemeConfig {
    primary:string,
    bgColor:string,
}

const initialState:{themeConfig:ThemeConfig} = {
    themeConfig:  getStorage<ThemeConfig>('ThemeConfig') || {primary:'#1890ff',bgColor:'#f0f2f5'},
}

export const themeSlice = createSlice({
    name:'thmeme',
    initialState,
    reducers:{
        // 设置主题
        setTheme:(state,action)=>{
            state.themeConfig = {
                ...state.themeConfig,
                ...action.payload,
            }
            setStorage('themeConfig',state.themeConfig)
        }
    }
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer
