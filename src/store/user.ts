import {createSlice} from '@reduxjs/toolkit'

import {getStorage,setStorage,clearStorage} from '@/utils/storage'
const initialState = {
    username:getStorage('username') || '',
    token:getStorage('token') || '',
    auth:getStorage('auth') || []
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
