import React, { useState } from 'react';
import { Layout } from 'antd';
import './index.scss';
import { Outlet } from 'react-router-dom';
import MainMenu from './components/Menu';
import MainBreadcrumb from './components/Breadcrumb';
const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
        <Layout className="home_layout">
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="home_logo" />
                <MainMenu />
            </Sider>
            <Layout>
                <Header className="home-header">
                    <MainBreadcrumb />
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
