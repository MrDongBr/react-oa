import { useEffect } from 'react';
import { Button, InputNumber, Form, Input, Select,Space} from 'antd';
import { useSelectData } from '@/hooks/useSelect.hook';
import { useNavigate,useLocation } from 'react-router-dom';
const { TextArea } = Input;

const App: React.FC = () => {
    const [ceateForm] = Form.useForm();
    const navigateTo = useNavigate()
    const { channelList, secretLevelList,linkTypeList } = useSelectData();
    const onFinish = () => {
        ceateForm.validateFields().then(() => {
            // 表单校验通过，执行提交逻辑
            const data = ceateForm.getFieldsValue(true)
            navigateTo('/app/dataMgmt/admin')
        })
    };

    const {state} = useLocation()
    useEffect(() => {
        if(state){
            ceateForm.setFieldsValue(state)
        }
    },[state])
    const onReset = () => {
        ceateForm.resetFields();
    };
    return (
        <>
            <Form
                form={ceateForm}
                labelCol={{ span: 2 }}
                autoComplete="off"
            >
                <Form.Item label="项目名称" name="projectName" rules={[{ required: true, message: '请输入项目名称' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="渠道" name="channel" rules={[{ required: true, message: '请选择渠道' }]}>
                    <Select
                        showSearch
                        placeholder="请选择渠道"
                        optionFilterProp="label"
                        options={channelList.map((item: any) => ({
                            value: item.id,
                            label: item.name,
                        }))}
                    />
                </Form.Item>

                <Form.Item label="甲方" name="firstParty" rules={[{ required: true, message: '请输入甲方' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="保密等级" name="secretLevel" rules={[{ required: true, message: '保密等级' }]}>
                    <Select
                        showSearch
                        placeholder="请选择保密等级"
                        optionFilterProp="label"
                        options={secretLevelList.map((item: any) => ({
                            value: item.id,
                            label: item.name,
                        }))}
                    />
                </Form.Item>
                <Form.Item label="经费" name="funds" rules={[{ required: true, message: '请输入经费' }]}>
                    <InputNumber addonAfter="万"  />
                </Form.Item>

                <Form.Item label="周期" name="cycle" rules={[{ required: true, message: '请输入周期' }]}>
                    <InputNumber addonAfter="周"  />
                </Form.Item>

                <Form.Item label="项目描述" name="projectDescribe">
                    <TextArea rows={4} placeholder="项目描述" maxLength={6} />
                </Form.Item>

                <Form.Item label="项目成员" name="projectMember">
                    <InputNumber addonAfter="人" />
                </Form.Item>
                <Form.Item
                    label="数据连接类型"
                    name="dataConnectionType"
                    rules={[{ required: true, message: '请选择数据连接类型' }]}
                >
                    <Select
                        showSearch
                        placeholder="请选择数据连接类型"
                        optionFilterProp="label"
                        options={linkTypeList.map((item: any) => ({
                            value: item.id,
                            label: item.name,
                        }))}
                    />
                </Form.Item>
                <Form.Item label="服务地址" name="serviceAddress" rules={[{ required: true, message: '服务地址' }]}>
                    <Input />
                </Form.Item>
            </Form>
            <Space style={{float: 'right'}}>
                <Button onClick={onReset} >
                    清空
                </Button>
                <Button onClick={onFinish} type="primary" >
                    保存
                </Button>
            </Space>
        </>
    );
};

export default App;
