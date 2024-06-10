import React from 'react';
import {SlideBar, TestLinhTinh} from '../../../components/AdminPage';

const HomeAdmin = () => {
    return (
        <div className=' homeAdmin'>
            <SlideBar />
            <div className='content-admin'>
                <TestLinhTinh />
            </div>
            
        </div >
    )
};

export default HomeAdmin;
