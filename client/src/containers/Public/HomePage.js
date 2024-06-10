import React from 'react'
import Search from './Search';
import Provice from './Provice';
import ListHome from './ListHome';

const HomePage = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Search />
            <Provice />
            <ListHome />
        </div>
    )
}

export default HomePage
