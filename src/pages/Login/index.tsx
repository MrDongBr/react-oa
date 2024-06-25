import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import './index.scss';

const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values);
};

const App: React.FC = () => (
    <div className='login'>
        <Card className='login-box'>
            <div className='login-title'>后台管理系统通用模板</div>
            <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                className='login-form'
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input placeholder='用户名'/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder='密码'/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" className='form-btn'>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
    
);

export default App;
