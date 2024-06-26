import { useState,useEffect } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate ,useLocation } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const menus:MenuItem[] = [
    {
        key: '/app/index',
        icon: <PieChartOutlined />,
        label: '首页',
    },
    {
        key: '/app/dataMgmt',
        icon: <DesktopOutlined />,
        label: '数据管理',
        children: [
            {
                key: '/app/dataMgmt/createProject',
                label: '项目创建'
            },
            {
                key: '/app/dataMgmt/admin',
                label: '平台管理员'
            },
            {
                key: '/app/dataMgmt/upload',
                label: '文件上传'
            }
        ]
    },
    {
        key: '/app/dataRetrieval',
        icon: <DesktopOutlined />,
        label: '数据检索',
        children: [
            {
                key: '/app/dataRetrieval/fullTextSearch',
                label: '全文搜索'
            } 
        ]
    }
]

const MainMenu = () => {
    const  navigateTo = useNavigate();
    
    let { pathname } = useLocation();
    const [openKeys, setOpenKeys] = useState(['/app/dataMgmt']);
    const [defaultSelectedKeys,setDefaultSelectedKeys] = useState('');


    useEffect(() => {
        let pathnameArr = pathname.split('/');
        if(pathnameArr.length > 3){
            pathnameArr = pathnameArr.slice(0,3)
        }
        setOpenKeys([pathnameArr.join('/')])

        setDefaultSelectedKeys(pathname)
    },[pathname])

    

    const changeMenu = (e:{ key: string}) => {
        navigateTo(e.key)
    };

    const onOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length -1 ] ])
    }

    return (
        <Menu openKeys={openKeys} theme="dark" selectedKeys={[defaultSelectedKeys]} mode="inline" items={menus} onClick={changeMenu} onOpenChange={onOpenChange}/>
    );
}


export default MainMenu;