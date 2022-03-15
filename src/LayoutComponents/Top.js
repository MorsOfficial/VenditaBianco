import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Top = () => (
    <div>
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
);

export default Top;