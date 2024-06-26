import { useState, useEffect } from 'react';
import { Table, Pagination, Space, Tag } from 'antd';
import type { TableProps } from 'antd';
import {getProjectListApi} from '@/api/project'
import {DataType} from '@/types/project';
import {useSelectData} from '@/hooks/Select.hook';
import { useNavigate } from 'react-router-dom';

const MyTable = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const {channelList,secretLevelList,statusList,linkTypeList} = useSelectData()
    const navigate = useNavigate()
    const search = (currentPage: number, pageSize: number) => {
        setLoading(true);
        getProjectListApi().then(data=>{
            setLoading(false);
            setData(data.data)
            setTotal(data.result)
        })
    }

    useEffect(() => {
        search(currentPage, pageSize)
    }, [currentPage, pageSize]);


    const handleTableChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const getLevel = (key:number) =>{
        if(key===1) return 'error'
        if(key===2) return 'orange'
        if(key===3) return 'warning'
    }

    const edit = (data:DataType) => {
        navigate('/app/dataMgmt/createProject',{
            state:data
        })
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: '项目名称',
            dataIndex: 'projectName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '渠道',
            dataIndex: 'channel',
            render: (id) => <Tag bordered={false} color="success">{channelList.find(item=>item.id==id)?.name}</Tag>,
        },
        {
            title: '甲方',
            dataIndex: 'firstParty',
            width:80
        },
        {
            title: '保密等级',
            dataIndex: 'secretLevel',
            render: (id) => <Tag bordered={false} color={getLevel(id)}>{secretLevelList.find(item=>item.id==id)?.name}</Tag>,
        },
        {
            title: '经费',
            dataIndex: 'funds',
            render:(funds) =><>{funds}元/万</>
        },
        {
            title: '周期',
            dataIndex: 'cycle',
            render:(cycle) =><>{cycle}周</>,
            width:80
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (id) => <Tag bordered={false} color={getLevel(id)}>{statusList.find(item=>item.id==id)?.name}</Tag>,
            width:80
        },
        {
            title: '项目描述',
            dataIndex: 'projectDescribe',
            ellipsis:true
        },
        {
            title: '项目成员',
            dataIndex: 'projectMember',
            width:100
        },
        {
            title: '数据连接类型',
            dataIndex: 'dataConnectionType',
            render: (id) => <Tag bordered={false} color={getLevel(id)}>{linkTypeList.find(item=>item.id==id)?.name}</Tag>,
            width:120
        },
        {
            title: '服务地址',
            dataIndex: 'serviceAddress',
            ellipsis:true
        },
        {
            title: '操作',
            width:120,
            key: 'action',
            render: (_, data) => (
                <Space size="middle">
                    <a onClick={() => edit(data)}>编辑</a>  
                    <a>删除</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={false} loading={loading} rowKey="id"/>
            <Pagination current={currentPage} total={total} pageSize={pageSize} onChange={handleTableChange} className='common-pagination' />
        </div>
    );
};

export default MyTable;
