import React from 'react'
import { TestLinhTinh } from '../../components/AdminPage'
import { Routes, Route } from 'react-router-dom'
import HomeAdmin from '../../../src/components/AdminPage/HomeAdmin/HomeAdmin'
import Orders from '../../components/AdminPage/Orders/Orders'
import AdminSlideBar from '../../components/AdminPage/AdminSlideBar/AdminSlideBar'
import { Customer } from '../../components/AdminPage/Customer/Customer'
import { MyAccount } from '../../components/AdminPage/MyAccount/MyAccount'
import { Statistics } from '../../components/AdminPage/Statistics/Statistics'
import { RoomAdmin } from '../../components/AdminPage/RoomAdmin/RoomAdmin'
import { AdminHotel } from '../../components/AdminPage/AdminHotel/AdminHotel'

const System = () => {
  const handleClose = () => {

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSlideBar handleClose={handleClose} />
        </div>

        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<HomeAdmin />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/room' element={<RoomAdmin />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/hotel' element={<AdminHotel />} />
            <Route path='/statistics' element={<Statistics />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default System
