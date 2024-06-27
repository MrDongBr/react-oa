import { useState } from 'react';
import { Button,Space,Divider  } from 'antd';
import { $popError,$popSuccess } from '@/utils/notify';
import { $confirm } from '@/utils/confirm';
import useCheckAuth from '@/hooks/useCheckAuth.hook'
const App = () => {
    const {checkAuth} = useCheckAuth()
    const showConfirm = () =>{
        $confirm({
            content:'一般都是删除确认框',
            onOk:()=>{
                console.log('点击了确定')
            },
            onCancel:()=>{
                console.log('点击了取消')
            }
        })
    }
    const showSuccess = () =>{
        $popSuccess('成功消息')  
    }
    const showError = () =>{
        $popError('失败消息')
    }

    return (
        <>
            <Button type='primary' onClick={showConfirm}>点击出现弹窗</Button>
            <Divider />
            <Space>
                <Button type='primary' onClick={showSuccess}>点击弹出成功消息</Button>
                <Button type='primary' onClick={showError}>点击弹出失败消息</Button>    
            </Space>
            <Divider />
            <Space>
                {checkAuth('add') && <Button type='primary'>新增权限</Button>}
                {checkAuth('delete') && <Button type='primary'>删除权限</Button>}
                {checkAuth('view') && <Button type='primary'>查看权限</Button>}
                {checkAuth('update') && <Button type='primary'>编辑权限</Button> }
            </Space>
        </>
        
    );
};
export default App;
