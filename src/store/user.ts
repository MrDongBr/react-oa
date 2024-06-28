import {createSlice} from '@reduxjs/toolkit'

import {getStorage,setStorage,clearStorage} from '@/utils/storage'


const initialState:{username:string,token:string,auth:string[]} = {
    username:getStorage<string>('username') || '',
    token:getStorage<string>('token') || '',
    auth:getStorage<string []>('auth') || []
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // 登录
        setUser:(state,action)=>{
            state.username = action.payload.username
            state.token = btoa(action.payload.username)
            state.auth = ['add','delete','update', 'view']
            setStorage('username',state.username)
            setStorage('token',state.token)
            setStorage('auth',state.auth)
        },
        // 退出
        clearUser:(state)=>{
            state.username = ''
            state.token = ''
            state.auth = []
            clearStorage()
        }
    }
})

export const {setUser,clearUser} = userSlice.actions
export default userSlice.reducer
