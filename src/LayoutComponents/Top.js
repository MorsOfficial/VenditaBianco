import React from 'react'
import './Style/Top.css'
import { InstagramFilled } from '@ant-design/icons';

const Top = () => (
    <div>
        <div className='topbar'>
        <button class="ui button">
            
            Follow
        </button>
        </div>
        <div className='sidebar'>
        <InstagramFilled style={{ fontSize: '200%', color: 'black' }} theme="outlined"/>
        <InstagramFilled style={{ fontSize: '200%', color: 'black' }} theme="outlined"/>
        <InstagramFilled style={{ fontSize: '200%', color: 'black' }} theme="outlined"/>
        </div>
    </div>
);

export default Top;