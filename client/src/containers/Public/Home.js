import React, { useEffect } from 'react'
import Header from "./Header";
import Search from './Search';
import Provice from './Provice';
import ListHome from './ListHome';
import Contact from '../../components/Contact';
import Info from '../../components/Info';
import { Outlet } from 'react-router-dom';



const Home = () => {

    return (
        <div className=' flex flex-col items-center h-full w-full'>
            <Header />

            <div className='w-full flex flex-col items-center gap-3'>
                <Outlet />
            </div>

            <Contact />
            <Info />
        </div >
    )
}

export default Home
