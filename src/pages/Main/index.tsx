import React, { useState } from 'react';
import { Layout ,Flex,Dropdown,Space } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/Menu';
import MainBreadcrumb from './components/Breadcrumb';
import { useSelector,useDispatch } from 'react-redux';
import type { MenuProps } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { clearUser } from '@/store/user';
import { useNavigate } from 'react-router-dom';
import './index.scss';
const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: '退出登录',
    },
    {
      key: 'userInfo',
      label: '个人信息',
    },
  ];
const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userInfo = useSelector((state: any) => state.user);
    const onClick: MenuProps['onClick'] = ({ key }) => {
        if(key ==='logout'){
            dispatch(clearUser())
            navigate('/')
        }
    };
    return (
        <Layout className="home_layout">
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="home_logo" />
                <MainMenu />
            </Sider>
            <Layout>
                <Header className="home-header">
                    <Flex justify="space-between">
                        <MainBreadcrumb />
                        <div>
                        <Dropdown menu={{ items,onClick  }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <UserOutlined />
                                    <div>{userInfo.username}</div>
                                </Space>
                            </a>
                        </Dropdown>
                        </div>
                       
                    </Flex>
                    
                </Header>
                <Content className="home-content">
                    <div className="home-content-inner">
                        <Outlet />
                    </div>
                </Content>
                <Footer className="text-center">Ant Design ©{new Date().getFullYear()} Created by React18 Antd5</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
