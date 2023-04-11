import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Home from '@/pages';

const { Header } = Layout;
const { Item } = Menu;

function Navbar() {
    return (
        <Header className='bg-teal-950'>
            <Menu className='bg-teal-950'>
                <Item ><HomeOutlined color='white' /></Item>
            </Menu>
        </Header>
    );
};

export default Navbar;
