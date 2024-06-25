import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import React ,{useEffect,useState } from 'react';


const formData= {
    projectName: '',
    qudao: '',
    jiafang:''
}


interface List1 {
    value:string,
    label:string,
}


const App: React.FC = () => {
    const [ceateForm] = Form.useForm();
    const [list1, setList1] = useState<List1 []>([])
    useEffect(() => {
        ceateForm.setFieldsValue({
            projectName: '中船项目设计',
            qudao: '1',
            jiafang:'中船'
        })
        
        setList1([{
            value: '1',
            label: '渠道A',
        },
        {
            value: '2',
            label: '渠道B',
        },
        {
            value: '3',
            label: '渠道C',
        }])
    },[])

    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onReset = () => {
        ceateForm.resetFields();
    };
    return (
        <Form
            form={ceateForm}
            initialValues={formData}
            labelCol={{ span: 2 }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item label="项目名称" name="projectName" rules={[{ required: true, message: '请输入项目名称' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="渠道" name="qudao" rules={[{ required: true, message: '请选择渠道' }]}>
                <Select
                    showSearch
                    placeholder="请选择渠道"
                    optionFilterProp="label"
                    options={list1}
                />
            </Form.Item>

            <Form.Item label="甲方" name="jiafang" rules={[{ required: true, message: '请选择甲方' }]}>
                <Select
                    showSearch
                    placeholder="请选择甲方"
                    optionFilterProp="label"
                    options={[
                        {
                            value: '中船',
                            label: '中船',
                        },
                        {
                            value: '中石油',
                            label: '中石油',
                        },
                        {
                            value: '国电',
                            label: '国电',
                        },
                    ]}
                />
            </Form.Item>
            
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.jiafang !== currentValues.jiafang}
            >
                {({ getFieldValue }) =>
                    getFieldValue('jiafang') === '中船' ? (
                        <Form.Item
                            name="xinghao"
                            label="型号"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
        
            <Button onClick={onReset}>
                Fill form
            </Button>
        </Form>
    );
};

export default App;
