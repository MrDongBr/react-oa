import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import './index.scss';
import { Outlet,useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}


const items: MenuItem[] = [
    getItem('首页', '/app/index', <PieChartOutlined />),
    getItem('数据管理', '/app/data', <DesktopOutlined />,[
        getItem('项目创建', '/app/data-create-project'),
        getItem('平台管理员', '/app/data-admin'),
    ]),
    
];



const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const  navigateTo = useNavigate();

    const changeMenu = (e:{ key: string}) => {
        navigateTo(e.key)
    };
    return (
        <Layout className="home_layout">
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="home_logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={changeMenu} />
            </Sider>
            <Layout>
                <Header className="home-header">
                    <Breadcrumb className="home-header_breadcrumb">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content className="home-content">
                    <div className="home-content-inner">
                        <Outlet />
                    </div>
                </Content>
                <Footer className="text-center">Ant Design ©{new Date().getFullYear()} Created by 【】</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
