import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import {setUser} from '@/store/user'
import {useDispatch} from "react-redux";
const Login: React.FC = () => {
    const [loginForm] = Form.useForm();
    const navigate = useNavigate();
    const dispatch =  useDispatch()
    const login = () => {
        loginForm.validateFields().then(() => {
            // 表单校验通过，执行提交逻辑
            const data = loginForm.getFieldsValue(true)
            if(data){
                dispatch(setUser(data))
                navigate('/app/index')
            }
        })
    }
    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className="login">
            <Card className="login-box">
                <div className="login-title">后台管理系统通用模板</div>
                <Form  onFinish={onFinish} autoComplete="off" className="login-form"  form={loginForm}>
                    <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input placeholder="用户名" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password placeholder="密码" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block onClick={login}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
